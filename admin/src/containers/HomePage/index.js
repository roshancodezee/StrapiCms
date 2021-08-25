import React, { memo, useEffect, useState } from "react";
import { Card, Col, Row } from "antd";
import { Block, Container } from "./components";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
const HomePage = ({ global: { plugins }, history: { push } }) => {
  const [state, setState] = useState({ bookCtn: 0, authorCount: 0 });
  useEffect(() => {
    async function getBookCount() {
      const res = await fetch("/books/count");
      const response = await res.json();
      setState({ ...state, bookCtn: response });
    }
    getBookCount();
  }, []);
  useEffect(() => {
    async function getAuthorCount() {
      const res = await fetch("/authors/count");
      const response = await res.json();
      setState({ ...state, authorCount: response });
    }
    getAuthorCount();
  }, []);
  return (
    <>
      <Container className="container-fluid">
        <div className="site-card-wrapper">
          <Row gutter={16}>
            <Col span={4}>
              <Card
                title="Book Qty"
                bordered={true}
                hoverable
                bodyStyle={{ color: "red", textAlign: "center" }}
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                {state.bookCtn}
              </Card>
            </Col>
            <Col span={4}>
              <Card
                title="Number Of Author"
                bordered={true}
                hoverable
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                {state.authorCount}
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
