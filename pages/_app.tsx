import React from "react"
import { Provider } from "react-redux"
import withRedux from "next-redux-wrapper"

import App, { Container } from "next/app"

import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import { createStore, applyMiddleware } from "redux"

import thunkMiddleware from "redux-thunk"

import Reducers from "../src/Reducers/index"

const store = () => {
  return createStore(Reducers, {}, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}

class Myapp extends App<{ store: object }> {
  render(): JSX.Element {
    const { Component, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Component />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(store)(Myapp)
