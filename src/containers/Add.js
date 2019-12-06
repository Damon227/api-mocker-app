import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "../css/Add.css";
import AddParamsModal from "../containers/AddParamsModal";
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete
} from "antd";

class Add extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props.form.getFieldsValue());
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
      }
    };

    const tailItemLayout = {
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8, offset: 8 }
      }
    };

    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <Form {...formItemLayout} onSubmit={this.handleSubmit.bind(this)}>
          <Form.Item label="接口地址">
            {getFieldDecorator("apiAddress", {
              rules: [{ required: true, message: "请输入接口地址" }]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="接口描述">
            {getFieldDecorator("apiDesc", {
              rules: [{ required: true, message: "请输入接口描述" }]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="调用方式">
            {getFieldDecorator("apiMethod", {
              rules: [{ required: true, message: "请输入接口调用方式" }]
            })(<Input />)}
          </Form.Item>
          <div style={{height:"47px"}}>
            <Row>
              <Col span={8}>
                <label style={{ float: "right" }}>请求参数：</label>
              </Col>
              <Col span={12}>
                <AddParamsModal />
              </Col>
            </Row>
          </div>
          <Form.Item label="调用方式">
            {getFieldDecorator("apiMethod", {
              rules: [{ required: true, message: "请输入接口调用方式" }]
            })(<Input />)}
          </Form.Item>
          <Form.Item {...tailItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const AddForm = Form.create({ name: "add" })(Add);

export default AddForm;
