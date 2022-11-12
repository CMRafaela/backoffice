import { Typography, TextField } from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";
import axios from "axios";
import Product from "../product/Product";

export interface ProdutoType {
  id: string;
  name: string;
}

export interface UserProps {
  account: {
    name: string;
    id: string;
    products: ProdutoType[];
    dob: any;
    documentNumber: ProdutoType[];
  };
}

const BASE_URL = "https://api.180s.com.br/api/auth";
const token = "lkYGNIXprV3W8nBk";

axios
  .post(BASE_URL, {
    token: token,
  })
  .then((response) => {
    console.log(response, "user");
  })
  .catch((error) => {
    console.log("error user", error);
  });

function User(props: UserProps) {
  return (
    <>
      <Grid xs={10} p={5} border="1px solid #DDDDDD" borderRadius={4}>
        <Typography color="#808080" fontSize={16} fontWeight="bold">
          Detalhes pessoais
        </Typography>

        <Grid
          spacing={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection={{ xs: "column", md: "row" }}
        >
          <Grid
            pt={2}
            md={6}
            xs={12}
            display="flex"
            pr={{ md: 2 }}
            justifyContent="center"
            flexDirection={{ xs: "column", md: "row" }}
          >
            <TextField
              size={"small"}
              disabled
              id="outlined-disabled"
              label="ID do contrato"
              value={props.account.id}
            />
          </Grid>

          <Grid
            pt={2}
            md={6}
            xs={12}
            display="flex"
            pr={{ md: 2 }}
            justifyContent="center"
            flexDirection={{ xs: "column", md: "row" }}
          >
            <TextField
              size={"small"}
              disabled
              id="outlined-disabled"
              label="Nome do usuário"
              value={props.account.name}
            />
          </Grid>

          <Grid
            pt={2}
            md={6}
            xs={12}
            display="flex"
            pr={{ md: 2 }}
            justifyContent="center"
            flexDirection={{ xs: "column", md: "row" }}
          >
            <TextField
              size={"small"}
              disabled
              id="outlined-disabled"
              label="Data do contrato"
              value={props.account.dob}
            />
          </Grid>

          <Grid
            pt={2}
            md={6}
            xs={12}
            display="flex"
            justifyContent="center"
            flexDirection={{ xs: "column", md: "row" }}
          >
            <TextField
              size={"small"}
              disabled
              id="outlined-disabled"
              label="Número do documento"
              value={props.account.documentNumber}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid xs={10} pt={2} display="flex" justifyContent="right">
        {props.account.products?.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </Grid>
    </>
  );
}

export default User;
