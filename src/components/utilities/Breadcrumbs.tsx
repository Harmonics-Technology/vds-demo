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
                    <Box
                        bgColor="red.700"
                        color="white"
                        fontSize=".8rem"
                        px=".5rem"
                        py=".1rem"
                        borderRadius="30px"
                    >
                        {child.replaceAll("-", " ")}
                    </Box>
                </>
            ))}
        </HStack>
    );
}

export default Breadcrumbs;
