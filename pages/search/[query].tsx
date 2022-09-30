import type { NextPage, GetServerSideProps } from "next";
import { Box, Typography } from "@mui/material";

import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products";

import { dbProduct } from "../../database";
import { IProduct } from "../../interfaces";

interface Props {
  products: IProduct[];
  query: string;
  foundProducts: boolean;
}
const SearchPage: NextPage<Props> = ({ products, query, foundProducts }) => {
  return (
    <ShopLayout
      title={`DiVA-Shop - ${query}`}
      pageDescription={"Best clothing items"}
    >
      <Typography variant="h1" component="h1">
        Searched products
      </Typography>
      <Box display="flex">
        {foundProducts ? (
          <Typography variant="h2">Products related to</Typography>
        ) : (
          <Typography variant="h2">No products found with</Typography>
        )}
        <Typography
          textTransform="capitalize"
          variant="h2"
          sx={{ ml: 1 }}
          color="secondary"
        >{`'${query}'`}</Typography>
      </Box>
      <ProductList products={products} />
    </ShopLayout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = "" } = params as { query: string };

  if (!query) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }
  let products = await dbProduct.getProductsBySearchTerm(query);
  const foundProducts = products.length > 0;

  // TODO: usar cookies

  if (!foundProducts) {
    products = await dbProduct.getAllProducts();
  }

  return {
    props: {
      query,
      products,
      foundProducts,
    },
  };
};

export default SearchPage;
