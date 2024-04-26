export const Menu = {
    backgroundColor: "$light1",
    borderRadius: "$1",
    boxShadow: "0 3px 10px 0 rgba(0, 0, 0, 0.5)",
    fontSize: "$2",
    overflow: "hidden",

    '&[data-side="top"]': {
        marginBottom: "$1",
    },

    '&[data-side="bottom"]': {
        marginTop: "$1",
    },

    variants: {
        color: {
            brown: {
                '[data-state="checked"], [data-radix-collection-item]:hover': {
                    color: "$light2",
                    backgroundColor: "$brown3",
                },
                '[data-state="checked"]': {
                    backgroundColor: "$brown2",
                },
            },
            light: {
                '[data-state="checked"], [data-radix-collection-item]:hover': {
                    color: "$dark2",
                    backgroundColor: "$light3",
                },
                '[data-state="checked"]': {
                    backgroundColor: "$light2",
                },
            },
            dark: {
                '[data-state="checked"], [data-radix-collection-item]:hover': {
                    color: "$light2",
                    backgroundColor: "$dark3",
                },
                '[data-state="checked"]': {
                    backgroundColor: "$dark2",
                },
            },
        },
    },
    defaultVariants: {
        color: "brown",
    },
};

export const MenuItem = {
    padding: "$1 $2",
    outline: "none",
    cursor: "pointer",
};

export const MenuLabel = {
    padding: "$1",
    fontWeight: "$3",
};

export const MenuSeparator = {
    margin: "$1",
    backgroundColor: "$brown2",
    height: "1px",
};
