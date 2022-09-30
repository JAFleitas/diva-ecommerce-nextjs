import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";

import { ShopLayout } from "../../components/layouts";
import { ProductSlideshow, SizeSelector } from "../../components/products";
import { ItemCounter } from "../../components/ui";

import { IProduct } from "../../interfaces";
import { dbProduct } from "../../database";

interface Props {
  product: IProduct;
}

const ProductPage: NextPage<Props> = ({ product }) => {
  /* const router = useRouter();

  const { products: product, isLoading } = useProducts(
    `/products/${router.query.slug}`
  );

  if (isLoading) <h1>Loading</h1>; */

  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideshow images={product.images} />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Box display="flex" flexDirection="column">
            <Typography variant="h1" component="h1">
              {product.title}{" "}
            </Typography>
            <Typography variant="subtitle1" component="h2">
              {`$${product.price}`}{" "}
            </Typography>

            <Box sx={{ my: 3 }}>
              <Typography variant="subtitle2">Quantity</Typography>
              <ItemCounter />
              <SizeSelector
                selectedSize={product.sizes[0]}
                sizes={product.sizes}
              />
            </Box>

            <Button color="secondary" className="circular-btn">
              Add to cart
            </Button>
            {/* <Chip label="No available" color="error" variant="outlined" /> */}

            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1">Description</Typography>
              <Typography variant="body2"> {product.description} </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

/* 
no se recomienda.. 
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { getProductBySlug } = dbProduct;
  const { slug } = params as { slug: string };
  const product = await getProductBySlug(slug);
  if (!product) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      product,
    },
  };
}; */

// getStaticPath
// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { getAllProductSlugs } = dbProduct;
  const slugs = await getAllProductSlugs();
  const slugPath = slugs.map(({ slug }) => ({
    params: { slug },
  }));
  return {
    paths: slugPath,
    fallback: "blocking",
  };
};
//getStaticProps
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { getProductBySlug } = dbProduct;
  const { slug = "" } = params as { slug: string };
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default ProductPage;
