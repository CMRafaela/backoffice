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
      {/* <Grid
        xs={10}
        p={5}
        mt={5}
        mr={1}
        border="1px solid #DDDDDD"
        borderRadius={4}
      >
        <Grid
          pt={2}
          xs={12}
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography fontSize={16} fontWeight="bold">
            Produto contratado
            {product && <Typography fontSize={16}>{product.name}</Typography>}
          </Typography>
        </Grid>

        <Grid display="flex" justifyContent="space-around">
          <Link
            py={2}
            sx={{ cursor: "pointer" }}
            // onClick={handleCarregarProdutoDetalhes}
          >
            Mostrar detalhes
          </Link>
          <Link
            py={2}
            sx={{ cursor: "pointer" }}
            onClick={() => setProduct(null)}
          >
            Esconder detalhes
          </Link>
        </Grid>

        {product && (
          <>
            {loading ? (
              <SkeletonFormat />
            ) : (
              <>
                <Grid display="flex" alignItems="center" py={1}>
                  <Typography pr={1} fontSize={14} fontWeight="bold">
                    Nome do produto:
                  </Typography>
                  <Typography fontSize={14}>{product.name}</Typography>
                </Grid>
                <Divider />

                <Grid display="flex" alignItems="center" py={1}>
                  <Typography pr={1} fontSize={14} fontWeight="bold">
                    Parceira:
                  </Typography>
                  <Typography fontSize={14}>{product.partner}</Typography>
                </Grid>
                <Divider />

                <Grid display="flex" alignItems="center" py={1}>
                  <Typography pr={1} fontSize={14} fontWeight="bold">
                    Preço:
                  </Typography>
                  <Typography fontSize={14}>{product.price}</Typography>
                </Grid>
                <Divider />

                <Grid display="flex" alignItems="center">
                  <Typography pr={1} py={1} fontSize={14} fontWeight="bold">
                    Data da criação:
                  </Typography>
                  <Typography fontSize={14}>{product.createdAt}</Typography>
                </Grid>
                <Divider />

                <Grid display="flex" alignItems="center" py={1}>
                  <Typography pr={1} fontSize={14} fontWeight="bold">
                    Data final:
                  </Typography>
                  <Typography fontSize={14}>{product.endsAt}</Typography>
                </Grid>
              </>
            )}
          </>
        )}
      </Grid> */}

      {/* TESTE DA TELA NOVA */}
      <Grid xs={10} p={5} border="1px solid #DDDDDD" borderRadius={4}>
        <Typography color="#808080" fontSize={16} fontWeight="bold">
          Informações sobre produtos Contratados
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
