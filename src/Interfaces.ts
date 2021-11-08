import React, { Dispatch, SetStateAction } from "react";
import { store } from "./store";

export interface IItem {
  item: string;
  id: number;
  finished: boolean;
}

export interface IProps {
  items: IItem[];
  target: number;
  finished: boolean
}
