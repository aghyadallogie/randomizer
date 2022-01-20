import React, { FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Form } from "./components/Form";
import { List } from "./components/List";

const App: FC = () => {
  return (
      <div className="container d-flex justify-content-around mt-5">
        <Form />
        <List />
      </div>
  );
};

export default App;
