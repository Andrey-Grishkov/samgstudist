import {DISCIPLIN_TITLE} from "./types";

const initialState = {
  title: []
}

export const pageTitleReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISCIPLIN_TITLE: {return {title: [action.payload]};}
    default:
      return state
    }
  }
