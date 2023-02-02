import { Box, Heading, Text, Link, Icon, Flex, Image } from "@chakra-ui/react";
import Breadcrumbs from "@components/utilities/Breadcrumbs";
import Pages from "@components/utilities/Pages";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { Progress } from "@chakra-ui/react";
import Steps from "@components/utilities/Steps";
import dynamic from "next/dynamic";
import { PageStatus } from "@components/utilities/PageStatus";
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
        <>
            <Steps value={0} />
            <Flex
                w="full"
                justify="space-between"
                gap="2rem"
                flexDir={["column", "row"]}
            >
                <Box w={["full", "full"]}>
                    {/* <Progress value={20} /> */}
                    <Flex
                        align="center"
                        justify={["flex-end", "space-between"]}
                    >
                        <Breadcrumbs />
                        <PageStatus bg="green.500" status="Completed" />
                    </Flex>
                    <Heading textTransform="capitalize">{pageName}</Heading>
                    <Text mt="1rem">
                        The Government of Canada currently lacks the ability to
                        automate the production and submission of tender
                        documents. Current forms tend to be overly complex and
                        difficult to follow, and the process to provide the
                        required information is typically labour intensive.{" "}
                        <br />
                        <br />
                        <strong>
                            {" "}
                            SSC is seeking a solution that addresses these
                            challenges and allows the Bidder to enter and submit
                            a bid from their smart enabled device.
                        </strong>{" "}
                        SSC intends to award up to 4 contracts for up to $20k
                        each for the first Prototype of an Automated Bidding
                        Solution.
                        <br />
                        <br />
                    </Text>
                    <Link
                        color="blue"
                        isExternal
                        href="https://canadabuys.canada.ca/en/tender-opportunities/tender-notice/pw-22-00985529"
                    >
                        Click to view original posting of the solicitation on
                        canada buy <Icon as={BiLinkExternal} mx="2px" />
                    </Link>
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
            </Flex>
            <Box mt="2rem">
                <Pages nextTitle="webinar" nextUrl="webinar" />
            </Box>
        </>
    );
}

export default First;
