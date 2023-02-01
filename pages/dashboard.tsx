import React from "react";
import {
    Spacer,
    Flex,
    Heading,
    Grid,
    Button,
    Box,
    Text,
    Image,
} from "@chakra-ui/react";
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
                {/* <Link passHref href="scaleup003/solicitation-posting">
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
                </Link> */}
            </Flex>
            <Grid
                templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
                gap="3rem"
                mt="3rem"
            >
                <Cards
                    num="1"
                    title="solicitation posting"
                    bg="orange"
                    status="completed"
                    date="01/02/2022"
                />
                <Cards
                    num="2"
                    title="webinar"
                    bg="gray"
                    status="in progress"
                    date="01/22/2022"
                />
                <Cards
                    num="3"
                    title="feedback period"
                    bg="yellow.300"
                    status="in progress"
                    date="04/11/2022"
                />
                <Cards
                    num="4"
                    title="solicitation final"
                    bg="blue.400"
                    status="in progress"
                    date="04/16/2022"
                />
                <Cards
                    num="5"
                    title="evaluation and interactive session"
                    bg="orange"
                    status="future"
                    date="05/09/2022"
                />
            </Grid>
            <Box w={["full", "full"]} mt="3rem">
                <Image src="/vid.png" w="full" />
                <Text textAlign="center" mt="1rem">
                    Watch video to learn more
                </Text>
            </Box>
            <Link passHref href="scaleup003/solicitation-posting">
                <Button
                    bgColor="brand.100"
                    fontSize="1.2rem"
                    color="white"
                    w={["full", "30%"]}
                    h="3rem"
                    mx="auto"
                    mt="3rem"
                    _hover={{
                        bgColor: "rgb(38,55,74, .8)",
                    }}
                >
                    Get Started
                </Button>
            </Link>
        </Flex>
    );
};

export default Home;
