import React, { Component } from "react";
import "../css/Detail.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const rows = [
  { fieldName: "messageId", fieldType: "string", fieldDesc: "消息唯一Id" },
  { fieldName: "title", fieldType: "string", fieldDesc: "消息标题" },
  { fieldName: "content", fieldType: "string", fieldDesc: "消息内容" }
];

//覆盖 MaterialUI 样式
const tableStyles = () => ({
  headRoot: {
    fontWeight: "600"
  }
});

class Detail extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="detail">
        <div>
          <div className="detail-item">
            <label className="detail-field-name">接口地址：</label>
            <span>/api/message/get</span>
          </div>
          <div className="detail-item">
            <label className="detail-field-name">接口描述：</label>
            <span>查询消息</span>
          </div>
          <div className="detail-item">
            <label className="detail-field-name">请求方式：</label>
            <span>GET</span>
          </div>
          <div className="detail-item">
            <label className="detail-field-name">请求参数列表：</label>
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
          <div className="detail-item">
            <label className="detail-field-name">返回参数列表：</label>
            <Paper>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.headRoot}>字段名称</TableCell>
                    <TableCell className={classes.headRoot}>字段类型</TableCell>
                    <TableCell className={classes.headRoot}>字段描述</TableCell>
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
          <div className="detail-item">
            <label className="detail-field-name">请求示例：</label>
            <span>http://localhost:8001/api/message/get?messageId=1</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(tableStyles)(Detail);
