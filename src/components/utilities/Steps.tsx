import React from "react";
import ClayMultiStepNav from "@clayui/multi-step-nav";
import "@clayui/css/lib/css/atlas.css";

function Steps({ value }: { value: number }) {
    const steps = [
        {
            active: value === 0,
            complete: value > 0,
            subTitle: "SubOne",
            title: "Solicitation posting",
        },
        {
            active: value === 1,
            complete: value > 1,
            subTitle: "SubTwo",
            title: "Webinar",
        },
        {
            active: value === 2,
            complete: value > 2,
            subTitle: "SubThree",
            title: "Feedback period",
        },
        {
            active: value === 3,
            complete: value > 3,
            subTitle: "SubFour",
            title: "Solicitation final",
        },
        {
            active: value === 4,
            complete: value > 4,
            subTitle: "SubFour",
            title: "E & I",
        },
    ];
    return (
        <ClayMultiStepNav>
            {steps.map(({ active, complete, subTitle, title }, i) => (
                <ClayMultiStepNav.Item
                    active={active}
                    complete={complete}
                    expand={i + 1 !== steps.length}
                    key={i}
                >
                    <ClayMultiStepNav.Title>{title}</ClayMultiStepNav.Title>
                    <ClayMultiStepNav.Divider />
                    <ClayMultiStepNav.Indicator
                        complete={complete}
                        label={1 + i}
                        // onClick={onClick}
                        // spritemap={spritemap}
                        // subTitle={subTitle}
                    />
                </ClayMultiStepNav.Item>
            ))}
        </ClayMultiStepNav>
    );
}

export default Steps;
