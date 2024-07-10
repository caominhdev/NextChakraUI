import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";

interface MainProps {
  children: React.ReactNode;
  router: any;
}

const Main = ({ children, router }: MainProps) => (
  <Box as="main">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>My App</title>
    </Head>

    <Container maxW="container.md">{children}</Container>
  </Box>
);

export default Main;
