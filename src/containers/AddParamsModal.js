import React, { Component } from "react";
import { Form, Input, Modal, Button, Select } from "antd";
const { Option } = Select;

const WrappedAddParamsModal = Form.create({ name: "AddParamsModal" })(
  class extends Component {
    render() {
      const { visible, onOk, onCancel, form } = this.props;
      const { getFieldDecorator } = form;

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

      const handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log("Received values of form: ", values);
          }
        });
      };

      return (
        <Modal
          title="添加请求参数"
          visible={visible}
          onOk={onOk}
          onCancel={onCancel}
          okText="确认"
          cancelText="取消"
          footer={null}
        >
          <Form {...formItemLayout} onSubmit={handleSubmit}>
            <Form.Item label="字段名称">
              {getFieldDecorator("fieldName", {
                rules: [{ required: true, message: "请输入字段名称" }]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="字段类型">
              <Select
                defaultValue="string"
                dropdownMenuStyle={{ height: "150px" }}
              >
                <Option value="string">字符串</Option>
                <Option value="int">整数</Option>
                <Option value="double">小数</Option>
                <Option value="email">邮箱</Option>
                <Option value="mobilePhoneNumber">手机号码</Option>
                <Option value="guid">GUID</Option>
                <Option value="datetime">时间</Option>
                <Option value="datetime-day">时间(天)</Option>
              </Select>
            </Form.Item>
            <Form.Item label="字段说明">
              {getFieldDecorator("fieldDesc", {
                rules: [{ required: true, message: "请输入字段说明" }]
              })(<Input />)}
            </Form.Item>
            <Form.Item {...tailItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class AddParamsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  render() {
    const showModal = () => {
      this.setState({ visible: true });
    };

    const hideModal = () => {
      this.setState({ visible: false });
    };

    const saveFormRef = formRef => {
      this.formRef = formRef;
    };

    return (
      <div>
        <Button type="primary" onClick={showModal}>
          添加
        </Button>
        <WrappedAddParamsModal
          visible={this.state.visible}
          onCancel={hideModal}
          wrappedComponentRef={saveFormRef}
        />
      </div>
    );
  }
}

export default AddParamsModal;
