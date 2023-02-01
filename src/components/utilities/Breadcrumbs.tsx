import {
    Flex,
    Box,
    Text,
    HStack,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Icon,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FiChevronsRight } from "react-icons/fi";
import useWindowSize from "./useWindowSize";

function Breadcrumbs() {
    const router = useRouter();
    const parent = router.asPath.split("/")[1];
    const childPage = router.asPath.split("/");
    // console.log({ childPage });
    const size = useWindowSize();
    return (
        <>
            <Breadcrumb
                separator={<Icon as={FiChevronsRight} color="gray.500" />}
                mb="1rem"
                display={
                    size.width != null && size.width <= 590 ? "none" : "block"
                }
            >
                {childPage.slice(1).map((child) => (
                    <BreadcrumbItem>
                        <BreadcrumbLink
                            href={`/${child}`}
                            bgColor="gray.200"
                            color="black"
                            fontSize=".8rem"
                            px=".5rem"
                            py=".1rem"
                            borderRadius="30px"
                        >
                            {child.replaceAll("-", " ")}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                ))}
            </Breadcrumb>
        </>
    );
}

export default Breadcrumbs;
