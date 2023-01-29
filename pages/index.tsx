import React from "react";
import { Spacer, Flex } from "@chakra-ui/react";

import { Header, Main, Cards, Footer } from "@components";
import { NextTranslateExample } from "@components/examples/translate";

const Home: React.FC = () => {
    return (
        <Flex direction="column" minH="100vh">
            <NextTranslateExample defaultNamespace="home" />
        </Flex>
    );
};

export default Home;
