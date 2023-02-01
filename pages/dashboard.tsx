import React from "react";
import { Spacer, Flex, Heading, Grid, Button } from "@chakra-ui/react";
import { Cards } from "@components/utilities/Cards";
import Link from "next/link";

const Home: React.FC = () => {
    return (
        <Flex direction="column" minH="100vh">
            <Flex
                justify={["center", "space-between"]}
                align="center"
                flexDirection={["column", "row"]}
            >
                <Heading textAlign="left" textTransform="uppercase" mb="0">
                    Scaleup0003
                </Heading>
                <Link passHref href="scaleup003/solicitation-posting">
                    <Button
                        bgColor="brand.100"
                        fontSize="1.2rem"
                        color="white"
                        w={["full", "20%"]}
                        h="3rem"
                        ml="auto"
                        display={["none", "flex"]}
                    >
                        Get Started
                    </Button>
                </Link>
            </Flex>
            <Grid
                templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
                gap="3rem"
                mt="3rem"
            >
                <Cards num="1" title="solicitation posting" bg="orange" />
                <Cards num="2" title="webinar" bg="gray" />
                <Cards num="3" title="feedback period" bg="yellow.300" />
                <Cards num="4" title="solicitation final" bg="blue.400" />
                <Cards
                    num="5"
                    title="evaluation and interactive session"
                    bg="orange"
                />
            </Grid>
            <Link passHref href="scaleup003/solicitation-posting">
                <Button
                    bgColor="brand.100"
                    fontSize="1.2rem"
                    color="white"
                    w={["full", "30%"]}
                    h="3rem"
                    ml="auto"
                    mt="3rem"
                >
                    Get Started
                </Button>
            </Link>
        </Flex>
    );
};

export default Home;
