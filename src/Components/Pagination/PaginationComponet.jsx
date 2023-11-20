import { useState } from 'react';
import { Pagination } from 'antd';
import './PaginationComponet.css';

function PaginationComponet({ page, totalResults, searchValue, onClickChange }) {
  const [current, setCurrent] = useState(page);
  const onChange = (pageNum) => {
    setCurrent(pageNum);
    onClickChange(searchValue, pageNum);
  };
  return (
    <Pagination
      className="pagination"
      size="small"
      current={current}
      total={totalResults}
      showSizeChanger={false}
      defaultPageSize={20}
      onChange={onChange}
    />
  );
}

export default PaginationComponet;
