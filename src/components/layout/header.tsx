import { Flex, HStack, Image, Text, Heading, Box } from "@chakra-ui/react";
import Link from "next/link";
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
            <Flex justify="space-between" w="75%" align="center" h="90%">
                <Link href="/" passHref>
                    <Image src="/cdlogo.svg" h="1.5rem" cursor="pointer" />
                </Link>
                <Box>
                    <Heading>VDS Demo</Heading>
                </Box>
            </Flex>
        </Flex>
    );
}

export default Header;
