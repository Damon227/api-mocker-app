import React, { Component } from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const rows = [
  { fieldName: "messageId", fieldType: "string", fieldDesc: "消息唯一Id" },
  { fieldName: "title", fieldType: "string", fieldDesc: "消息标题" },
  { fieldName: "content", fieldType: "string", fieldDesc: "消息内容" }
];

const tableStyle = makeStyles(theme => ({
  headRoot: {
    fontWeight: "600"
  }
}));

const List = ({ rows, init }) => {
  const classes = tableStyle();

  return (
    <div>
      <div>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell classes={{ root: classes.headRoot }}>
                  字段名称
                </TableCell>
                <TableCell classes={{ root: classes.headRoot }}>
                  字段类型
                </TableCell>
                <TableCell classes={{ root: classes.headRoot }}>
                  字段描述
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.fieldName}>
                  <TableCell component="th" scope="row">
                    {row.fieldName}
                  </TableCell>
                  <TableCell>{row.fieldType}</TableCell>
                  <TableCell>{row.fieldDesc}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
      <div>
        <button onClick={init}>刷新</button>
      </div>
    </div>
  );
};

List.propTypes = {
  rows: PropTypes.array.isRequired,
  init: PropTypes.func.isRequired
};

export default List;
