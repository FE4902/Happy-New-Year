import { styled } from "../../stitches.config";

export const Button = styled("button", {
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '$1',
    borderRadius: "$1",
    border: '0',
    cursor: 'pointer',
    transition: '0.4s',

    '&:active': {
        transform: 'scale(0.95)'
    },

    '&:focus-visible': {
        outlineOffset: '2px',
        outlineWidth: '4px',
        outlineStyle: 'solid',
        transition: '0s',
    },

    '&:disabled': {
        opacity: 0.5,
        pointerEvents: 'none',
        userSelect: 'none',
    },

    variants: {
        size: {
            small: {
                padding: "$1 $2",
                fontSize: "$1"
            },
            medium: {
                padding: "$2 $3",
                fontSize: "$2"
            },
            large: {
                padding: "$3 $4",
                fontSize: "$3"
            },
        },
        color: {
            brown: {
                color: "$light2",
                backgroundColor: "$brown2",
                borderColor: "$brown2",

                '&:hover': {
                    backgroundColor: "$brown3",
                },
                '&:focus-visible': {
                    outlineColor: '$brown3',
                },
            },
            dark: {
                color: "$light2",
                backgroundColor: "$dark2",
                borderColor: "$dark2",
                
                '&:hover': {
                    backgroundColor: "$dark3",
                },
                '&:focus-visible': {
                    outlineColor: '$dark3',
                },
            },
            light: {
                color: "$dark2",
                backgroundColor: "$light2",
                borderColor: "$light2",

                '&:hover': {
                    backgroundColor: "$light3",
                },
                '&:focus-visible': {
                    outlineColor: '$light3',
                },
            },
        },
        outlined: {
            true: {
                backgroundColor: 'transparent',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '$$baseColor'
            }
        },
    },

    compoundVariants: [
        {
            color: 'brown',
            outlined: true,
            css: {
                color: "$brown2",

                '&:hover': {
                    color: "$light2",
                },
            }
        },
        {
            color: 'dark',
            outlined: true,
            css: {
                color: "$dark2",

                '&:hover': {
                    color: "$light2",
                },
            }
        },
        {
            color: 'light',
            outlined: true,
            css: {
                color: "$dark2",

                '&:hover': {
                    color: "$dark2",
                },
            }
        }
    ],

    defaultVariants: {
        color: 'brown',
        size: 'medium'
    }
});
