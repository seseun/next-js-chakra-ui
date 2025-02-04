import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

import { Footer, Header } from "@/components";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            <Box as="main">{children}</Box>
            <Footer />
        </>
    );
}
