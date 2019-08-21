import React from "react";
import { Switch, Route } from "react-router-dom";
import NotesContainer from "../containers/NotesContainer"
import InputContainer from "../containers/InputContainer";


export default () => {
  return (
    <div>
      <Route component={NotesContainer} />
    </div>
  );
};
