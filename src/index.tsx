import App from "./App";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";

ReactDOM.render(
  <BrowserRouter>
    <Navigation />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
