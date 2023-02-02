import { Box, Heading, Text, Link, Icon, Flex, HStack } from "@chakra-ui/react";
import Breadcrumbs from "@components/utilities/Breadcrumbs";
import Countdown from "@components/utilities/Countdown";
import Pages from "@components/utilities/Pages";
import { PageStatus } from "@components/utilities/PageStatus";
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
            <HStack justify={["center", "flex-end"]} mb={["2rem", "3rem"]}>
                <Countdown hide={true} time="2023-02-03" />
            </HStack>
            <Steps value={2} />
            <Flex align="center" justify={["flex-end", "space-between"]}>
                <Breadcrumbs />
                <PageStatus bg="yellow.500" status="In Progress" />
            </Flex>
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
