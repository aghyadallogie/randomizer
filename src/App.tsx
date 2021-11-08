import React, { FC, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { IItem } from "./Interfaces";

const App: FC = () => {
  const [items, setItems] = useState<IItem[]>([]);
  const [target, setTarget] = useState<number>(1000);

  return (
    <div className="container d-flex justify-content-around mt-5">
      <Form items={items} setItems={setItems} target={target} setTarget={setTarget} />
      <List items={items} target={target} />
    </div>
  );
};

export default App;
