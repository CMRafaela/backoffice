import { useEffect, useState } from "react";

import Grid from "@mui/material/Unstable_Grid2";

import User, { ProdutoType } from "../components/user/User";

import axios from "axios";
import { Typography } from "@mui/material";

const service = axios.create({
  baseURL: "http://localhost:8080",
});

function Backoffice() {
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
    <Grid
      container
      pt={5}
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Typography pb={3} fontSize={24} fontWeight="bold">
        Tela de Backoffice
      </Typography>
      <User account={account} />
    </Grid>
  );
}

export default Backoffice;
