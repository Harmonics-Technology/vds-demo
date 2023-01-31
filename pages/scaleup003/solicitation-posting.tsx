import { Box, Heading, Text, Link, Icon } from "@chakra-ui/react";
import Breadcrumbs from "@components/utilities/Breadcrumbs";
import Pages from "@components/utilities/Pages";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { Progress } from "@chakra-ui/react";
import Steps from "@components/utilities/Steps";
import dynamic from "next/dynamic";
// const Speech = dynamic(() => import("react-speech"), { ssr: false });

function First() {
    const router = useRouter();
    const pageName = router.asPath.split("/")[2].replaceAll("-", " ");
    const style = {
        play: {
            button: {
                width: "28",
                height: "28",
                cursor: "pointer",
                pointerEvents: "none",
                outline: "none",
                backgroundColor: "yellow",
                border: "solid 1px rgba(255,255,255,1)",
                borderRadius: 6,
            },
        },
    };
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
            <Link
                color="blue"
                isExternal
                href="https://canadabuys.canada.ca/en/tender-opportunities/tender-notice/pw-22-00985529"
            >
                Click to view canada buy <Icon as={BiLinkExternal} mx="2px" />
            </Link>
            <Box mt="2rem">
                <Pages nextTitle="webinar" nextUrl="webinar" />
            </Box>
            {/* <Speech
                stop={true}
                pause={true}
                resume={true}
                styles={style}
                text="This is all about the first stage of the {pageName}. it's so
                easy to navigate, try it and see what happens. <br />
                You can click next to see the next stage"
            /> */}
        </Box>
    );
}

export default First;
