import { FC, PropsWithChildren } from "react";
import NextLink from "next/link";
import { Link } from "@mui/material";

interface Props {
  href: string;
  prefetch?: boolean;
}

export const LinkComponent: FC<PropsWithChildren<Props>> = ({
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
