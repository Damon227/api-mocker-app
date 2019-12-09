import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Modal, Button, Select } from "antd";
import { initAction } from "../reducers/calculatorReducer";

function mapStateToProps(state) {
  return {};
}

class Calculator extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      layout: "horizontal",
      labelCol: {
        xs: { span: 3 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 3 },
        sm: { span: 6 }
      }
    };

    const tailItemLayout = {
      wrapperCol: {
        xs: { span: 6 },
        sm: { span: 6, offset: 6 }
      }
    };

    const handleOnSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);

          let result = [];
          for (let index = 6; index <= 48; index++) {
            let amountA =
              parseInt(values.monthAmount) *
                (index +
                  parseInt(values.month) +
                  0.025 * (parseInt(values.month) + parseInt(index))) +
              100 * index +
              parseInt(values.hardFitupAmount) +
              parseInt(values.softFitupAmount) +
              parseInt(values.deviceAmount) +
              parseInt(values.workerAmount) +
              parseInt(values.operationAmount);
            let amountB = 0.944 * index - 2;
            let chufangAmount = (amountA / amountB).toFixed(2);
            let maolilv = (
              (chufangAmount - parseInt(values.monthAmount)) /
              chufangAmount
            ).toFixed(4);
            result.push({ index, amount: chufangAmount, maolilv });
          }

          this.props.init(result);
          this.props.history.push("/calculateList");
        }
      });
    };

    return (
      <div>
        <Form {...formItemLayout} onSubmit={handleOnSubmit}>
          <Form.Item label="收房月租金">
            {getFieldDecorator("monthAmount", {
              rules: [
                {
                  required: true,
                  message: "请输入收房月租金"
                },
                {
                  pattern: "^\\d*\\.{0,1}\\d{0,1}$",
                  message: "格式错误，收房月租金为数字，精确到一位小数"
                }
              ]
            })(<Input addonAfter={<span>元/月</span>} />)}  
          </Form.Item>
          <Form.Item label="空置月数">
            {getFieldDecorator("month", {
              rules: [
                { required: true, message: "请输入空置月数" },
                { pattern: "^[1-9]\\d*$", message: "空置月数必须为正整数" }
              ]
            })(<Input addonAfter={<span>月</span>} />)}
          </Form.Item>
          <Form.Item label="硬装费">
            {getFieldDecorator("hardFitupAmount", {
              rules: [{ required: true, message: "请输入硬装费" }]
            })(<Input addonAfter={<span>元</span>} />)}
          </Form.Item>
          <Form.Item label="软装费">
            {getFieldDecorator("softFitupAmount", {
              rules: [{ required: true, message: "请输入软装费" }]
            })(<Input addonAfter={<span>元</span>} />)}
          </Form.Item>
          <Form.Item label="智能设备">
            {getFieldDecorator("deviceAmount", {
              rules: [{ required: true, message: "请输入智能设备费用" }]
            })(<Input addonAfter={<span>元</span>} />)}
          </Form.Item>
          <Form.Item label="人员成本">
            {getFieldDecorator("workerAmount", {
              rules: [{ required: true, message: "请输入人员成本金额" }]
            })(<Input addonAfter={<span>元</span>} />)}
          </Form.Item>
          <Form.Item label="其他运营费用">
            {getFieldDecorator("operationAmount", {
              rules: [{ required: true, message: "请输入其他运营费用" }]
            })(<Input addonAfter={<span>元</span>} />)}
          </Form.Item>
          <Form.Item {...tailItemLayout}>
            <Button type="primary" htmlType="submit">
              开始计算
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const CalculatorForm = Form.create({ name: "AddParamsModal" })(Calculator);

function mapDispatchToProps(dispatch) {
  return { init: data => dispatch(initAction(data)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorForm);
