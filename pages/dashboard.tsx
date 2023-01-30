import React from "react";
import { Spacer, Flex, Heading, Grid } from "@chakra-ui/react";
import { NextTranslateExample } from "@components/examples/translate";
import { Cards } from "@components/utilities/Cards";

const Home: React.FC = () => {
    return (
        <Flex direction="column" minH="100vh">
            {/* <NextTranslateExample defaultNamespace="home" /> */}
            <Heading textAlign="left" textTransform="uppercase">
                Scaleup0003
            </Heading>
            <Grid templateColumns="repeat(2, 1fr)" gap="3rem" mt="3rem">
                <Cards num="1" title="solicitation posting" bg="orange" />
                <Cards num="2" title="webinar" bg="gray" />
                <Cards num="3" title="feedback period" bg="yellow" />
                <Cards num="4" title="solicitation final" bg="blue.400" />
                <Cards
                    num="5"
                    title="evaluation and interactive session"
                    bg="orange"
                />
            </Grid>
        </Flex>
    );
};

export default Home;
