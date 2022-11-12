import { useEffect, useState } from "react";

import { Tabs, Grid, Tab, Typography, Box } from "@mui/material/";

import axios from "axios";

import Product from "../components/product/Product";
import User, { ProdutoType } from "../components/user/User";

const service = axios.create({
  baseURL: "http://localhost:8080",
});

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

function Backoffice() {
  const [value, setValue] = useState(0);

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

  useEffect(() => {
    async function handleUser() {
      const { data } = await service.get("/account");
      setAccount(data);
    }

    handleUser();
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

          <Grid
            xs={10}
            pt={2}
            display="flex"
            justifyContent="right"
            flexDirection="column"
          >
            {account.products?.map((product) => (
              <Grid mb={3}>
                <Product product={product} key={product.id} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      </Grid>
    </Grid>
  );
}

export default Backoffice;
