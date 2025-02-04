import { ReactNode } from "react";

import { AppContainer, Footer, Header } from "@/components";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            <AppContainer as="main">{children}</AppContainer>
            <Footer />
        </>
    );
}
