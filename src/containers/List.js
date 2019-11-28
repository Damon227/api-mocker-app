import React, { Component } from "react";
import { connect } from "react-redux";
import List from "../components/List";
import { initAction } from "../reducers/listReducer";

export class ListContainer extends Component {
  UNSAFE_componentWillMount() {
    if (this.props.init) {
      this.props.init();
    }
  }

  render() {
    return <List apiRows={this.props.apiRows} init={this.props.init} />;
  }
}

const mapStateToProps = state => {
  return {
    apiRows: state.list.apiRows
  };
};

function mapDispatchToProps(dispatch) {
  return { init: () => dispatch(initAction()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
