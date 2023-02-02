import React from "react";
import ClayMultiStepNav from "@clayui/multi-step-nav";
import "@clayui/css/lib/css/atlas.css";
import { useRouter } from "next/router";
import useWindowSize from "./useWindowSize";

function Steps({ value }: { value: number }) {
    const router = useRouter();
    const steps = [
        {
            active: value === 0,
            complete: value > 0,
            subTitle: "SubOne",
            onClick: () => router.push("/scaleup003/solicitation-posting"),
            title: "Solicitation posting",
        },
        {
            active: value === 1,
            complete: value > 1,
            subTitle: "SubTwo",
            title: "Webinar",
            onClick: () => router.push("/scaleup003/webinar"),
        },
        {
            active: value === 2,
            complete: value > 2,
            subTitle: "SubThree",
            title: "Feedback period",
            onClick: () => router.push("/scaleup003/feedback-period"),
        },
        {
            active: value === 3,
            complete: value > 3,
            subTitle: "SubFour",
            title: "Solicitation final",
            onClick: () => router.push("/scaleup003/solicitation-final"),
        },
        {
            active: value === 4,
            complete: value > 4,
            subTitle: "SubFour",
            title: "E & I",
            onClick: () =>
                router.push("/scaleup003/evaluation-and-interactive-session"),
        },
    ];
    const size = useWindowSize();
    return (
        <>
            <ClayMultiStepNav>
                {steps.map(
                    ({ active, complete, onClick, subTitle, title }, i) => (
                        <ClayMultiStepNav.Item
                            active={active}
                            complete={complete}
                            expand={i + 1 !== steps.length}
                            key={i}
                        >
                            {size.width != null && size.width >= 590 && (
                                <ClayMultiStepNav.Title>
                                    {title}
                                </ClayMultiStepNav.Title>
                            )}
                            <ClayMultiStepNav.Divider />
                            <ClayMultiStepNav.Indicator
                                complete={complete}
                                label={1 + i}
                                onClick={onClick}
                                // spritemap={spritemap}
                                // subTitle={subTitle}
                            />
                        </ClayMultiStepNav.Item>
                    ),
                )}
            </ClayMultiStepNav>
        </>
    );
}

export default Steps;
