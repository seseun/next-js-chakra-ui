import { Container, ContainerProps } from "@chakra-ui/react";

export default function AppContainer(props: ContainerProps) {
    return <Container px="18px" maxW="1100px" {...props}></Container>;
}
