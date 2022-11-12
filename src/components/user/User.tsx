import { Typography, TextField, Grid } from "@mui/material";

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

function User(props: UserProps) {
  return (
    <>
      <Grid xs={10} p={5} border="1px solid #DDDDDD" borderRadius={4}>
        <Typography pb={2} color="#808080" fontSize={16} fontWeight="bold">
          Detalhes pessoais
        </Typography>

        <Grid
          spacing={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
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
    </>
  );
}

export default User;
