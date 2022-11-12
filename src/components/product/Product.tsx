/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

import { Typography, Link, Skeleton, Divider, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import jwt_decode from "jwt-decode";
import axios from "axios";

import { ProdutoType } from "../user/User";

interface ProductDetalhesType {
  id: string;
  name: string;
  partner: string;
  price: number;
  createdAt: any;
  endsAt: any;
}

interface ProductProps {
  product?: ProdutoType;
}

const BASE_URL = "https://api.180s.com.br/api/auth";
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

axios
  .post(BASE_URL, {
    token: token,
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

function SkeletonFormat() {
  return (
    <>
      <Grid display="flex">
        <Skeleton
          variant="text"
          sx={{ marginRight: 2 }}
          width={150}
          height={25}
        />
        <Skeleton
          variant="text"
          sx={{ marginRight: 2 }}
          width={120}
          height={25}
        />
      </Grid>

      <Grid display="flex">
        <Skeleton
          variant="text"
          sx={{ marginRight: 2 }}
          width={150}
          height={25}
        />
        <Skeleton
          variant="text"
          sx={{ marginRight: 2 }}
          width={120}
          height={25}
        />
      </Grid>

      <Grid display="flex">
        <Skeleton
          variant="text"
          sx={{ marginRight: 2 }}
          width={150}
          height={25}
        />
        <Skeleton
          variant="text"
          sx={{ marginRight: 2 }}
          width={120}
          height={25}
        />
      </Grid>

      <Grid display="flex">
        <Skeleton
          variant="text"
          sx={{ marginRight: 2 }}
          width={150}
          height={25}
        />
        <Skeleton
          variant="text"
          sx={{ marginRight: 2 }}
          width={120}
          height={25}
        />
      </Grid>

      <Grid display="flex">
        <Skeleton
          variant="text"
          sx={{ marginRight: 2 }}
          width={150}
          height={25}
        />
        <Skeleton
          variant="text"
          sx={{ marginRight: 2 }}
          width={120}
          height={25}
        />
      </Grid>
    </>
  );
}

function Product(props: ProductProps) {
  const [loading, setIsLoading] = useState(false);
  const [product, setProduct] = useState<ProductDetalhesType | null>();

  // async function handleCarregarProdutoDetalhes() {
  //   setIsLoading(true);
  //   const { data } = await service.get("/product?id=" + props.product.id);
  //   setProduct(data[0]);
  //   setIsLoading(false);
  // }

  return (
    <>
      {/* TESTE DA TELA NOVA */}
      <Grid xs={10} p={5} border="1px solid #DDDDDD" borderRadius={4}>
        <Typography color="#808080" fontSize={16} fontWeight="bold">
          Informações sobre produtos Contratados
        </Typography>

        <Grid
          spacing={2}
          display="flex"
          alignItems="center"
          justifyContent="space-around"
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
              // value={product.name}
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
              // value={props.account.partner}
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
              // value={props.account.price}
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
              label="Número do documento"
              // value={props.account.createdAt}
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
              // value={props.account.endsAt}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Product;
