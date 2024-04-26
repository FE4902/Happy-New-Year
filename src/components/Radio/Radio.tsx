import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { styled, VariantProps } from "../../stitches.config";
import { forwardRef } from "react";

export const RadioGroup = styled(RadioGroupPrimitive.Root, {
    display: "flex",
    gap: "$1",
});

const Label = styled("label", {
    display: "flex",
    alignItems: "center",
    gap: "$1",
    lineHeight: "normal",
    cursor: "pointer",

    "&:has([disabled])": {
        opacity: 0.5,
        cursor: "default",
        pointerEvents: "none",
    },
});

const StyledRadioGroupItem = styled(RadioGroupPrimitive.Item, {
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "$round",
    transition:
        "0.4s, outline-offset 0s, outline-width 0s, outline-style 0s, outline-color 0s",

    "&:active": {
        transform: "scale(0.95)",
    },

    "&:focus-visible": {
        outlineOffset: "2px",
        outlineWidth: "4px",
        outlineStyle: "solid",
    },

    variants: {
        size: {
            small: {
                width: "$3",
                height: "$3",
            },
            medium: {
                width: "$4",
                height: "$4",
            },
            large: {
                width: "$5",
                height: "$5",
            },
        },
        color: {
            brown: {
                borderColor: "$brown2",

                "&:hover": {
                    backgroundColor: "$brown3",
                },
                "&:focus-visible": {
                    outlineColor: "$brown3",
                },
                "&[data-state=checked]": {
                    backgroundColor: "$brown2",
                },
                path: {
                    stroke: "$light2",
                },
            },
            dark: {
                borderColor: "$dark2",

                "&:hover": {
                    backgroundColor: "$dark3",
                },
                "&:focus-visible": {
                    outlineColor: "$dark3",
                },
                "&[data-state=checked]": {
                    backgroundColor: "$dark2",
                },
                path: {
                    stroke: "$light2",
                },
            },
            light: {
                borderColor: "$dark2",

                "&:hover": {
                    backgroundColor: "$light3",
                },
                "&:focus-visible": {
                    outlineColor: "$light3",
                },
                "&[data-state=checked]": {
                    backgroundColor: "$light2",
                },
                path: {
                    stroke: "$dark2",
                },
            },
        },
    },
    defaultVariants: {
        size: "medium",
        color: "brown",
    },
});

const StyledRadioGroupIndicator = styled(RadioGroupPrimitive.Indicator, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",

    "&::after": {
        content: '""',
        display: "block",
        width: "50%",
        height: "50%",
        borderRadius: "$round",
    },

    variants: {
        color: {
            brown: {
                "&::after": {
                    backgroundColor: "$light2",
                },
            },
            dark: {
                "&::after": {
                    backgroundColor: "$light2",
                },
            },
            light: {
                "&::after": {
                    backgroundColor: "$dark2",
                },
            },
        },
    },

    defaultVariants: {
        color: "brown",
    },
});

const Span = styled("span", {
    variants: {
        size: {
            small: {
                fontSize: "$1",
            },
            medium: {
                fontSize: "$2",
            },
            large: {
                fontSize: "$3",
            },
        },
        color: {
            brown: {
                color: "$brown2",
            },
            dark: {
                color: "$dark2",
            },
            light: {
                color: "$dark2",
            },
        },
    },
    defaultVariants: {
        size: "medium",
        color: "brown",
    },
});

type RadioVariants = VariantProps<typeof StyledRadioGroupItem>;
type RadioItemPrimitiveProps = React.ComponentProps<
    typeof StyledRadioGroupItem
>;
type RadioProps = RadioItemPrimitiveProps & RadioVariants;

export const Radio = forwardRef<
    React.ElementRef<typeof StyledRadioGroupItem>,
    RadioProps
>((props, ref) => {
    return (
        <Label>
            <StyledRadioGroupItem {...props} ref={ref}>
                <StyledRadioGroupIndicator color={props.color} />
            </StyledRadioGroupItem>
            <Span size={props.size} color={props.color}>
                {props.children ?? props.value}
            </Span>
        </Label>
    );
});
