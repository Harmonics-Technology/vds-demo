import {
    Box,
    Heading,
    Text,
    Link,
    Icon,
    Image,
    Flex,
    HStack,
} from "@chakra-ui/react";
import Breadcrumbs from "@components/utilities/Breadcrumbs";
import Countdown from "@components/utilities/Countdown";
import Pages from "@components/utilities/Pages";
import { PageStatus } from "@components/utilities/PageStatus";
import Steps from "@components/utilities/Steps";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";

function Second() {
    const router = useRouter();
    const pageName = router.asPath.split("/")[2].replaceAll("-", " ");
    return (
        <Box>
            <HStack justify={["center", "flex-end"]} mb={["2rem", "3rem"]}>
                <Countdown hide={true} time="2023-02-03" />
            </HStack>
            <Steps value={1} />
            <Flex align="center" justify={["flex-end", "space-between"]}>
                <Breadcrumbs />
                <PageStatus bg="yellow.500" status="In Progress" />
            </Flex>
            <Flex>
                <Box w="full">
                    <Heading textTransform="capitalize">{pageName}</Heading>
                    <Text mt="1rem">
                        The objective of this presentation is to provide
                        complementary information regarding Solicitation No.:
                        SCALEUP003 for an Automated Bidding Solution (ABS).
                        <br />
                        <br />
                        This presentation does not replace or modify any
                        provisions of the contract relation to the solicitation
                        mentioned above. <br />
                        <br />
                        In case of contradiction between this presentation and
                        the contract, the terms and conditions of the contract
                        document take precedence
                        <br />
                        <br /> This is the proposed agenda and the image below
                        will guide you through
                    </Text>
                </Box>
            </Flex>
            <Box w="full">
                <Image src="/abs.png" w="full" />
            </Box>
            <Link
                color="blue"
                mx="auto"
                w="fit-content"
                display="block"
                isExternal
                href="https://supplier-fournisseur-sscp2pspc.ssc-spc.gc.ca/page.aspx/en/sup/registration_extranet_manage"
            >
                Click here to register <Icon as={BiLinkExternal} mx="2px" />
            </Link>
            <Box mt="2rem">
                <Pages
                    prevTitle="solicitation posting"
                    nextTitle="feedback period"
                    nextUrl="feedback-period"
                    prevUrl="solicitation-posting"
                />
            </Box>
        </Box>
    );
}

export default Second;
