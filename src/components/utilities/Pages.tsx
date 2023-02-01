import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

interface pageProps {
    prevTitle?: string;
    nextTitle?: string;
    nextUrl?: string;
    prevUrl?: string;
}

function Pages({ prevTitle, nextTitle, nextUrl, prevUrl }: pageProps) {
    return (
        <HStack w="100%" justify="center" cursor="pointer" my="3rem" gap="2rem">
            <Box w={["full", "100%"]}>
                <Link
                    passHref
                    href={
                        prevTitle == undefined
                            ? ``
                            : `/scaleup003/${prevUrl}` || ""
                    }
                >
                    <Box
                        w="full"
                        display={prevTitle == undefined ? "none" : prevTitle}
                        border="1px solid"
                        borderColor={
                            prevTitle == undefined ? "gray.100" : "gray.300"
                        }
                        borderRadius="5px"
                        boxShadow="sm"
                        bgColor={
                            prevTitle == undefined ? "gray.100" : "brand.100"
                        }
                        color="white"
                        // _hover={{ borderColor: "blue.400" }}
                    >
                        <Box w="fit-content" mx="auto" p=".6rem">
                            <HStack
                                align="center"
                                fontSize=".7rem"
                                justify="flex-center"
                            >
                                <Text
                                    mb="0"
                                    fontWeight="600"
                                    fontSize="1rem"
                                    textAlign="center"
                                >
                                    Previous
                                </Text>
                            </HStack>
                            {/* <Text
                                fontSize="1.2rem"
                                textTransform="capitalize"
                                mb="0"
                                fontWeight="600"
                                color="blue.400"
                            >
                                {prevTitle}
                            </Text> */}
                        </Box>
                    </Box>
                </Link>
            </Box>
            <Box w={["full", "100%"]}>
                <Link
                    passHref
                    href={
                        nextTitle == undefined
                            ? ``
                            : `/scaleup003/${nextUrl}` || ""
                    }
                >
                    <Box
                        w="full"
                        display={nextTitle == undefined ? "none" : nextTitle}
                        border="1px solid"
                        borderColor={
                            nextTitle == undefined ? "gray.100" : "gray.300"
                        }
                        borderRadius="5px"
                        boxShadow="sm"
                        bgColor={
                            nextTitle == undefined ? "gray.100" : "brand.100"
                        }
                        color="white"
                        // _hover={{ borderColor: "blue.400" }}
                    >
                        <Box w="fit-content" mx="auto" p=".6rem">
                            <HStack
                                align="center"
                                fontSize=".7rem"
                                justify="flex-center"
                            >
                                <Text
                                    mb="0"
                                    fontWeight="600"
                                    fontSize="1rem"
                                    textAlign="center"
                                >
                                    Next
                                </Text>
                                {/* <Icon as={BsArrowRightShort} /> */}
                            </HStack>
                            {/* <Text
                                fontSize="1.2rem"
                                textTransform="capitalize"
                                mb="0"
                                fontWeight="600"
                                color="blue.400"
                            >
                                {nextTitle}
                            </Text> */}
                        </Box>
                    </Box>
                </Link>
            </Box>
        </HStack>
    );
}

export default Pages;
