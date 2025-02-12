import { Input, Button, Typography } from "antd";

function ContactSetion() {
  return (
    <div className="text-center p-24 bg-white">
      <Typography.Title level={1} className="text-2xl font-bold">
        LOREM IPSUM IS
      </Typography.Title>

      <div className="flex justify-center items-center mt-4">
        <Input
          placeholder="Lorem Ipsum is simply"
          className="w-80 p-2 bg-gray-100 border border-gray-300"
        />
        <Button type="primary" className="p-5 bg-blue-800 text-white">
          Contact
        </Button>
      </div>

      <p className="mt-4 text-gray-500">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry ipsum is simply
      </p>
    </div>
  );
}

export default ContactSetion