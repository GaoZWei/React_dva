import React from 'react';
import {Input, Layout, Button} from 'antd';

const {TextArea} = Input;
const AddKnowledgeComponent = () => {
  return (
    <Layout>
      <div>
        <h1> 添加知识点 </h1>
      </div>

      <TextArea placeholder={'Bill is a cat.\n' +
      '      Bill is a cat.   Bill is a cat.  Bill is a cat.\n' +
      '      Bill is a cat.'} rows={16}>

      </TextArea>

      <Button>保存</Button>
      <Button>保存并上传</Button>
      <Button>取消</Button>
      {/*<Button type={} shape={} size={} htmlType={} onClick={} loading={} className={} icon={}/>*/}

    </Layout>

  );
}
export default AddKnowledgeComponent;
