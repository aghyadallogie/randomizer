import React, { FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { Provider } from "react-redux";
import { store } from "./store";

const App: FC = () => {
  return (
    <div className="container d-flex justify-content-around mt-5">
      <Form />
      <List />
    </div>
  );
};

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
