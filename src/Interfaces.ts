export interface IItem {
  item: string;
  id: number;
  finished: boolean;
}

export interface IProps {
  items: IItem[];
  target: number;
  finished: boolean;
}

export interface ItemsSliceState {
  items: IItem[];
  target: number;
}
