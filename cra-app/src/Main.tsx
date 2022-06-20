import { Col, Layout, Row } from "antd";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Layouts/Sidebar";
import MainRoute from "./MainRoute";

const { Header, Footer, Sider, Content } = Layout;

export default function Main() {
  return (
    <Fragment>
      <Layout>
        <Sider>
          <Sidebar />
        </Sider>
        <Content>
          <Routes>
            <Route path="/page3/*" element={<MainRoute />} />
          </Routes>
        </Content>
      </Layout>
    </Fragment>
  );
}
