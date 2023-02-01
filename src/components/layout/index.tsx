import React from "react";
import Header from "./header";
import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdOutlineArrowBackIos } from "react-icons/md";

function Layout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const home = router.asPath == "/";
    return (
        <div>
            <Header />
            <Box w="75%" mx="auto" mt="2rem" mb="5rem">
                <Button
                    onClick={() => router.back()}
                    variant="solid"
                    mb="1rem"
                    fontSize=".9rem"
                    leftIcon={<MdOutlineArrowBackIos />}
                    display={home ? "none" : "flex"}
                >
                    Back
                </Button>
                {children}
            </Box>
        </div>
    );
}

export default Layout;
