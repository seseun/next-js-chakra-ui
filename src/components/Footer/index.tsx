import {
    Box,
    Button,
    ButtonGroup,
    HStack,
    Heading,
    List,
    Text,
    VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { AppContainer } from "..";
import { LuExternalLink } from "react-icons/lu";

interface footerProps {}

function SitemapMenuList({
    list,
}: {
    list: Array<{ key: string; label: string; href: string }>;
}) {
    return (
        <List.Root
            align="start"
            color="fg.muted"
            fontSize="sm"
            gap={2}
            variant="plain"
        >
            {list.map((item) => (
                <List.Item key={`sitemap-${item.key}`}>
                    <NextLink href={item.href}>{item.label}</NextLink>
                </List.Item>
            ))}
        </List.Root>
    );
}

export default function Footer(props: footerProps) {
    return (
        <Box as="footer" w="full">
            <Box bgColor="bg.muted" py={10}>
                <AppContainer>
                    <HStack align="flex-start" w="full">
                        <Box flex={1}>
                            <Heading as="h5" fontSize="md" mb={4}>
                                자동매매 메뉴
                            </Heading>
                            <SitemapMenuList
                                list={[
                                    {
                                        key: "intro",
                                        href: "#none",
                                        label: "소개",
                                    },
                                    {
                                        key: "feature",
                                        href: "#none",
                                        label: "특징",
                                    },
                                    {
                                        key: "pricing",
                                        href: "#none",
                                        label: "가격 안내",
                                    },
                                    {
                                        key: "manual",
                                        href: "#none",
                                        label: "메뉴얼",
                                    },
                                    {
                                        key: "support",
                                        href: "#none",
                                        label: "고객센터",
                                    },
                                ]}
                            />
                        </Box>
                        <Box flex={1}>
                            <Heading as="h5" fontSize="md" mb={4}>
                                Contact
                            </Heading>
                            <Text color="fg.muted" fontSize="sm">
                                @Avco005
                                <br />
                                Avco.005@gmail.com
                            </Text>
                            <ButtonGroup size="sm" variant="outline" mt={4}>
                                <Button>
                                    1:1 문의하기 <LuExternalLink />
                                </Button>
                                <Button>
                                    제휴문의 <LuExternalLink />
                                </Button>
                            </ButtonGroup>
                        </Box>
                        <Box flex={1}>
                            <Heading as="h5" fontSize="md" mb={4}>
                                이용 방법
                            </Heading>
                            <SitemapMenuList
                                list={[
                                    {
                                        key: "ip",
                                        href: "#none",
                                        label: "IP 발급",
                                    },
                                    {
                                        key: "api",
                                        href: "#none",
                                        label: "거래소 API 연결하기",
                                    },
                                    {
                                        key: "strategy",
                                        href: "#none",
                                        label: "전략 선택하기",
                                    },
                                    {
                                        key: "settings",
                                        href: "#none",
                                        label: "거래 세부 설정",
                                    },
                                    {
                                        key: "bot",
                                        href: "#none",
                                        label: "자동거래봇 제어",
                                    },
                                    {
                                        key: "portfolio",
                                        href: "#none",
                                        label: "내 포트폴리오",
                                    },
                                ]}
                            />
                        </Box>
                    </HStack>
                </AppContainer>
            </Box>
            <Box bgColor="bg.subtle" py={10}>
                <AppContainer>
                    <List.Root
                        align="start"
                        flexDir="row"
                        fontSize="sm"
                        gap={4}
                        variant="plain"
                    >
                        <List.Item>
                            <NextLink href="#none">회사소개</NextLink>
                        </List.Item>
                        <List.Item>
                            <NextLink href="#none">서비스 이용정책</NextLink>
                        </List.Item>
                        <List.Item>
                            <NextLink href="#none">이용 가이드</NextLink>
                        </List.Item>
                        <List.Item>
                            <NextLink href="#none">투자 유의사항</NextLink>
                        </List.Item>
                        <List.Item>
                            <NextLink href="#none">이용약관</NextLink>
                        </List.Item>
                        <List.Item>
                            <NextLink href="#none">개인정보처리방침</NextLink>
                        </List.Item>
                        <List.Item>
                            <NextLink href="#none">고객센터</NextLink>
                        </List.Item>
                    </List.Root>
                    <Text color="fg.error" fontSize="xs" mt={4}>
                        OOO은 안전한 자동거래 봇으로 사용자의 모든 정보는 거래에
                        대한 데이터를 보여드리는 용도로만 사용하며
                        <br />
                        OOO은 어떠한 경우에도 사용자의 자산에 접근하지 않습니다.
                    </Text>
                    <Box mt={4} color="fg.muted" fontSize="xs">
                        <HStack>
                            <Text>(주)아브코</Text>
                            <Text>대표자 : 심준식, 김마태</Text>
                            <Text>사업자등록번호 : 721-88-02710</Text>
                        </HStack>
                        <Text>
                            주소 : 부산광역시 해운대구 센텀중앙로 48
                            에이스하이테크21, 711~712
                        </Text>
                    </Box>
                    <Text fontSize="xs" color="fg.subtle" mt={4}>
                        CopyrightⓒAVCO All Rights Reserved.
                    </Text>
                </AppContainer>
            </Box>
        </Box>
    );
}
