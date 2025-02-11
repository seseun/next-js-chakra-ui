import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactNode } from "react";

interface CustomLinkProps {
    href: string;
    children: ReactNode;
}

export default function CustomLink({
    href,
    children,
    ...props
}: CustomLinkProps & LinkProps) {
    return (
        <ChakraLink
            asChild
            outline={0}
            textDecoration="none"
            transition="var(--ck-durations-moderate)"
            color="inherit"
            {...props}
        >
            <NextLink href={href}>{children}</NextLink>
        </ChakraLink>
    );
}
