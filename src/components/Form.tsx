import React, { ChangeEvent, FormEvent, FC, useState } from "react";
import { IState } from "../Interfaces";

export const Form: FC<IState> = ({ items, setItems, setTarget, target }) => {
  const [input, setInput] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const handleClick = (e: FormEvent): void => {
    e.preventDefault();
    if (!input) return;
    setItems([...items, { item: input, id: Math.random() }]);
    setInput("");
  };

  const rndSelect = (e: FormEvent): void => {
    e.preventDefault();
    
    if (items.length > 1) {
      let target = items[Math.floor(Math.random() * items.length)];
      setTarget(target.id);
    }
    
    if (items.find((el) => el.id === target)) {
      setItems((prev) => prev.filter((el) => el.id !== target));
    }

    console.log('->',target);
    
  };

  return (
    <form className="mt-5">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Item to add</label>
        <input
          type="text"
          className="form-control mt-2"
          value={input}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary m-3"
        onClick={handleClick}
      >
        Add Item
      </button>
      <button className="btn btn-danger m-3" onClick={rndSelect}>
        Randomize
      </button>
    </form>
  );
};
