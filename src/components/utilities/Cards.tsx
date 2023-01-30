import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

interface pageProps {
    num?: string;
    title: string;
    bg: string;
}

export const Cards = ({ num, title, bg }: pageProps) => {
    return (
        <Box
            w="full"
            minH="5rem"
            // boxShadow="lg"
            borderRadius="10px"
            p="1rem"
            border="1px solid"
            borderColor="gray.300"
        >
            <Text
                bgColor={bg}
                color={bg == "yellow" ? "black" : "white"}
                p=".2rem 2rem .2rem 1rem"
                w="fit-content"
                fontSize=".9rem"
            >
                Stage {num}
            </Text>
            <Heading textTransform="capitalize">{title}</Heading>
            <Link passHref href={`scaleup003/${title.replaceAll(" ", "-")}`}>
                <Flex
                    role="group"
                    transition="all .5s ease"
                    mt="2rem"
                    align="center"
                    cursor="pointer"
                    justify="flex-end"
                    color="yellow.600"
                >
                    <Text
                        fontSize=".8rem"
                        mb="0"
                        textAlign="right"
                        _groupHover={{
                            pr: ".3rem",
                        }}
                    >
                        Expand
                    </Text>
                    <Icon as={BsArrowRightShort} />
                </Flex>
            </Link>
        </Box>
    );
};
