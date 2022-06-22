import { BrowserRouter } from "react-router-dom";
import Main from "./Main";
import "antd/dist/antd.css";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}
