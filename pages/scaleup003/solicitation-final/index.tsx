import {
    Box,
    Heading,
    Text,
    Link,
    Icon,
    Table,
    Tbody,
    Thead,
    Th,
    Tr,
    Td,
} from "@chakra-ui/react";
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
            <Steps value={2.5} />
            <Breadcrumbs />
            <Heading textTransform="capitalize">{pageName}</Heading>
            <Text mt="1rem">
                You are required to download the document attached below to
                guide you on the next line of action to complete your bidding
            </Text>
            <Table border="1px solid">
                <Thead>
                    <Tr bgColor="gray.600">
                        <Th color="white">Document Title</Th>
                        <Th color="white">Date Modified</Th>
                        <Th color="white">Language</Th>
                        <Th color="white">Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr borderBottom="1px solid">
                        <Td borderRight="1px solid">
                            scaleup_standard_instructions.pdf
                        </Td>
                        <Td borderRight="1px solid">2022/02/11</Td>
                        <Td borderRight="1px solid">English</Td>
                        <Td>
                            <Link
                                href="https://canadabuys.canada.ca/documents/pub/att/2022/02/11/2ba8317da341d4a2f632cf042acaf16f/scaleup_standard_instructions.pdf"
                                isExternal
                            >
                                Download
                            </Link>
                        </Td>
                    </Tr>
                    <Tr borderBottom="1px solid">
                        <Td borderRight="1px solid">
                            supplier_registration_in_p2p_en.pdf
                        </Td>
                        <Td borderRight="1px solid">2022/02/17</Td>
                        <Td borderRight="1px solid">English</Td>
                        <Td>
                            <Link
                                href="https://canadabuys.canada.ca/documents/pub/att/2022/02/17/b52965ed496c7c039d47a32018d2bab3/supplier_registration_in_p2p_en.pdf"
                                isExternal
                            >
                                Download
                            </Link>
                        </Td>
                    </Tr>
                    <Tr borderBottom="1px solid">
                        <Td borderRight="1px solid">scaleup003_qa_-_qr.pdf</Td>
                        <Td borderRight="1px solid">2022/02/11</Td>
                        <Td borderRight="1px solid">English</Td>
                        <Td>
                            <Link
                                href="https://canadabuys.canada.ca/documents/pub/att/2022/02/17/551b77ba7bfbcb1bfc33ae2ab3af27c5/transcript_of_webinar_for_scaleup003_abs_requirement_eng_fr.pdf"
                                isExternal
                            >
                                Download
                            </Link>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
            <Box mt="2rem">
                <Pages
                    prevTitle="feedback period"
                    nextTitle="bid closing"
                    nextUrl="solicitation-final/bid-closing"
                    prevUrl="feedback-period"
                />
            </Box>
        </Box>
    );
}

export default Third;
