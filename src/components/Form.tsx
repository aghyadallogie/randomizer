import React, { ChangeEvent, FormEvent, FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IItem } from "../Interfaces";
import {
  addItemAction,
  setTargetAction,
  selectItems,
  clearItemsAction,
  removeItemAction,
  selectTarget,
} from "../store";

export const Form: FC = () => {
  const [input, setInput] = useState("");
  const items = useSelector(selectItems);
  const target = useSelector(selectTarget);

  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const handleClick = (e: FormEvent): void => {
    e.preventDefault();
    if (!input) return;
    dispatch(addItemAction(input));
    setInput("");
  };

  //////
  const rndSelect = (e: FormEvent): void => {
    e.preventDefault();

    if (items.length > 1) {
      const filtered = [...items].filter((ele) => ele.finished === false);
      let rnd = filtered[Math.floor(Math.random() * filtered.length)];
      console.log(target);
      
      
      dispatch(setTargetAction(rnd.id));
      dispatch(removeItemAction(target));
    } else {
      dispatch(clearItemsAction());
    }
  };

  return (
    <form className="mt-5">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Add an item here</label>
        <input
          type="text"
          className="form-control mt-2"
          value={input}
          onChange={handleChange}
        />
      </div>
      <div className="btns">
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Add Item
        </button>
        <button className="btn btn-danger" onClick={rndSelect}>
          Randomize
        </button>
      </div>
    </form>
  );
};
