import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

export default function StyleGuidePage() {
    return (
        <Flex gap={5}>
            <Box>
                <Heading textStyle="heading1">H1</Heading>
                <Heading textStyle="heading2">H2</Heading>
                <Heading textStyle="heading3">H3</Heading>
                <Heading textStyle="subtitle1">subtitle1</Heading>
                <Heading textStyle="subtitle2">subtitle2</Heading>
                <Heading textStyle="subtitle3">subtitle3</Heading>
                <Heading textStyle="subtitle4">subtitle4</Heading>
                <Heading textStyle="subtitle5">subtitle5</Heading>
                <Heading textStyle="subtitle6">subtitle6</Heading>
                <Heading textStyle="subtitle7">subtitle7</Heading>
                <Heading textStyle="subtitle8">subtitle8</Heading>
                <Text textStyle="caption1">caption1</Text>
                <Text textStyle="caption2">caption2</Text>
                <Text textStyle="caption3">caption3</Text>
                <Text textStyle="caption4">caption4</Text>
                <Text textStyle="caption5">caption5</Text>
                <Text textStyle="caption6">caption6</Text>
                <Text textStyle="caption7">caption7</Text>
                <Text textStyle="body1">body1</Text>
                <Text textStyle="body2">body2</Text>
                <Text textStyle="body3">body3</Text>
                <Text textStyle="body4">body4</Text>
                <Text textStyle="body5">body5</Text>
                <Text textStyle="body6">body6</Text>
            </Box>
            <Box>
                <Flex align="center" direction="column" gap={4}>
                    <Button variant="primarySolid">primarySolid - lg</Button>
                    <Button variant="primarySolid" size="md">
                        primarySolid - md
                    </Button>
                    <Button variant="primarySolid" size="sm">
                        primarySolid - sm
                    </Button>
                    <Button variant="primaryOutline">
                        primaryOutline - lg
                    </Button>
                    <Button variant="primaryOutline" size="md">
                        primaryOutline - md
                    </Button>
                    <Button variant="primaryOutline" size="sm">
                        primaryOutline - sm
                    </Button>
                    <Button variant="graySolid">graySolid - lg</Button>
                    <Button variant="graySolid" size="md">
                        graySolid - md
                    </Button>
                    <Button variant="graySolid" size="sm">
                        graySolid - sm
                    </Button>
                    <Button variant="link" size="textLg">
                        TextLink - lg
                    </Button>
                    <Button variant="link" size="textMd">
                        TextLink - md
                    </Button>
                    <Button variant="link" size="textSm">
                        TextLink - sm
                    </Button>
                </Flex>
            </Box>
        </Flex>
    );
}
