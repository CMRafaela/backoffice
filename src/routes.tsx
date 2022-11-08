import { Route, Routes } from "react-router-dom";

import Backoffice from "./pages/Backoffice";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Backoffice />}></Route>
    </Routes>
  );
}
