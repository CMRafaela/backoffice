import { useState } from "react";

import { Typography, Grid, Link, Skeleton, TextField } from "@mui/material";

import axios from "axios";

import { ProdutoType } from "../user/User";
interface ProductDetalhesType {
  id: string;
  name: string;
  partner: string;
  price: number;
  createdAt: any;
  endsAt: Date;
}

interface ProductProps {
  product: ProdutoType;
}

const service = axios.create({
  baseURL: "http://localhost:8080",
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
        <Skeleton
          variant="text"
          sx={{ marginRight: 2 }}
          width={120}
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

  async function handleCarregarProdutoDetalhes() {
    setIsLoading(true);
    const { data } = await service.get("/product?id=" + props.product.id);
    setProduct(data[0]);

    setIsLoading(false);
  }

  return (
    <>
      <Grid xs={10} p={5} mr={2} border="1px solid #DDDDDD" borderRadius={4}>
        <Typography color="#808080" fontSize={16} fontWeight="bold">
          Informações sobre produtos Contratados
        </Typography>
        <Grid display="flex" justifyContent="space-around">
          <Link
            py={2}
            sx={{ cursor: "pointer" }}
            onClick={handleCarregarProdutoDetalhes}
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
                      label="Nome do produto"
                      value={product.name}
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
                      label="Parceiro"
                      value={product.partner}
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
                      label="Valor"
                      value={product.price.toLocaleString()}
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
                      label="Válidade"
                      value={(product.endsAt = new Date())}
                    />
                  </Grid>
                </Grid>
              </>
            )}
          </>
        )}
      </Grid>
    </>
  );
}

export default Product;
