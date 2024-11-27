import { Component, Input } from '@angular/core';
import { Offering } from '../offering';
import { separateDate } from '../utils';
import { AlmanaxService } from '../almanax.service';

@Component({
  selector: 'app-offering-list',
  templateUrl: './offering-list.component.html',
  styleUrls: ['./offering-list.component.css'],
})
export class OfferingListComponent {
  offerings: Offering[] = [];
  filteredOfferings: Offering[] = [];
  viewMode: 'offer' | 'bonus' = 'offer';
  daysRange: 7 | 15 | 30 = 15;
  loading = false;
  today = '';

  constructor(private almanaxService: AlmanaxService) {
    this.loading = true;
    this.almanaxService
      .getAlmanaxByRangeOfDays(30)
      .then((res) => {
        this.offerings = res;
      })
      .finally(() => {
        this.loading = false;
        this.onChangeDaysRange(this.daysRange);
      });
    let teste = new Date().toLocaleString('pt-BR', {
      timeZone: 'Europe/Paris',
    });

    const [year, month, day] = separateDate(new Date());
    this.today = `${month}/${day}/${year}`;
  }

  onChangeViewMode(mode: 'offer' | 'bonus') {
    this.viewMode = mode;
  }

  onChangeDaysRange(range: 7 | 15 | 30) {
    this.daysRange = range;
    this.filteredOfferings = this.offerings.slice(0, range + 1);
  }
}
