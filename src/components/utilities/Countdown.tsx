import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { isMobile } from "react-device-detect";
import useWindowSize from "./useWindowSize";
// import "./styles.css";

const renderTime = (dimension: any, time: any) => {
    return (
        <Box className="time-wrapper">
            <Text mb="0" fontSize={["1rem", "2rem"]}>
                {time}
            </Text>
            <div>{dimension}</div>
        </Box>
    );
};

export default function Countdown({
    hide,
    time,
}: {
    hide: boolean;
    time: string;
}) {
    const date = +new Date(time) / 1000;
    const minuteSeconds = 60;
    const hourSeconds = 3600;
    const daySeconds = 86400;

    const getTimeSeconds = (time: any) => (minuteSeconds - time) | 0;
    const getTimeMinutes = (time: any) =>
        ((time % hourSeconds) / minuteSeconds) | 0;
    const getTimeHours = (time: any) => ((time % daySeconds) / hourSeconds) | 0;
    const getTimeDays = (time: any) => (time / daySeconds) | 0;

    const stratTime = Math.round(+new Date() / 1000); // use UNIX timestamp in seconds
    const endTime = Math.round(date); // use UNIX timestamp in seconds

    const remainingTime = endTime - stratTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;
    const size = useWindowSize();

    const timerProps = {
        isPlaying: true,
        size: size.width != null && size.width <= 590 ? 0 : 120,
        strokeWidth: 6,
    };
    console.log({ isMobile, time: timerProps.size });

    return (
        <HStack
            gap={["1rem", "3rem"]}
            textAlign="center"
            justify={["space-evenly", "flex-start"]}
            my="2rem"
            display={!hide ? "none" : "flex"}
            flexWrap="wrap"
        >
            <CountdownCircleTimer
                {...timerProps}
                colors="#7E2E84"
                duration={daysDuration}
                initialRemainingTime={remainingTime}
            >
                {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                        {renderTime(
                            "days",
                            getTimeDays(daysDuration - elapsedTime),
                        )}
                    </span>
                )}
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps}
                colors="#D14081"
                duration={daySeconds}
                initialRemainingTime={remainingTime % daySeconds}
                onComplete={(totalElapsedTime) => ({
                    shouldRepeat:
                        remainingTime - totalElapsedTime > hourSeconds,
                })}
            >
                {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                        {renderTime(
                            "hours",
                            getTimeHours(daySeconds - elapsedTime),
                        )}
                    </span>
                )}
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps}
                colors="#EF798A"
                duration={hourSeconds}
                initialRemainingTime={remainingTime % hourSeconds}
                onComplete={(totalElapsedTime) => ({
                    shouldRepeat:
                        remainingTime - totalElapsedTime > minuteSeconds,
                })}
            >
                {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                        {renderTime(
                            "minutes",
                            getTimeMinutes(hourSeconds - elapsedTime),
                        )}
                    </span>
                )}
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps}
                colors="#218380"
                duration={minuteSeconds}
                initialRemainingTime={remainingTime % minuteSeconds}
                onComplete={(totalElapsedTime) => ({
                    shouldRepeat: remainingTime - totalElapsedTime > 0,
                })}
            >
                {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                        {renderTime("seconds", getTimeSeconds(elapsedTime))}
                    </span>
                )}
            </CountdownCircleTimer>
        </HStack>
    );
}
