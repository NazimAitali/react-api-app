import React from "react";
import {
  UserOutlined,
  MailOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  GlobalOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Collapse } from "antd";
const { Panel } = Collapse;

const User = ({
  id,
  name,
  username,
  email,
  suite,
  street,
  city,
  zipcode,
  phone,
  website,
  companyName,
  catchPhrase,
  bs,
}) => {
  return (
    <div className="liste">
      <Collapse accordion>
        <Panel header={name}key="1">
          <p className="user-content">
            <div className="left">
              <p>
                <UserOutlined />
                &nbsp; Username: {username}
              </p>
              <p>
                <MailOutlined />
                &nbsp; Email: {email}
              </p>
              <p>
                <EnvironmentOutlined />
                &nbsp; Adress: {suite}&nbsp;{street}&nbsp;{city}&nbsp;{zipcode}
              </p>
              <p>
                <PhoneOutlined />
                &nbsp; Phone: {phone}
              </p>
            </div>
            <div className="right">
              <p>
                <GlobalOutlined />
                &nbsp; Website: {website}
              </p>
              <p>
                <HomeOutlined />
                &nbsp; CompanyName: {companyName}
              </p>
              <p>
                <MessageOutlined />
                &nbsp; CatchPhrase: {catchPhrase}
              </p>
              <p>
                <QuestionCircleOutlined />
                &nbsp; Bs: {bs}
              </p>
            </div>
          </p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default User;
