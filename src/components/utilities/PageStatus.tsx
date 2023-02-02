import { VStack, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const PageStatus = ({ status, bg }: { status: string; bg: string }) => {
    return (
        <VStack mb={["1rem", "0"]}>
            <Text mb="0" display={["none", "block"]}>
                Status
            </Text>
            <Flex
                w="fit-content"
                h="2rem"
                borderRadius="20px"
                px="2rem"
                align="center"
                justify="center"
                color="white"
                bgColor={bg}
            >
                {status}
            </Flex>
        </VStack>
    );
};
