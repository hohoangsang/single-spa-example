import { BrowserRouter } from "react-router-dom";
import Main from "./Main";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}
