import { FC } from "react";
import NextLink from "next/link";
import { Link } from "@mui/material";

interface Props {
  href: string;
  children: JSX.Element | JSX.Element[];
  prefetch?: boolean;
}

export const LinkComponent: FC<Props> = ({
  href,
  children,
  prefetch = false,
}) => {
  return (
    <>
      <NextLink href={href} passHref prefetch={prefetch}>
        <Link>{children}</Link>
      </NextLink>
    </>
  );
};
