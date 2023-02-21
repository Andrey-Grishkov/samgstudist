import {DISCIPLIN_TITLE, SUBJECT_TITLE} from "./types";

const initialState = {
  title: []
}

export const pageTitleReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISCIPLIN_TITLE: {return {title: [action.payload], flag:action.type};}
    case SUBJECT_TITLE: {return {title: [action.payload], flag:action.type};}
    default:
      return state
    }
  }
