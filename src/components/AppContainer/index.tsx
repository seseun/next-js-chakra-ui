import { Container, ContainerProps } from "@chakra-ui/react";

export default function AppContainer(props: ContainerProps) {
    return <Container px={8} maxW="7xl" {...props}></Container>;
}
