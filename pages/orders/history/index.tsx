import { Chip, Grid, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ShopLayout } from "../../../components/layouts";
import { LinkComponent } from "../../../components/ui";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "fullname", headerName: "Full Name", width: 300 },
  {
    field: "paid",
    headerName: "Paid",
    width: 300,
    description: "Indicates if the order is paid or not",
    renderCell: (params) => {
      return params.row.paid ? (
        <Chip color="success" label="Paid" variant="outlined" />
      ) : (
        <Chip color="error" label="Not paid" variant="outlined" />
      );
    },
  },
  {
    field: "order",
    headerName: "See Order",
    width: 300,
    sortable: false,
    renderCell: (params) => {
      return (
        <LinkComponent href={`/orders/${params.row.id}`}>
          See order
        </LinkComponent>
      );
    },
  },
];
const rows = [
  {
    id: 1,
    fullname: "Gonzalo Fleitas",
    paid: true,
  },
  {
    id: 2,
    fullname: "Gonzalo Fleitas",
    paid: false,
  },
  {
    id: 3,
    fullname: "Gonzalo Fleitas",
    paid: true,
  },
  {
    id: 4,
    fullname: "Gonzalo Fleitas",
    paid: true,
  },
];

const HistoryPage = () => (
  <ShopLayout
    title={"Order history"}
    pageDescription={"customer order history"}
  >
    <Typography variant="h1" component="h1">
      Order History
    </Typography>
    <Grid container>
      <Grid item xs={12} sx={{ height: 650, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </Grid>
    </Grid>
  </ShopLayout>
);
export default HistoryPage;
