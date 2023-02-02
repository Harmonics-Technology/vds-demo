import React from "react";
import Header from "./header";
import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdOutlineArrowBackIos } from "react-icons/md";

function Layout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const home = router.asPath == "/";
    const gray = router.asPath == "/dashboard" || router.asPath == "/";
    return (
        <Box bgColor={gray ? "gray.200" : "white"}>
            <Header />
            <Box
                w={["85%", "75%"]}
                mx="auto"
                mt="1.5rem"
                pb={["5rem", "5rem"]}
                mb={["3rem", "0"]}
            >
                {/* <Button
                    onClick={() => router.back()}
                    variant="solid"
                    bgColor="brand.100"
                    color="white"
                    mb="1rem"
                    fontSize=".9rem"
                    leftIcon={<MdOutlineArrowBackIos />}
                    display={["none", home ? "none" : "flex"]}
                    _hover={{
                        bgColor: "rgb(38,55,74, .8)",
                    }}
                >
                    Back
                </Button> */}
                {children}
            </Box>
        </Box>
    );
}

export default Layout;
