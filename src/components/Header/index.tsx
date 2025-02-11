"use client";

import {
    Box,
    Container,
    Link as ChakraLink,
    Heading,
    HStack,
    Flex,
    Button,
    ButtonGroup,
    Icon,
    LinkBox,
    LinkOverlay,
    Separator,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { LuHouse } from "react-icons/lu";

import { ColorModeButton } from "../(chakra-ui)/color-mode";
import { AppContainer, CustomLink } from "..";
import { usePathname } from "next/navigation";

interface headerProps {}

function MenuNavigationLink({
    href,
    label,
    isActive,
    isDisabled,
}: {
    href: string;
    label: string;
    isActive: boolean;
    isDisabled: boolean;
}) {
    return (
        <CustomLink
            alignItems="center"
            color={isActive ? "white" : "gray"}
            display="inline-flex"
            h="70px"
            href={href}
            justifyContent="center"
            outline={0}
            pointerEvents={isDisabled ? "none" : "initial"}
            position="relative"
            _hover={{
                color: "white",
            }}
            _before={{
                bottom: "0",
                content: '""',
                h: 1,
                left: "0",
                position: "absolute",
                w: "full",
                bgColor: "white",
                opacity: isActive ? 1 : 0,
            }}
        >
            {label}
        </CustomLink>
    );
}

export default function Header(props: headerProps) {
    const pathname = usePathname();
    return (
        <Box
            as="header"
            bgColor="bg.subtle"
            left={0}
            position="fixed"
            top={0}
            w="full"
            zIndex={10}
        >
            <AppContainer>
                <Flex align="center" justify="space-between" h="70px">
                    <HStack align="center" gap="56px">
                        <LinkBox alignItems="center" display="flex" gap={2}>
                            <Heading as="h1" textStyle="subtitle4">
                                <LinkOverlay href="/main">
                                    자동거래봇
                                </LinkOverlay>
                            </Heading>
                        </LinkBox>
                        <HStack
                            align="stretch"
                            gap="42px"
                            height="full"
                            _child={{
                                textStyle: "caption4",
                                color: "gray",
                            }}
                        >
                            <MenuNavigationLink
                                href="/start"
                                label="시작하기"
                                isActive={pathname.startsWith("/start")}
                                isDisabled={pathname.startsWith("/start")}
                            />
                            <MenuNavigationLink
                                href="/assets"
                                label="보유자산"
                                isActive={pathname.startsWith("/assets")}
                                isDisabled={pathname.startsWith("/assets")}
                            />
                            <MenuNavigationLink
                                href="/payment"
                                label="결제하기"
                                isActive={pathname.startsWith("/payment")}
                                isDisabled={pathname.startsWith("/payment")}
                            />
                        </HStack>
                    </HStack>
                    <HStack
                        gap={4}
                        _child={{
                            color: "gray.100",
                            textStyle: "caption5",
                            _hover: {
                                color: "white",
                            },
                        }}
                    >
                        <CustomLink href="/main">로그인</CustomLink>
                        <Separator orientation="vertical" height={2.5} />
                        <CustomLink href="/main">고객센터</CustomLink>
                    </HStack>
                </Flex>
            </AppContainer>
        </Box>
    );
}
