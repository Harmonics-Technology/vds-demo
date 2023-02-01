import { Box, Heading, Text, Link, Icon } from "@chakra-ui/react";
import Breadcrumbs from "@components/utilities/Breadcrumbs";
import Pages from "@components/utilities/Pages";
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
            <Steps value={1} />
            <Breadcrumbs />
            <Heading textTransform="capitalize">{pageName}</Heading>
            <Text mt="1rem">
                This is the proposed agenda and the image below will guide you
                through
            </Text>

            <Link
                color="blue"
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
