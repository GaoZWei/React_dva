import React from 'react';
import {Form,Input, Layout,  Checkbox, Button,Select,Row, Col} from 'antd';
const Option = Select.Option;
const {TextArea} = Input;
const FormItem = Form.Item;
const AddKnowledgeComponent = () => {
  function handleSelectChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <Layout>
      <Form horizontal>
        <div>
          <h1> 添加知识点 </h1>
        </div>
        <hr/>
          <FormItem
            id="select"
            label="选择分类："
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}>
            <Select id="select" size="large" defaultValue="lucy" style={{ width: 200 }} onChange={handleSelectChange}>
              <Option value="jack">jack</Option>
              <Option value="lucy">lucy</Option>
              <Option value="disabled" disabled>disabled</Option>
              < Option value="yiminghe">yiminghe</Option>
            </Select>
          </FormItem>
          <FormItem
            label="选择标签："
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }} >
            <label className="ant-checkbox-vertical">
              <Checkbox />选项一
            </label>
            <label className="ant-checkbox-vertical">
              <Checkbox />选项二
            </label>
            <label className="ant-checkbox-vertical">
              <Checkbox disabled />选项三（不可选）
            </label>
          </FormItem>
        <FormItem
          id="control-input"
          label="输入框："
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}>
          <Input id="control-input" placeholder="Please enter..." />
        </FormItem>
        <FormItem
          id="control-textarea"
          label="知识点："
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}>
          <TextArea placeholder={'Bill is a cat.\n' +
          '      Bill is a cat.   Bill is a cat.  Bill is a cat.\n' +
          '      Bill is a cat.'} rows={16}>
        </TextArea>
        </FormItem>
        <Row style={{ marginTop: 24 }}>
          <Col span="16" offset="8">
            <Button type="primary" htmlType="submit">保存</Button>&nbsp;
            <Button type="primary" htmlType="submit">保存并上传</Button>&nbsp;
            <Button type="primary" htmlType="submit">取消</Button>
          </Col>
        </Row>
      </Form>
    </Layout>

  );
}
export default AddKnowledgeComponent;
