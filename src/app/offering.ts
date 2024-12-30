export type Offering = {
  date: string;
  quantity: number;
  item: {
    name: string;
    imageURL: string;
  };
  bonus: {
    desc: string;
    name: string;
  };
  reward: {
    kamas: string;
    xp: string;
    almatokens: number;
  };
};
