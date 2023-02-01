import React from "react";
import {
    Spacer,
    Flex,
    Heading,
    Grid,
    Image,
    Box,
    Text,
    HStack,
    Icon,
    Button,
} from "@chakra-ui/react";
import { Cards } from "@components/utilities/Cards";
import { MdTimerOff } from "react-icons/md";
import { GoFileSubmodule } from "react-icons/go";
import { FaMoneyBillAlt } from "react-icons/fa";
import Link from "next/link";

const Home: React.FC = () => {
    return (
        <Flex direction="column" minH="100vh">
            <Box w={["full", "80%"]} boxShadow="md" mx="auto">
                <Box
                    w="full"
                    h="10rem"
                    overflow="hidden"
                    borderBottom="10px solid red"
                >
                    <Image src="/cdb.jpg" w="full" h="full" objectFit="cover" />
                </Box>
                <Box w="full" p="1rem">
                    <Text fontSize="1.3rem" fontWeight="bold">
                        Automated Bidding Solution (Bid on the phone)
                    </Text>
                    <HStack>
                        <Icon as={MdTimerOff} />
                        <Text>
                            Closing Date and Time: Feburary 23, 2022 at 14:00
                            Eastern Daylight Time UTC-4
                        </Text>
                    </HStack>
                    <HStack my=".5rem">
                        <Icon as={GoFileSubmodule} />
                        <Text>Solicitation number: SCALEUP003</Text>
                    </HStack>
                    <HStack>
                        <Icon as={FaMoneyBillAlt} />
                        <Text>Estimated result contracting value: 20,000</Text>
                    </HStack>
                    <Flex justify="flex-end" mt="2rem">
                        <Link passHref href="/dashboard">
                            <Button
                                bgColor="brand.100"
                                color="white"
                                borderRadius="0"
                                fontSize=".8rem"
                                px="2rem"
                            >
                                Proceed
                            </Button>
                        </Link>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    );
};

export default Home;
