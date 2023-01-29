import { Box, Heading, Text, Link, Icon } from "@chakra-ui/react";
import Breadcrumbs from "@components/utilities/Breadcrumbs";
import Pages from "@components/utilities/Pages";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { Progress } from "@chakra-ui/react";
import Steps from "@components/utilities/Steps";

function First() {
    const router = useRouter();
    const pageName = router.asPath.split("/")[2].replaceAll("-", " ");
    return (
        <Box>
            {/* <Progress value={20} /> */}
            <Steps value={0} />
            <Breadcrumbs />
            <Heading textTransform="capitalize">{pageName}</Heading>
            <Text mt="1rem">
                This is all about the first stage of the {pageName}. it's so
                easy to navigate, try it and see what happens. <br />
                You can click next to see the next stage
            </Text>
            <Text>
                View the canada buy page to know the status of your posting and
                other related information
            </Text>
            <Link color="blue" isExternal href="/">
                Click to view canada buy <Icon as={BiLinkExternal} mx="2px" />
            </Link>
            <Box mt="2rem">
                <Pages nextTitle="webinar" nextUrl="/scope/webinar" />
            </Box>
        </Box>
    );
}

export default First;
