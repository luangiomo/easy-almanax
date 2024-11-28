export type Offering = {
  date: string;
  item: {
    name: string;
    imageURL: string;
  };
  quantity: number;
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
