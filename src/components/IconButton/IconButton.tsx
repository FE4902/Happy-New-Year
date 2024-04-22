import { styled } from "../../stitches.config";

export const IconButton = styled("button", {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "$round",
    cursor: "pointer",

    "&:active": {
        transform: "scale(0.95)",
    },

    "&:focus-visible": {
        outlineOffset: "2px",
        outlineWidth: "4px",
        outlineStyle: "solid",
        transition: "0s",
    },

    "&:disabled": {
        opacity: 0.5,
        pointerEvents: "none",
        userSelect: "none",
    },

    svg: {
        width: "80%",
        height: "80%",
    },

    variants: {
        size: {
            small: {
                width: "$6",
                height: "$6",

                svg: {
                    width: "$4",
                    height: "$4",
                },
            },
            medium: {
                width: "$7",
                height: "$7",

                svg: {
                    width: "$5",
                    height: "$5",
                },
            },
            large: {
                width: "$8",
                height: "$8",

                svg: {
                    width: "$6",
                    height: "$6",
                },
            },
        },
        color: {
            brown: {
                color: "$light2",
                backgroundColor: "$brown2",
                borderColor: "$brown2",

                "&:hover": {
                    backgroundColor: "$brown3",
                },
                "&:focus-visible": {
                    outlineColor: "$brown3",
                },
            },
            dark: {
                color: "$light2",
                backgroundColor: "$dark2",
                borderColor: "$dark2",

                "&:hover": {
                    backgroundColor: "$dark3",
                },
                "&:focus-visible": {
                    outlineColor: "$dark3",
                },
            },
            light: {
                color: "$dark2",
                backgroundColor: "$light2",
                borderColor: "$dark2",

                "&:hover": {
                    backgroundColor: "$light3",
                },
                "&:focus-visible": {
                    outlineColor: "$light3",
                },
            },
        },
        outlined: {
            true: {
                backgroundColor: "transparent",
                borderWidth: "1px",
                borderStyle: "solid",
            },
        },
    },

    compoundVariants: [
        {
            color: "brown",
            outlined: true,
            css: {
                color: "$brown2",

                "&:hover": {
                    color: "$light2",
                },
            },
        },
        {
            color: "dark",
            outlined: true,
            css: {
                color: "$dark2",

                "&:hover": {
                    color: "$light2",
                },
            },
        },
        {
            color: "light",
            outlined: true,
            css: {
                color: "$dark2",

                "&:hover": {
                    color: "$dark2",
                },
            },
        },
    ],

    defaultVariants: {
        color: "brown",
        size: "medium",
    },
});
