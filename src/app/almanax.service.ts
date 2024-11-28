import { Injectable } from '@angular/core';
import { Offering } from './offering';
import { formatNumber, separateDate } from './utils';

@Injectable({
  providedIn: 'root',
})
export class AlmanaxService {
  private readonly API_URL = 'https://api.dofusdb.fr';

  constructor() {}

  async getTodayAlmanax() {
    const [month, day, year] = new Date()
      .toISOString()
      .split('T')[0]
      .split('-'); // [03, 28, 2024]
    const res = await fetch(
      `${this.API_URL}/almanax?date=${month}/${day}/${year}`
    );
    return await res.json();
  }

  async getAlmanaxData(month: number, day: number, year: number) {
    const res = await fetch(
      `${this.API_URL}/almanax?date=${month}/${day}/${year}`
    );
    return await res.json();
  }

  async getAlmanaxByMounth(month: number, year: number) {
    const fullMonth = [];

    for (let i = 1; i <= this.daysInMonth(month, year); i++) {
      fullMonth.push(i);
    }

    const responses = Promise.all(
      fullMonth.map(async (day) => {
        const res = await this.build(month, day, year);
        return res;
      })
    );

    return await responses;
  }

  async getAlmanaxByRangeOfDays(range: 7 | 15 | 30) {
    const offers = [];
    const today = new Date().toLocaleString('en-US', {
      timeZone: 'Europe/Paris',
    }); // Hoje horario de Paris
    const [year, month, day] = separateDate(new Date(today)); // [2024, 11, 27]
    const monthLenght = this.daysInMonth(Number(month), Number(year));

    offers.push({
      day: Number(day),
      month: Number(month),
      year: Number(year),
    });

    if (Number(day) + range > monthLenght) {
      const remainingDays = monthLenght - Number(day); // Numero de dias que faltam para acabar o mês
      const rest = range - remainingDays; // Numero de dias que faltam para concluir o range

      for (let i = 1; i <= remainingDays; i++) {
        offers.push({
          day: Number(day) + i,
          month: Number(month),
          year: Number(year),
        });
      }
      for (let i = 1; i <= rest; i++) {
        offers.push({
          day: i,
          month: Number(month) < 12 ? Number(month) + 1 : 1,
          year: Number(month) < 12 ? Number(year) : Number(year) + 1,
        });
      }
    } else {
      for (let i = 1; i <= range; i++) {
        offers.push({
          day: Number(day) + i,
          month: Number(month),
          year: Number(year),
        });
      }
    }

    const responses = Promise.all(
      offers.map(async (date) => {
        const res = await this.build(date.month, date.day, date.year);
        return res;
      })
    );

    return await responses;
  }

  private async getQuestData(almanaxId: number) {
    const res = await fetch(
      `${this.API_URL}/quests?startCriterion[$regex]=Ad=${almanaxId}`
    );
    return await res.json();
  }

  private async getItemData(itemId: number) {
    const res = await fetch(`${this.API_URL}/items/${itemId}`);
    return await res.json();
  }

  async build(month: number, day: number, year: number) {
    const almanax = await this.getAlmanaxData(month, day, year);
    const quest = await this.getQuestData(almanax.id);
    const itemId = quest.data[0].steps[0].objectives[0].need.generated.items[0];
    const quantity =
      quest.data[0].steps[0].objectives[0].need.generated.quantities[0];
    const item = await this.getItemData(itemId);
    const kamasRatio = quest.data[0].steps[0].rewards.at(-1).kamasRatio;

    const offering: Offering = {
      date: `${month}/${day < 10 ? '0' + day : day}/${year}`,
      item: {
        name: item.name.pt,
        imageURL: item.img,
      },
      quantity: quantity,
      bonus: {
        desc: almanax.desc.pt,
        name: almanax.name.pt,
      },
      reward: {
        kamas: formatNumber(Math.trunc(21990 * kamasRatio)),
        xp: formatNumber(2500000),
        almatokens: 17,
      },
    };
    return offering;
  }

  private daysInMonth(m: number, y: number) {
    switch (m) {
      case 1: // January
      case 3: // March
      case 5: // May
      case 7: // July
      case 8: // August
      case 10: // October
      case 12: // December
        return 31;
      case 4: // April
      case 6: // June
      case 9: // September
      case 11: // November
        return 30;
      case 2: // February
        return y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0) ? 29 : 28;
      default:
        return -1; // Invalid month
    }
  }
}
