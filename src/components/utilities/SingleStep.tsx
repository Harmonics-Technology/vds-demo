import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { RiArrowDownFill } from "react-icons/ri";

interface bProps {
    bg?: string;
    title?: string;
    icon?: boolean;
    subtitle?: string;
    sideText?: string;
}

export const SingleSTep = ({
    title,
    subtitle,
    icon = true,
    bg = "#dfe3e8",
    sideText,
}: bProps) => {
    return (
        <Box w="full">
            <Flex gap="2rem">
                <Box w="full">
                    <Box
                        borderRadius="6px"
                        border="1px solid "
                        borderColor="gray.400"
                        textAlign="center"
                        p=".8rem"
                        bgColor={bg}
                    >
                        <Text fontWeight="700" mb="0">
                            {title}
                        </Text>
                        <Text mb="0">{subtitle}</Text>
                    </Box>
                    <Text w="full" display={["block", "none"]}>
                        {sideText}
                    </Text>
                    {icon && (
                        <Icon
                            as={RiArrowDownFill}
                            textAlign="center"
                            w="full"
                            fontSize="1.5rem"
                        />
                    )}
                </Box>
                <Text w="full" display={["none", "block"]}>
                    {sideText}
                </Text>
            </Flex>
        </Box>
    );
};
