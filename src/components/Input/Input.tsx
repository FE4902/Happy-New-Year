import { forwardRef } from "react";
import { styled, VariantProps } from "../../stitches.config";

const Wrap = styled("div", {
    position: "relative",
    display: "flex",
});

const StyledInput = styled("input", {
    border: "1px solid",
    borderRadius: "$1",

    "&:has([disabled])": {
        opacity: 0.5,
        cursor: "default",
        pointerEvents: "none",
    },

    variants: {
        color: {
            brown: {
                borderColor: "$brown2",
            },
            dark: {
                borderColor: "$dark2",
            },
            light: {
                borderColor: "$light2",
            },
        },
        size: {
            small: {
                height: "$6",
                padding: "0 $1",
                fontSize: "$1",

                "*:has(+ &), & + *": {
                    backgroundColor: "red",
                },

                "* + &": {
                    backgroundColor: "red",
                },

                "&:has( ~ *)": {
                    backgroundColor: "red",
                },
            },
            medium: {
                height: "$7",
                padding: "0 $2",
                fontSize: "$2",

                "*:has(+ &), & + *": {
                    backgroundColor: "red",
                },

                "* + &": {
                    backgroundColor: "red",
                },

                "&:has( ~ *)": {
                    backgroundColor: "red",
                },
            },
            large: {
                height: "$8",
                padding: "0 $3",
                fontSize: "$3",

                "*:has(+ &), & + *": {
                    backgroundColor: "red",
                },

                "* + &": {
                    backgroundColor: "red",
                },

                "&:has( ~ *)": {
                    backgroundColor: "red",
                },
            },
        },
    },
    defaultVariants: {
        color: "brown",
        size: "medium",
    },
});

// React.InputHTMLAttributes<HTMLInputElement>
// type InputProps = InputVariants & React.InputHTMLAttributes<HTMLInputElement>;
type InputVariants = VariantProps<typeof StyledInput>;
type InputProps = InputVariants & React.ComponentProps<typeof StyledInput>;
interface ExtendedInputProps extends InputProps {
    leftSlot?: React.ReactNode;
    rightSlot?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, ExtendedInputProps>(
    (props, ref) => {
        return (
            <Wrap>
                {props.leftSlot}
                <StyledInput {...props} ref={ref} />
                {props.rightSlot}
            </Wrap>
        );
    }
);

export default Input;
