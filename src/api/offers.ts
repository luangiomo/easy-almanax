import { formatNumber } from "../utils/formatNumber";
import { getParisTime } from "../utils/getParisTime";

const API_URL = "https://api.dofusdb.fr";

async function getAlmanaxData(month: string, day: string, year: string) {
  const res = await fetch(`${API_URL}/almanax?date=${month}/${day}/${year}`);
  return await res.json();
}

async function getQuestData(almanaxId: number) {
  const res = await fetch(
    `${API_URL}/quests?startCriterion[$regex]=Ad=${almanaxId}`
  );
  return await res.json();
}

async function getItemData(itemId: number) {
  const res = await fetch(`${API_URL}/items/${itemId}`);
  return await res.json();
}

async function build(month: string, day: string, year: string) {
  const almanax = await getAlmanaxData(month, day, year);
  const quest = await getQuestData(almanax.id);
  const itemId = quest.data[0].steps[0].objectives[0].need.generated.items[0];
  const quantity =
    quest.data[0].steps[0].objectives[0].need.generated.quantities[0];
  const item = await getItemData(itemId);
  const rewards = quest.data[0].steps[0].rewards;

  const kamas = 21990;
  const kamasRatio = rewards[0].kamasRatio;
  const experience = [
    36197, 96049, 195421, 343913, 551125, 826657, 1180109, 1621081, 2159173,
    2500000,
  ];

  const offering = {
    date: `${month}/${day}/${year}`,
    item: {
      name: item.name,
      imageURL: item.img,
    },
    quantity: quantity,
    bonus: {
      desc: almanax.desc,
      name: almanax.name,
    },
    rewards: {
      kamas: formatNumber(Math.trunc(kamas * kamasRatio)),
      xp: experience.map((xp) => formatNumber(Math.trunc(xp))),
      almatokens: rewards,
    },
  };
  return offering;
}

// --------------------/~~/--------------------

export async function getTodayAlmanaxOffer() {
  const { month, day, year } = getParisTime(); // [12,31,24]
  const todayOffer = await build(month, day, year);
  return todayOffer;
}

export async function getAlmanaxOfferByDate(
  month: string,
  day: string,
  year: string
) {
  const offer = await build(month, day, year);
  return offer;
}
