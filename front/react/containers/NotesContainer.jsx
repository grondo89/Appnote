import React, { Component } from "react";
import Notes from "../components/Notes";
import { connect } from "react-redux";
import { remNote, editNote } from "../../store/actions/notesactioncreators";

class NotesContainer extends Component {
  constructor(props) {
    super(props);

    this.noteDelete = this.noteDelete.bind(this);
    this.noteEdit = this.noteEdit.bind(this)
  }

  noteEdit(i){
    console.log("hola estoy entrando en edit note", i)
    this.props.editNote(i)
  }

  noteDelete(i) {
    this.props.remNote(i);
  }

  render() {
    return <Notes notes={this.props.notes} noteDelete={this.noteDelete}
    noteEdit={this.noteEdit}
    note={this.props.note} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.userNotes,
    note : state.note
  };
};

const MapDispatchToProps = (dispatch, ownProps) => ({
  remNote: index => dispatch(remNote(index)),
  editNote: index => dispatch(editNote(index))
});

export default connect(
  mapStateToProps,
  MapDispatchToProps
)(NotesContainer);
