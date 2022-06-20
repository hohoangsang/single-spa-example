import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import "antd/dist/antd.css";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
