import { useState } from "react";

import { Typography, Link, Skeleton, Divider } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

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

  async function handleCarregarProdutoDetalhes() {
    setIsLoading(true);
    const { data } = await service.get("/product?id=" + props.product.id);
    setProduct(data[0]);
    setIsLoading(false);
  }

  return (
    <Grid
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
    </Grid>
  );
}

export default Product;
