export type cardType = {
  index: number;
  text: string;
  img: string;
  title: string;
};

export type trackerType = {
  id: number;
  name: string;
  tasks: {
    id: number;
    name: string;
    isComplete: boolean;
  }[];
};
