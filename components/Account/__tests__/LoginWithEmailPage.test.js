import React from "react";
import { render } from "@testing-library/react-native";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import LoginWithEmailPage from "../LoginWithEmailPage";

describe("Login screen", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store, wrapper;
  it("should go to user page on login", () => {
    store = mockStore(initialState);

    const page = render(
      <Provider store={store}>
        <LoginWithEmailPage />
      </Provider>
    );

    const loginButton = page.getByTestId("loginButton");
  });
});
