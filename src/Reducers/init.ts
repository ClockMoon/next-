import { createAction, handleActions } from "redux-actions"

export const initialState = {
  init: true
}

export const REDUX_TEST = "REDUX_TEST"

export const actionTest = createAction(REDUX_TEST)

export default handleActions(
  {
    [REDUX_TEST]: state => {
      return {
        ...state,
        init: false
      }
    }
  },
  initialState
)
