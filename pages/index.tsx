import React from "react";
import {
    Spacer,
    Flex,
    Heading,
    Grid,
    Image,
    Box,
    Text,
    HStack,
    Icon,
    Button,
} from "@chakra-ui/react";
import { NextTranslateExample } from "@components/examples/translate";
import { Cards } from "@components/utilities/Cards";
import { MdTimerOff } from "react-icons/md";
import { CiTimer } from "react-icons/ci";
import Link from "next/link";

const Home: React.FC = () => {
    return (
        <Flex direction="column" minH="100vh">
            <Box w="80%" boxShadow="md" mx="auto">
                <Box w="full" h="18rem" overflow="hidden">
                    <Image src="/cdb.jpg" w="full" h="full" objectFit="cover" />
                </Box>
                <Box w="full" p="1rem">
                    <Text fontSize="1.3rem" fontWeight="bold">
                        Title of the application
                    </Text>
                    <HStack>
                        <Icon as={CiTimer} />
                        <Text>Posting period: 9:00am</Text>
                    </HStack>
                    <HStack>
                        <Icon as={MdTimerOff} />
                        <Text>Closing period: 9:00am</Text>
                    </HStack>
                    <Flex justify="flex-end" mt="2rem">
                        <Link passHref href="/dashboard">
                            <Button
                                bgColor="brand.100"
                                color="white"
                                borderRadius="0"
                                fontSize=".8rem"
                                px="1rem"
                            >
                                Get Started
                            </Button>
                        </Link>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    );
};

export default Home;
