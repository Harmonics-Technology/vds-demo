import { Box, Heading, Text, Link, Icon } from "@chakra-ui/react";
import Breadcrumbs from "@components/utilities/Breadcrumbs";
import Pages from "@components/utilities/Pages";
import Steps from "@components/utilities/Steps";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";

function Third() {
    const router = useRouter();
    const pageName = router.asPath.split("/")[2].replaceAll("-", " ");
    return (
        <Box>
            <Steps value={2} />
            <Breadcrumbs />
            <Heading textTransform="capitalize">{pageName}</Heading>
            <Text mt="1rem">You are now in the {pageName}!</Text>
            <Text>
                You'll be required to complete the questionnaire sample
                questionnaire
            </Text>
            <Link
                color="blue"
                isExternal
                href="https://www.surveymonkey.com/r/BN3RXG5"
            >
                Click here to fill questionnaire{" "}
                <Icon as={BiLinkExternal} mx="2px" />
            </Link>
            <Box mt="2rem">
                <Pages
                    prevTitle="webinar"
                    nextTitle="solicitation final"
                    nextUrl="solicitation-final"
                    prevUrl="webinar"
                />
            </Box>
        </Box>
    );
}

export default Third;
