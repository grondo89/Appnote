import React, { Component } from "react";
import Main from "../components/Main";
import { connect } from "react-redux";


class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  componentDidUpdate() {}

  render() {
    return <Main />;
  }
}

export default connect(
  null,
  null
)(MainContainer);
