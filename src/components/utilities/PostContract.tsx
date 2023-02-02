import { Box, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { RiArrowDownFill } from "react-icons/ri";
import { SingleSTep } from "./SingleStep";

export const PostContract = () => {
    return (
        <VStack w="100%" mt="3rem" pb={["3rem", "0"]}>
            <SingleSTep
                title="Contract Award"
                bg="#94b8e2"
                subtitle="Up to 4 Solutions ($20K each)"
                sideText="SSC intends to award up to 4 contracts for up to $20k each for the first Prototype of an Automated Bidding Solution."
            />
            <SingleSTep
                title="WS-01"
                subtitle="Functional Prototype"
                sideText="The Contractor must provide a solution
                prototype that meets the WS-01 MVR listed in section 8.2. Based on the results, one or more
                solutions will be chosen to move to WS-02."
            />
            <SingleSTep
                title="WS-02 (Optional)"
                subtitle="Accesibility and official language"
                sideText="The Contractor must
                demonstrate that its solution meets the WS-02 MVR listed in section 8.3. Based on the results,
                one or more solutions will be chosen to move to WS-03."
            />
            <SingleSTep
                title="WS-03 (Optional)"
                subtitle="Implementation"
                sideText="The chosen solution(s) that has been customized to
                satisfy specific needs will then be further incrementally configured to add a “configuration by
                buyers” functionality and will be tested and used by buyers and suppliers for bid submission
                forms (BSF)."
                icon={false}
            />
        </VStack>
    );
};
