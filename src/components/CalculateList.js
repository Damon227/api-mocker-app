import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function mapStateToProps(state) {
  return {
    data: state.calculator.data
  };
}

class CalculateList extends Component {
  render() {
    console.log(this.props.data);
    const calculateResult = this.props.data;
    return (
      <div>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>回本周期</TableCell>
                <TableCell>出房月租金</TableCell>
                <TableCell>毛利率</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {calculateResult.map(t => (
                <TableRow key={t.index}>
                  <TableCell component="th" scope="row">
                    {t.index}
                  </TableCell>
                  <TableCell>{t.amount}</TableCell>
                  <TableCell>{t.maolilv}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default connect(mapStateToProps)(CalculateList);
