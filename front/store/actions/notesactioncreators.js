import { ADD_NOTE, REM_NOTE, SET_NOTE, EDIT_NOTE } from "../../utils/constants";

export function setNote(note) {
  return { type: ADD_NOTE, note };
}

export function remNote(index) {
  return { type: REM_NOTE, index };
}

export function editNote(index) {
  return { type: SET_NOTE, index };
}

export function setEditNote(note) {
  return { type: EDIT_NOTE, note };
}
