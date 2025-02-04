"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ColorModeProvider } from "@/components/ui/color-mode";
import { Toaster } from "@/components/ui/toaster";
import theme from "@/libs/theme";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ChakraProvider value={theme}>
            <ColorModeProvider>
                <QueryClientProvider client={queryClient}>
                    {children}
                    <Toaster />
                </QueryClientProvider>
            </ColorModeProvider>
        </ChakraProvider>
    );
}
