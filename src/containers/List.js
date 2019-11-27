import React, { Component } from "react";
import { connect } from "react-redux";
import List from "../components/List";
import { initAction } from "../reducers/listReducer";

const mapStateToProps = state => {
  return {
    rows: state.list.rows
  };
};

function mapDispatchToProps(dispatch) {
  return { init: () => dispatch(initAction()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
