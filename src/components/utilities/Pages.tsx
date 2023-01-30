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
        <HStack
            w="100%"
            justify="space-between"
            cursor="pointer"
            my="1rem"
            gap="2rem"
        >
            <Box w="full">
                <Link passHref href={`/scaleup003/${prevUrl}` || ""}>
                    <Box
                        w="full"
                        display={prevTitle == undefined ? "none" : prevTitle}
                        border="1px solid"
                        borderColor="gray.300"
                        borderRadius="5px"
                        boxShadow="sm"
                        _hover={{ borderColor: "blue.400" }}
                    >
                        <Box w="fit-content" mr="auto" p="1rem">
                            <HStack
                                align="center"
                                fontSize=".7rem"
                                justify="flex-end"
                            >
                                <Icon as={BsArrowLeftShort} />
                                <Text mb="0" fontWeight="700">
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
            <Box w="full">
                <Link passHref href={`/scaleup003/${nextUrl}` || ""}>
                    <Box
                        w="full"
                        display={nextTitle == undefined ? "none" : nextTitle}
                        border="1px solid"
                        borderColor="gray.300"
                        borderRadius="5px"
                        boxShadow="sm"
                        _hover={{ borderColor: "blue.400" }}
                    >
                        <Box w="fit-content" ml="auto" p="1rem">
                            <HStack
                                align="center"
                                fontSize=".7rem"
                                justify="flex-end"
                            >
                                <Text mb="0" fontWeight="700">
                                    Next
                                </Text>
                                <Icon as={BsArrowRightShort} />
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
