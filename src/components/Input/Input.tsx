import { forwardRef } from "react";
import { styled, VariantProps } from "../../stitches.config";
import { Slot } from "@radix-ui/react-slot";

const Wrap = styled("div", {
    position: "relative",
    display: "flex",
});

const StyledInput = styled("input", {
    position: "relative",
    width: "100%",
    border: "1px solid",
    borderRadius: "$1",

    "&[disabled]": {
        opacity: 0.5,
        cursor: "default",
        pointerEvents: "none",
    },

    "&:focus": {
        outlineOffset: "2px",
        outlineWidth: "4px",
        outlineStyle: "solid",
        transition: "0s",
    },

    variants: {
        color: {
            brown: {
                borderColor: "$brown2",

                "&:focus-visible": {
                    outlineColor: "$brown3",
                },
            },
            dark: {
                borderColor: "$dark2",

                "&:focus-visible": {
                    outlineColor: "$dark3",
                },
            },
            light: {
                borderColor: "$dark2",

                "&:focus-visible": {
                    outlineColor: "$light3",
                },
            },
        },
        size: {
            small: {
                height: "$6",
                padding: "0 $1",
                fontSize: "$1",

                "* + &": {
                    paddingLeft: "$5",
                },

                "&:has( ~ *)": {
                    paddingRight: "$5",
                },
            },
            medium: {
                height: "$7",
                padding: "0 $2",
                fontSize: "$2",

                "* + &": {
                    paddingLeft: "$6",
                },

                "&:has( ~ *)": {
                    paddingRight: "$6",
                },
            },
            large: {
                height: "$8",
                padding: "0 $3",
                fontSize: "$3",

                "* + &": {
                    paddingLeft: "$7",
                },

                "&:has( ~ *)": {
                    paddingRight: "$7",
                },
            },
        },
    },
    defaultVariants: {
        color: "brown",
        size: "medium",
    },
});

const StyledSlot = styled(Slot, {
    position: "absolute",
    zIndex: 1,
    transform: "translateY(-50%)",
    top: "50%",

    variants: {
        size: {
            small: {
                width: "$4",
                height: "$4",
            },
            medium: {
                width: "$5",
                height: "$5",
            },
            large: {
                width: "$6",
                height: "$6",
            },
        },
    },
    defaultVariants: {
        size: "medium",
    },
});

const LeftSlot = styled(StyledSlot, {
    left: "$1",
});

const RightSlot = styled(StyledSlot, {
    right: "$1",
});

type InputVariants = VariantProps<typeof StyledInput>;
type InputProps = InputVariants & React.ComponentProps<typeof StyledInput>;
interface ExtendedInputProps extends InputProps {
    leftSlot?: React.ReactNode;
    rightSlot?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, ExtendedInputProps>(
    (props, ref) => {
        const { width, leftSlot, rightSlot, ...rest } = props;

        return (
            <Wrap css={{ width: width }}>
                <LeftSlot size={props.size}>{leftSlot}</LeftSlot>
                <StyledInput {...rest} ref={ref} />
                <RightSlot size={props.size}>{rightSlot}</RightSlot>
            </Wrap>
        );
    }
);

export default Input;
