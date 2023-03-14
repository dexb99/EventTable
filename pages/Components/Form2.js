import React from 'react'
import {Form, Input } from 'antd';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
export default function Form2() {
  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className='w-full'>
        <Form.Item
          name="TokenInput"
          rules={[
            {
              required: true,
              message: 'Please input your TokenKey!',
            },
          ]}
        >
          <Input placeholder="tokenkey 1" className="rounded-lg w-1/2" />
          <Input placeholder="tokenkey 2" className="rounded-lg w-1/2" />
        </Form.Item>
        <Form.Item>
          <button type="button" className="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">ตรวจสอบและเพิ่มข้อมูล</button>
        </Form.Item>
      </div>
    </Form>
  )
}

