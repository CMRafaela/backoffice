import { Route, Routes } from "react-router-dom";
import Product from "./components/product/Product";
import User from "./components/user/User";

// import Backoffice from "./pages/Backoffice";
import BackofficeCopy from "./pages/BackofficeCopy";

export default function Routers() {
  return (
    <Routes>
      {/* <Route path="/" element={<Backoffice />}></Route> */}
      <Route path="/" element={<BackofficeCopy />} />
      <Route
        path="/user_account"
        element={
          <User
            account={{
              name: "",
              id: "",
              products: [],
              dob: undefined,
              documentNumber: [],
            }}
          />
        }
      />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
}
