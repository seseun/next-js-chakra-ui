"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ColorModeProvider } from "@/components/(chakra-ui)/color-mode";
import { Toaster } from "@/components/(chakra-ui)/toaster";
import chakraSystem from "@/libs/chakraSystem";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ChakraProvider value={chakraSystem}>
            <ColorModeProvider>
                <QueryClientProvider client={queryClient}>
                    {children}
                    <Toaster />
                </QueryClientProvider>
            </ColorModeProvider>
        </ChakraProvider>
    );
}
