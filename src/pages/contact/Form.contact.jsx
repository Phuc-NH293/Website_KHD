import { Button, Form, Input } from "antd";
import React from "react";

const MyFormItemContext = React.createContext([]);

function toArr(str) {
  return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );
  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};

const MyFormItem = ({ name, label, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return (
    <Form.Item
      name={concatName}
      label={<span className="text-white">{label}</span>}
      {...props}
    />
  );
};

const FormContact = () => {
  const onFinish = (value) => {
    console.log(value);
  };

  return (
    <div>
      <h1 className="text-[36px] md:text-[48px] text-white font-bold ">
        Liên hệ tư vấn
      </h1>

      <Form
        name="form_item_path"
        layout="vertical"
        onFinish={onFinish}
        className="space-y-3"
      >
        <MyFormItemGroup prefix={["user"]}>
          <MyFormItemGroup prefix={["name"]}>
            <MyFormItem name="sdt" label="Số điện thoại" rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}>
              <Input
                placeholder="Input here"
                className="!bg-[#081933] border border-white !text-white !placeholder-[#BCBCBC] focus:outline-none focus:ring-2 focus:ring-white"
              />
            </MyFormItem>

            <MyFormItem name="Email" label="Email" rules={[{ required: true, message: "Vui lòng nhập email" }]}>
              <Input
                placeholder="Input here"
                className="!bg-[#081933] border border-white !text-white !placeholder-[#BCBCBC] focus:outline-none focus:ring-2 focus:ring-white"
              />
            </MyFormItem>
          </MyFormItemGroup>

          <MyFormItem name="vde" label="Vấn đề bạn đang gặp phải">
  <Input.TextArea
    rows={4} 
    placeholder="Nhập vấn đề bạn đang gặp phải"
    className="!bg-[#081933] border border-white !text-white !placeholder-[#BCBCBC] focus:outline-none focus:ring-2 focus:ring-white resize-none"
  />
</MyFormItem>
        </MyFormItemGroup>

        <Button
          type="default"
          htmlType="submit"
          className="border border-white text-white hover:bg-white hover:text-[#081933] w-full"
        >
          Gửi thông tin
        </Button>
      </Form>
    </div>
  );
};

export default FormContact;
