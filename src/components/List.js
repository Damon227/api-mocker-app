import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const tableStyle = makeStyles(theme => ({
  headRoot: {
    fontWeight: "600"
  }
}));

const List = ({ apiRows, init }) => {
  const classes = tableStyle();

  return (
    <div>
      <div style={{ textAlign: "right" }}>
        <Button variant="outlined" color="primary" onClick={init}>
          刷新
        </Button>
      </div>
      <div>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell classes={{ root: classes.headRoot }}>
                  接口地址
                </TableCell>
                <TableCell classes={{ root: classes.headRoot }}>
                  接口描述
                </TableCell>
                <TableCell classes={{ root: classes.headRoot }}>
                  请求方式
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {apiRows.map(row => (
                <TableRow key={row.path}>
                  <TableCell component="th" scope="row">
                    <Link to={{ pathname: "/detail", state: row.path }}>
                      {row.path}
                    </Link>
                  </TableCell>
                  <TableCell>{row.desc}</TableCell>
                  <TableCell>{row.type}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    </div>
  );
};

List.propTypes = {
  apiRows: PropTypes.array.isRequired,
  init: PropTypes.func.isRequired
};

export default List;
