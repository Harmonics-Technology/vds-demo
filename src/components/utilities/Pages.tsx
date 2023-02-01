import { Box, Button, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { MdOutlineArrowBackIos } from "react-icons/md";

interface pageProps {
    prevTitle?: string;
    nextTitle?: string;
    nextUrl?: string;
    prevUrl?: string;
}

function Pages({ prevTitle, nextTitle, nextUrl, prevUrl }: pageProps) {
    const router = useRouter();
    const home = router.asPath == "/";
    return (
        <HStack
            w={["90%", "100%"]}
            justify="center"
            cursor="pointer"
            py="3rem"
            gap={["1rem", "2rem"]}
            pos={["fixed", "unset"]}
            bgColor="white"
            bottom="0"
            align="center"
            left="50%"
            transform={["translateX(-50%)", "unset"]}
        >
            <Box
                w={["full", "100%"]}
                display={[
                    prevTitle == undefined || nextTitle == undefined
                        ? "flex"
                        : "none",
                    "none",
                ]}
            >
                <Button
                    onClick={() => router.back()}
                    variant="solid"
                    bgColor="brand.100"
                    color="white"
                    // mb="1rem"
                    w="full"
                    h="2.8rem"
                    fontSize=".9rem"
                    leftIcon={<MdOutlineArrowBackIos />}
                    // display={home ? "none" : "flex"}
                >
                    Back
                </Button>
            </Box>
            <Box
                w={["full", "100%"]}
                display={prevTitle == undefined ? "none" : "block"}
            >
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
            <Box
                w={["full", "100%"]}
                display={nextTitle == undefined ? "none" : "block"}
            >
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
