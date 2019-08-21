import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../components/Input";
import { setNote } from "../../store/actions/notesactioncreators";

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
      color: "",
      index : 0
    };
    this.noteChange = this.noteChange.bind(this);
    this.noteSubmit = this.noteSubmit.bind(this);
    this.noteColorChange = this.noteColorChange.bind(this);
  }

  componentWillReceiveProps(nextProps){
//    console.log("PROPS HAVE CHANGED IN INPUTCONT", nextProps)
    this.setState({
      note : nextProps.note.note,
      color: nextProps.note.color,
      index: nextProps.index 
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

  noteSubmit(e) {
    e.preventDefault();
    this.props.setNote(this.state);
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
      <Input
        noteChange={this.noteChange}
        noteSubmit={this.noteSubmit}
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
  setNote: note => dispatch(setNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputContainer);
