import { Box, BoxProps } from "@chakra-ui/react";

export default function DecoBox(props: BoxProps) {
    return (
        <Box
            alignItems="center"
            bgColor="bg.muted"
            display="flex"
            justifyContent="center"
            p={2}
            {...props}
        ></Box>
    );
}
