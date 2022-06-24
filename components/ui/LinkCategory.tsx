import { FC } from "react";
import NextLink from "next/link";
import { Button, Link } from "@mui/material";

interface Props {
  href: string;
  contentButton: string;
}

export const LinkCategory: FC<Props> = ({ href, contentButton }) => {
  return (
    <>
      <NextLink href={href} passHref>
        <Link>
          <Button sx={{ margin: "0px 4px" }}>{contentButton}</Button>
        </Link>
      </NextLink>
    </>
  );
};
