import { Pagination } from "antd";

const Paginations = () => {
  return (
    <div className="w-full sm:w-auto flex sm:justify-start justify-center mt-4">
      <Pagination defaultCurrent={1} total={50} />
    </div>
  );
};

export default Paginations;
