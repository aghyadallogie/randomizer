import React, { Dispatch, SetStateAction } from "react";

export interface IItem {
  item: string;
  id: number;
}

export interface IProps {
  items: IItem[];
  target: number
}

export interface IState {
  items: IItem[];
  target: number;
  setItems: Dispatch<SetStateAction<IItem[]>>;
  setTarget: Dispatch<SetStateAction<number>>;
}
