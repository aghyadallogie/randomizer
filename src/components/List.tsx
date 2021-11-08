import React, { FC } from "react";
import { IProps } from "../Interfaces";

export const List: FC<IProps> = ({ items, target }) => {
  const renderList = (): JSX.Element[] => {
    return items.map((item) => (
      <li
        key={item.id}
        className="list-group-item"
        style={
          item.id === target ? { color: "red", background: "whitesmoke" } : {}
        }
      >
        {item.item}
      </li>
    ));
  };

  return <ul className="list-group">{renderList()}</ul>;
};
