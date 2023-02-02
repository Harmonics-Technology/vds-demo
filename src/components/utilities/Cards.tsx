import { Box, Circle, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

interface pageProps {
    num?: string;
    title: string;
    bg: string;
    status: string;
    date: string;
}

export const Cards = ({ num, title, bg, status, date }: pageProps) => {
    return (
        <Link passHref href={`scaleup003/${title.replaceAll(" ", "-")}`}>
            <Flex
                w="full"
                minH="5rem"
                // boxShadow="lg"
                borderRadius="10px"
                p="1rem"
                border="1px solid"
                borderColor="gray.300"
                bgColor="white"
                cursor="pointer"
                role="group"
                flexDir="column"
                justify="space-between"
                _hover={{
                    bgColor: "brand.100",
                    color: "white",
                }}
            >
                <Box>
                    <Circle
                        size="3rem"
                        border="2px solid"
                        borderColor="brand.100"
                        alignItems="center"
                        justifyContent="center"
                        mb="1rem"
                        _groupHover={{
                            borderColor: "white",
                        }}
                    >
                        <Text fontSize="1.4rem" mb="0" fontWeight="bold">
                            {num}
                        </Text>
                    </Circle>
                    <Heading textTransform="capitalize" fontSize="1.3rem">
                        {title}
                    </Heading>
                </Box>

                <Flex justify="space-between" align="center" mt="2rem">
                    <Text
                        fontSize=".7rem"
                        color="gray.400"
                        mb="0"
                        _groupHover={{ color: "white" }}
                    >
                        Date: {date}
                    </Text>
                    <Flex
                        transition="all .5s ease"
                        align="center"
                        cursor="pointer"
                        justify="center"
                        color="white"
                        w="fit-content"
                        px="2rem"
                        h="2rem"
                        borderRadius="20px"
                        bgColor={
                            status == "in progress"
                                ? "yellow.500"
                                : status == "completed"
                                ? "green.500"
                                : "gray.500"
                        }
                        _groupHover={{
                            color: "white",
                        }}
                    >
                        <Text
                            fontSize="1rem"
                            mb="0"
                            textAlign="right"
                            textTransform="capitalize"
                            _groupHover={{
                                pr: ".3rem",
                            }}
                        >
                            {status}
                        </Text>
                        {/* <Icon as={BsArrowRightShort} /> */}
                    </Flex>
                </Flex>
            </Flex>
        </Link>
    );
};
