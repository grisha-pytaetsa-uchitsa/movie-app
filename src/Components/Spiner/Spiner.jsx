import { Spin } from 'antd';
import './Spiner.css';

function Spinner() {
  return (
    <div className="spinner">
      <Spin size="small" />
      <Spin />
      <Spin size="large" />
    </div>
  );
}

export default Spinner;
