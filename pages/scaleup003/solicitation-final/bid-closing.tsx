import { Box, Heading, Text, Link, Icon, Flex } from "@chakra-ui/react";
import { ClayToggle } from "@clayui/form";
import Breadcrumbs from "@components/utilities/Breadcrumbs";
import Countdown from "@components/utilities/Countdown";
import Pages from "@components/utilities/Pages";
import { PageStatus } from "@components/utilities/PageStatus";
import Steps from "@components/utilities/Steps";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiLinkExternal } from "react-icons/bi";

function Fourth() {
    const router = useRouter();
    const pageName = router.asPath.split("/")[3].replaceAll("-", " ");
    const [hide, setHide] = useState<boolean>(true);
    return (
        <Box>
            <Steps value={3} />
            <Flex align="center" justify={["flex-end", "space-between"]}>
                <Breadcrumbs />
                <PageStatus bg="yellow.500" status="In Progress" />
            </Flex>
            <Heading textTransform="capitalize">{pageName}</Heading>
            <Text mt="1rem">
                The Bid closing date has been extended to February 23 2022 at 2
                PM ET
            </Text>
            <Text>
                More information about the solicitation process will be
                available on the next stage
            </Text>
            <Countdown hide={hide} time="2023-02-03" />
            <ClayToggle
                label={!hide ? "Show Countdown" : "Hide Countdown"}
                onToggle={setHide}
                symbol={{
                    off: "timed",
                    on: "check",
                }}
                toggled={hide}
            />

            <Box mt="2rem">
                <Pages
                    nextTitle="evaluation and interactive session"
                    nextUrl="evaluation-and-interactive-session"
                    prevTitle="solicitation final"
                    prevUrl="solicitation-final"
                />
            </Box>
        </Box>
    );
}

export default Fourth;
