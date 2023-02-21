import {DISCIPLIN_TITLE} from "./types";

export function setDisciplinTitle(title) {
  return {
    type: DISCIPLIN_TITLE,
    payload: title
  }
}
