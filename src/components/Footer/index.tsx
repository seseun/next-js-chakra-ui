import {
    Box,
    HStack,
    Heading,
    Separator,
    Text,
    VStack,
} from "@chakra-ui/react";

import { AppContainer, CustomLink } from "..";

interface footerProps {}

export default function Footer(props: footerProps) {
    return (
        <Box as="footer" w="full" py={10} borderTop="default">
            <AppContainer>
                <Heading as="h6" textStyle="subtitle4">
                    자동거래봇
                </Heading>
                <VStack align="flex-start" justify="flex-start" gap={4} mt={5}>
                    <HStack
                        align="center"
                        gap={4}
                        _child={{ color: "gray.100", textStyle: "caption5" }}
                    >
                        <CustomLink href="#none">이용약관</CustomLink>
                        <CustomLink href="#none">개인정보처리방침</CustomLink>
                        <CustomLink href="#none">
                            책임의 한계와 법적고지
                        </CustomLink>
                    </HStack>
                    <VStack
                        align="flex-start"
                        color="gray"
                        gap={1}
                        justify="flex-start"
                        textStyle="caption6"
                    >
                        <HStack>
                            <Text>(주)아브코</Text>
                            <Separator orientation="vertical" height={2.5} />
                            <Text>대표 심준식, 김마태</Text>
                            <Separator orientation="vertical" height={2.5} />
                            <Text>사업자 등록번호 721-88-02710</Text>
                        </HStack>
                        <Text>
                            부산광역시 해운대구 센텀중앙로 48, 711-712호
                        </Text>
                    </VStack>
                    <Text color="gray" textStyle="body5">
                        ⓒ AVCO All Rights Reserved.
                    </Text>
                </VStack>
            </AppContainer>
        </Box>
    );
}
