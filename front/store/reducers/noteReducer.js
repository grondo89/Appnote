import {
  ADD_NOTE,
  SET_NOTE,
  REM_NOTE,
  EDIT_NOTE
} from "../../utils/constants";

const initialState = {
  note: {},
  userNotes: [],
  index: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE: {
      return Object.assign({}, state, {
        userNotes: [...state.userNotes, action.note]
      });
    }
    case REM_NOTE: {
      state.userNotes.splice(action.index - 1, 1);
      return Object.assign({}, state, {
        userNotes: [...state.userNotes]
      });
    }
    case SET_NOTE: {
      return Object.assign({}, state, {
        note: state.userNotes.slice(action.index - 1, action.index),
        index: action.index
      });
    }
    case EDIT_NOTE: {
      return Object.assign({}, state, {
        userNotes: [
          ...state.userNotes.slice(0, action.note.index - 1),
          action.note,
          ...state.userNotes.slice(action.note.index)
        ]
      });
    }

    default:
      return state;
  }
};
