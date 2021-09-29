import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { DatePicker, Space } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

function onChange(dates, dateStrings) {
  console.log('From: ', dates[0], ', to: ', dates[1]);
  console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

ReactDOM.render(
  <Space direction="vertical" size={12}>
    <RangePicker
      // ranges={{
      //   Today: [moment(), moment()],
      //   'This Month': [moment().startOf('month'), moment().endOf('month')],
      // }}
      // onChange={onChange}
      getPopupContainer={(triggerNode) => {
        return triggerNode.parentNode;
      }}
      open={true}
      dateRender={(current) => {
        const style = {};
        return (
          <div className="ant-calendar-date" style={style}>
            {current.date()}
          </div>
        );
      }}
    />
    <RangePicker
      ranges={{
        Today: [moment(), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
      }}
      showTime
      format="YYYY/MM/DD HH:mm:ss"
      onChange={onChange}
    />
    <footer id="footer">
      <div class="module">
        <ul class="menu ">
          <li class="level1 item308 active current"> asdasdasdasd</li>
          <li> asdasdasdasd </li>
        </ul>
      </div>
      <div class="module">
        <ul class="menu ">
          <li> asdasdasdasd </li>
          <li> asdasdasdasd </li>
        </ul>
      </div>
      <div class="module">
        <ul class="menu ">
          <li> asdasdasdasd</li>
          <li> asdasdasdasd</li>
        </ul>
      </div>
    </footer>
  </Space>,
  document.getElementById('container')
);
