import * as React from "react";
import { useEffect, useState } from "react";
import { Tabs, Grid, Tab, Typography, Box } from "@mui/material/";

import User, { ProdutoType } from "../components/user/User";
import axios from "axios";
import Product from "../components/product/Product";
import api from "../services/api";
// import jwt_decode from "jwt-decode";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

// const service = axios.create({
//   baseURL: "http://localhost:8080",
// });

// const BASE_URL = "https://api.180s.com.br/api/auth";
const token = "lkYGNIXprV3W8nBk";
// const decoded = jwt_decode(token);
// console.log(decoded);
// axios
//   .get(BASE_URL + "?accessToken=" + token)
//   .then((response) => {
//     console.log(response, "responseeeeeee");
//   })
//   .catch((error) => {
//     console.log(error, ">>>>>>>>>>>>>>");
//   });

// axios
//   .post(BASE_URL, {
//     token: token,
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

export default function BackofficeCopy() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [account, setAccount] = useState<{
    name: string;
    id: string;
    products: ProdutoType[];
    dob: any;
    documentNumber: ProdutoType[];
  }>({ name: "", id: "", products: [], dob: "", documentNumber: [] });

  // useEffect(() => {
  //   async function handleUser() {
  //     const { data } = await service.get("/account");
  //     setAccount(data);
  //   }

  //   handleUser();
  // }, []);

  useEffect(() => {
    api
      .get("/account")
      .then((response) => setValue(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <Grid container height="calc(100vh - 120px)">
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="User account" {...a11yProps(0)} sx={{ color: "#A9A9A9" }} />
        <Tab label="Product" {...a11yProps(1)} sx={{ color: "#A9A9A9" }} />
      </Tabs>

      <Grid xs={8} md={10} pl={10}>
        <TabPanel value={value} index={0}>
          <Typography color="#808080" pb={3} fontSize={24} fontWeight="bold">
            User account
          </Typography>
          <User account={account} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography color="#808080" pb={3} fontSize={24} fontWeight="bold">
            Product
          </Typography>
          {/* <Product product={product} key={product.id} /> */}
          <Product />
        </TabPanel>
      </Grid>
    </Grid>
  );
}
