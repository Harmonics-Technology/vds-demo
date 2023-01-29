import { Flex, Box, Text, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

function Breadcrumbs() {
    const router = useRouter();
    const parent = router.asPath.split("/")[1];
    const childPage = router.asPath.split("/");
    return (
        <HStack my="1rem">
            {childPage.map((child) => (
                <>
                    <Flex
                        bgColor="gray.200"
                        color="black"
                        fontSize=".8rem"
                        px=".5rem"
                        py=".1rem"
                        borderRadius="30px"
                        align="center"
                    >
                        {child.replaceAll("-", " ")}
                    </Flex>
                </>
            ))}
        </HStack>
    );
}

export default Breadcrumbs;
