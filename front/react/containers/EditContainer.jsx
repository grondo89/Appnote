import React, { Component } from "react";
import { connect } from "react-redux";
import Edit from "../components/Edit";
import { setEditNote } from "../../store/actions/notesactioncreators";

class EditContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
      color: "",
      index : 0
    };
    this.noteChange = this.noteChange.bind(this);
    this.editSubmit = this.editSubmit.bind(this);
    this.noteColorChange = this.noteColorChange.bind(this);
  }

  componentWillReceiveProps(nextProps){
    console.log("PROPS HAVE CHANGED IN INPUTCONT", nextProps.note[0])
    let msg = nextProps.note[0].note
    let color = nextProps.note[0].color
    let ind = nextProps.index
    this.setState({
      note : msg,
      color: color,
      index: ind 
    })
  }

  noteChange(e) {
    this.setState({
      note: e.target.value
    });
  }

  noteColorChange(e) {
    e.preventDefault();
    this.setState({
      color: e.target.textContent
    });
  }

  editSubmit(e) {
    e.preventDefault();
    this.props.setEditNote(this.state);
    this.setState({
      note: "",
      color: "",
      index: 0
    });
  }

  render() {
//    console.log("SOY PROPS", this.props)
//    console.log("SOY STATE", this.state);
    return (
      <Edit
        noteChange={this.noteChange}
        editSubmit={this.editSubmit}
        inputValue={this.state.note}
        noteColorChange={this.noteColorChange}
        note={this.props.note}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    note: state.note,
    index : state.index
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    setEditNote: note => dispatch(setEditNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditContainer);
