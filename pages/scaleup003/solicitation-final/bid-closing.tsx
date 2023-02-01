import { Box, Heading, Text, Link, Icon } from "@chakra-ui/react";
import Breadcrumbs from "@components/utilities/Breadcrumbs";
import Pages from "@components/utilities/Pages";
import Steps from "@components/utilities/Steps";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";

function Fourth() {
    const router = useRouter();
    const pageName = router.asPath.split("/")[3].replaceAll("-", " ");
    return (
        <Box>
            <Steps value={3} />
            <Breadcrumbs />
            <Heading textTransform="capitalize">{pageName}</Heading>
            <Text mt="1rem">
                You're expected to see information about the post bidding
                process end to end here
            </Text>
            <Text>
                More information about the solicitation process will be
                available on the next stage
            </Text>

            <Box mt="2rem">
                <Pages
                    prevTitle="solicitation final"
                    nextTitle="evaluation and interactive session"
                    nextUrl="evaluation-and-interactive-session"
                    prevUrl="solicitation-final"
                />
            </Box>
        </Box>
    );
}

export default Fourth;
