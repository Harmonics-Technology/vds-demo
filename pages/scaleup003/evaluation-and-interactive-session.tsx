import { Box, Heading, Text, Link, Icon } from "@chakra-ui/react";
import Breadcrumbs from "@components/utilities/Breadcrumbs";
import Countdown from "@components/utilities/Countdown";
import Pages from "@components/utilities/Pages";
import Steps from "@components/utilities/Steps";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ClayToggle } from "@clayui/form";
import { PostContract } from "@components/utilities/PostContract";
// import "@clayui/css";

function Fifth() {
    const router = useRouter();
    const pageName = router.asPath.split("/")[2].replaceAll("-", " ");

    return (
        <Box>
            <Steps value={4} />
            <Breadcrumbs />
            <Heading textTransform="capitalize">{pageName}</Heading>
            <Text></Text>
            As part of submitting your bid, you will have self-assessed your
            experience by scoring the Evaluation Point Rated Criteria 1 and 2
            and obtained a score out of the total maximum combined score of 70
            points.
            <br />
            <br />
            INTERACTIVE SESSION <br />
            <br />
            If you achieved the pass mark for those Criteria 1 and 2 (42/70 or
            60%), Canada will invite you to participate in an interactive
            session. The invitation will be sent with more information at least
            2 working days before the session. <br />
            <br />
            In this Interactive Session, you should provide an example of a web
            application (Web-App) that showcases a fillable form where a public
            participant must provide and input information on their smart
            enabled device, and the Web-App would take that information and
            produce a PDF document that could then be forwarded to a specific
            recipient. <br />
            <br />
            For the purpose of this agile solicitation, a smart enabled device
            refers only to a smart phone or tablet. <br />
            <br />
            During the Interactive Session, Canada will: <br />
            <br />
            1. Validate or review scores for Criteria 1 and 2 submitted as part
            of the bid submission form by asking questions relevant to
            experience(s). <br />
            <br />
            2. Score the Web-App in accordance with the evaluation criteria.
            {/* <Text>
                Your application has been successfully submitted and is
                currently under review and you will be able to access this page
                in:
            </Text> */}
            <PostContract />
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
