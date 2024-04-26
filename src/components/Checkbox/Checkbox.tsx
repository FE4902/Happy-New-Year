import React, { forwardRef } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { styled, VariantProps } from "../../stitches.config";

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

const StyledCheckboxRoot = styled(CheckboxPrimitive.Root, {
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "$1",
    transition:
        "0.4s, outline-offset 0s, outline-width 0s, outline-style 0s, outline-color 0s",
    cursor: "pointer",

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

const StyledCheckboxIndicator = styled(CheckboxPrimitive.Indicator, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",

    svg: {
        width: "80%",
        height: "80%",
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

type CheckboxVariants = VariantProps<typeof StyledCheckboxRoot>;
type CheckboxRootPrimitiveProps = React.ComponentProps<
    typeof StyledCheckboxRoot
>;
type CheckboxProps = CheckboxRootPrimitiveProps & CheckboxVariants;

export const Checkbox = forwardRef<
    React.ElementRef<typeof StyledCheckboxRoot>,
    CheckboxProps
>((props, ref) => {
    return (
        <Label>
            <StyledCheckboxRoot {...props} ref={ref}>
                <StyledCheckboxIndicator>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                        />
                    </svg>
                </StyledCheckboxIndicator>
            </StyledCheckboxRoot>
            <Span size={props.size} color={props.color}>
                {props.children}
            </Span>
        </Label>
    );
});

export default Checkbox;
