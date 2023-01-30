import { Box, Heading, Text, Link, Icon } from "@chakra-ui/react";
import Breadcrumbs from "@components/utilities/Breadcrumbs";
import Countdown from "@components/utilities/Countdown";
import Pages from "@components/utilities/Pages";
import Steps from "@components/utilities/Steps";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ClayToggle } from "@clayui/form";
// import "@clayui/css";

function Fifth() {
    const router = useRouter();
    const pageName = router.asPath.split("/")[2].replaceAll("-", " ");
    const [hide, setHide] = useState<boolean>(true);
    return (
        <Box>
            <Steps value={4} />
            <Breadcrumbs />
            <Heading textTransform="capitalize">{pageName}</Heading>
            <Text mt="1rem">This is the end of this page</Text>
            <Text>
                Your application has been successfully submitted and is
                currently under review and will be available in
            </Text>
            <ClayToggle
                label={hide ? "Show Countdown" : "Hide Countdown"}
                onToggle={setHide}
                symbol={{
                    off: "timed",
                    on: "check",
                }}
                toggled={hide}
            />
            <Countdown hide={hide} />
            <Box mt="2rem">
                <Pages
                    prevTitle="bid closing"
                    prevUrl="solicitation-final/bid-closing"
                />
            </Box>
        </Box>
    );
}

export default Fifth;
