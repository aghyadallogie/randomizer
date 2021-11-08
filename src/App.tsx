import React, { FC, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { IItem } from "./Interfaces";

const App: FC = () => {
  const [target, setTarget] = useState<number>(1000);
  const [items, setItems] = useState<IItem[]>([
    { item: "Andrey", id: 1 },
    { item: "Antonis", id: 2 },
    { item: "Bashar", id: 3 },
    { item: "Belal", id: 4 },
    { item: "Ben", id: 5 },
    { item: "Benraiss", id: 6 },
    { item: "Eko", id: 7 },
    { item: "Fabian", id: 8 },
    { item: "Grzegorz", id: 9 },
    { item: "Hamid", id: 10 },
    { item: "Michelle", id: 11 },
    { item: "Naomi", id: 12 },
    { item: "Nour", id: 13 },
    { item: "Ramazan", id: 14 },
    { item: "Stani", id: 15 },
    { item: "Wadim", id: 16 },
  ]);

  return (
    <div className="container d-flex justify-content-around mt-5">
      <Form
        items={items}
        setItems={setItems}
        target={target}
        setTarget={setTarget}
      />
      <List items={items} target={target} />
    </div>
  );
};

export default App;
