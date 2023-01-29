import React from "react";
import Header from "./header";
import { Box } from "@chakra-ui/react";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            <Box w="75%" mx="auto" mt="2rem">
                {children}
            </Box>
        </div>
    );
}

export default Layout;
