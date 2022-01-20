import React, { ChangeEvent, FormEvent, FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

  const rndSelect = (e: FormEvent): void => {
    e.preventDefault();
    const filtered = items.filter((student) => student.finished === false);
    const availableIDs = filtered.map((item) => item.id);
    console.log(availableIDs);

    let mint = setInterval(() => {
      const randomID = availableIDs[Math.floor(Math.random() * availableIDs.length)];
      dispatch(setTargetAction(randomID));
    }, 150);
    setTimeout(() => clearInterval(mint), 2000);

    dispatch(removeItemAction(target));
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
