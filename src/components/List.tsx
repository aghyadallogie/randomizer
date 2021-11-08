import React, { FC } from "react";
import { useSelector } from "react-redux";
import { IItem } from "../Interfaces";
import { selectItems, selectTarget } from "../store";

export const List: FC = () => {
  const items = useSelector(selectItems);
  const target = useSelector(selectTarget);

  const renderList = (): JSX.Element[] => {
    return items.map((item: IItem) => (
      <li
        key={item.id}
        className="list-group-item"
        style={
          item.id === target
            ? { color: "red", background: "whitesmoke" }
            : item.finished
            ? { color: "white", background: "grey" }
            : {}
        }
      >
        {item.item}
      </li>
    ));
  };

  return <ul className="list-group">{renderList()}</ul>;
};
