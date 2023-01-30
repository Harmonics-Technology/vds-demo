import { Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
// import "./styles.css";

const date = +new Date("2023-02-02") / 1000;
const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6,
};

const renderTime = (dimension: any, time: any) => {
    return (
        <div className="time-wrapper">
            <Text fontSize="2rem" mb="0">
                {time}
            </Text>
            <div>{dimension}</div>
        </div>
    );
};

const getTimeSeconds = (time: any) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time: any) =>
    ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time: any) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time: any) => (time / daySeconds) | 0;

export default function Countdown({ hide }: { hide: boolean }) {
    const stratTime = Math.round(+new Date() / 1000); // use UNIX timestamp in seconds
    const endTime = Math.round(date); // use UNIX timestamp in seconds

    const remainingTime = endTime - stratTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;

    return (
        <HStack
            gap="3rem"
            textAlign="center"
            my="2rem"
            display={!hide ? "none" : "flex"}
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
