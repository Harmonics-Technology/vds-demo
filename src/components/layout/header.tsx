import {
    Flex,
    HStack,
    Image,
    Text,
    Heading,
    Box,
    Link,
    Icon,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
    return (
        <Flex
            w="full"
            h={["6rem", "8rem"]}
            bgColor={["brand.100", "white"]}
            align="center"
            justify="center"
            boxShadow="md"
            pos="sticky"
            top="0"
            zIndex="800"
            color={["white", "brand.100"]}
        >
            <Flex
                justify="space-between"
                w={["90%", "75%"]}
                align="center"
                h="90%"
                // flexDir={["column", "row"]}
            >
                <NextLink href="/" passHref>
                    <Box>
                        <Image
                            src="/cdlogo.svg"
                            h="1.5rem"
                            cursor="pointer"
                            display={["none", "block"]}
                        />
                        <Image
                            src="/cdlogo.png"
                            h="1.5rem"
                            cursor="pointer"
                            display={["block", "none"]}
                        />
                    </Box>
                </NextLink>
                <Box display={["none", "block"]} mt={["1rem", "0"]}>
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
                <Icon
                    as={GiHamburgerMenu}
                    fontSize="2rem"
                    display={["block", "none"]}
                />
            </Flex>
        </Flex>
    );
}

export default Header;
