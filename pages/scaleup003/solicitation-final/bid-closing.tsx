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
                This is all about the fourth stage of the {pageName}. it's so
                easy to navigate, try it and see what happens. <br />
                You can click next to see the next stage
            </Text>
            <Text>
                View the canada buy page to know the status of your posting and
                other related information
            </Text>
            <Link color="blue" isExternal href="/">
                Click here to register <Icon as={BiLinkExternal} mx="2px" />
            </Link>
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
