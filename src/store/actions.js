import {DISCIPLIN_TITLE, SUBJECT_TITLE} from "./types";

export function setDisciplinTitle(title) {
  return {
    type: DISCIPLIN_TITLE,
    payload: title
  }
}

export function setSubjectTitle(title) {
  return {
    type: SUBJECT_TITLE,
    payload: title
  }
}
