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
} from "@chakra-ui/react";
import NextLink from "next/link";
import { LuHouse } from "react-icons/lu";

import { AppContainer } from "..";
import { ColorModeButton } from "../ui/color-mode";

interface headerProps {}

export default function Header(props: headerProps) {
    return (
        <Box
            as="header"
            bgColor="bg.subtle"
            left={0}
            position="fixed"
            py={4}
            top={0}
            w="full"
            zIndex={10}
        >
            <AppContainer>
                <Flex align="center" justify="space-between">
                    <LinkBox alignItems="center" display="flex" gap={2}>
                        <Icon fontSize="xl">
                            <LuHouse />
                        </Icon>
                        <Heading as="h1" fontSize="xl">
                            <LinkOverlay href="/main">자동거래 봇</LinkOverlay>
                        </Heading>
                    </LinkBox>
                    <HStack gap={2}>
                        <ChakraLink asChild variant="plain">
                            <NextLink href="/main">고객센터</NextLink>
                        </ChakraLink>
                        <ColorModeButton />
                        <ButtonGroup colorPalette="green" size="sm">
                            <Button variant="solid">로그인</Button>
                            <Button variant="outline">회원가입</Button>
                        </ButtonGroup>
                    </HStack>
                </Flex>
            </AppContainer>
        </Box>
    );
}
