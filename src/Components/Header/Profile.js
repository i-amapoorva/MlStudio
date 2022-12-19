// import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import profileimg from "../../assets/account.png";
import React from 'react';
const menu = (
  <Menu
    items={[
      {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: '0',
      },
      {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: '1',
      },
      {
        type: 'divider',
      },
      {
        label: '3rd menu item',
        key: '3',
      },
    ]}
  />
);
function Profile() {
  return (
    <Dropdown overlay={menu} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      <img src={profileimg} className="account-img"
        //  onClick={imageClick}
          />
          
        {/* <DownOutlined /> */}
      </Space>
    </a>
  </Dropdown>
  );
}

export default Profile;
