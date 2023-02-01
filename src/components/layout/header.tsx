import {
    Flex,
    HStack,
    Image,
    Text,
    Heading,
    Box,
    Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

function Header() {
    return (
        <Flex
            w="full"
            h="8rem"
            bgColor="white"
            align="center"
            justify="center"
            boxShadow="md"
        >
            <Flex
                justify={["center", "space-between"]}
                w={["90%", "75%"]}
                align="center"
                h="90%"
                flexDir={["column", "row"]}
            >
                <NextLink href="/" passHref>
                    <Image src="/cdlogo.svg" h="1.5rem" cursor="pointer" />
                </NextLink>
                <Box display={["flex", "block"]} mt={["1rem", "0"]}>
                    <HStack justify="flex-end">
                        <NextLink href="en" passHref>
                            <Text
                                mb="0"
                                p=".2rem .3rem"
                                borderRadius="4px"
                                cursor="pointer"
                            >
                                FR
                            </Text>
                        </NextLink>

                        <NextLink href="en" passHref>
                            <Text
                                bgColor="brand.100"
                                color="white"
                                p=".2rem .3rem"
                                borderRadius="4px"
                                cursor="pointer"
                            >
                                EN
                            </Text>
                        </NextLink>
                    </HStack>
                    <Heading ml="1rem">VDS Demo</Heading>
                </Box>
            </Flex>
        </Flex>
    );
}

export default Header;
