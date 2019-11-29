import React, { Component } from "react";
import "../css/Detail.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import CustomizedDialog from "./CustomizedDialog";
import Demo from "./Demo";

const rows = [
  {
    path: "/api/message/get",
    desc: "查询消息",
    type: "GET",
    requestParams: [
      { fieldName: "messageId", fieldType: "string", fieldDesc: "消息唯一Id" }
    ],
    responseParams: [
      { fieldName: "messageId", fieldType: "string", fieldDesc: "消息唯一Id" },
      { fieldName: "title", fieldType: "string", fieldDesc: "消息标题" },
      { fieldName: "content", fieldType: "string", fieldDesc: "消息内容" }
    ]
  },
  {
    path: "/api/message/send",
    desc: "发送消息",
    type: "POST",
    requestParams: [
      { fieldName: "messageId", fieldType: "string", fieldDesc: "消息唯一Id" },
      { fieldName: "title", fieldType: "string", fieldDesc: "消息标题" },
      { fieldName: "content", fieldType: "string", fieldDesc: "消息内容" }
    ],
    responseParams: [
      { fieldName: "messageId", fieldType: "string", fieldDesc: "消息唯一Id" },
      { fieldName: "title", fieldType: "string", fieldDesc: "消息标题" },
      { fieldName: "content", fieldType: "string", fieldDesc: "消息内容" }
    ]
  },
  {
    path: "/api/messages",
    desc: "查询消息列表",
    type: "GET",
    requestParams: [],
    responseParams: [
      { fieldName: "messageId", fieldType: "string", fieldDesc: "消息唯一Id" },
      { fieldName: "title", fieldType: "string", fieldDesc: "消息标题" },
      { fieldName: "content", fieldType: "string", fieldDesc: "消息内容" }
    ]
  }
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

    //通过 this.props.location.state 获取上个页面传递的参数
    const path = this.props.location.state;
    let row = rows.find(t => t.path === path);
    
    return (
      <div className="detail">
        <div>
          <div className="detail-item">
            <label className="detail-field-name">接口地址：</label>
            <span>{row.path}</span>
            <div className="detail-demo-button">
              <CustomizedDialog
                openButtonName="调用示例"
                title="接口调用示例"
                closeButtonName="我知道了"
                customStyle={{ variant: "contained", color: "primary", maxWidth:"800px", maxHeight:"500px" }}
              >
                <Demo data={row} />
              </CustomizedDialog>
            </div>
          </div>
        </div>
        <div className="detail-item">
          <label className="detail-field-name">接口描述：</label>
          <span>{row.desc}</span>
        </div>
        <div className="detail-item">
          <label className="detail-field-name">请求方式：</label>
          <span>{row.type}</span>
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
                {row.requestParams.length > 0 ? (
                  row.requestParams.map(param => (
                    <TableRow key={param.fieldName}>
                      <TableCell component="th" scope="row">
                        {param.fieldName}
                      </TableCell>
                      <TableCell>{param.fieldType}</TableCell>
                      <TableCell>{param.fieldDesc}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      无
                    </TableCell>
                    <TableCell>无</TableCell>
                    <TableCell>无</TableCell>
                  </TableRow>
                )}
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
                {row.responseParams.map(param => (
                  <TableRow key={param.fieldName}>
                    <TableCell component="th" scope="row">
                      {param.fieldName}
                    </TableCell>
                    <TableCell>{param.fieldType}</TableCell>
                    <TableCell>{param.fieldDesc}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      </div>
    );
  }
}

export default withStyles(tableStyles)(Detail);
