import * as SwitchPrimitive from "@radix-ui/react-switch";
import { forwardRef } from "react";
import { styled, VariantProps } from "../../stitches.config";

const SwitchRoot = styled(SwitchPrimitive.Root, {
    position: "relative",
    borderRadius: "$pill",
    border: "1px solid $colors$dark2",
    transition:
        "0.4s, outline-offset 0s, outline-width 0s, outline-style 0s, outline-color 0s",
    cursor: "pointer",

    "&:focus-visible": {
        outlineOffset: "2px",
        outlineWidth: "4px",
        outlineStyle: "solid",
    },

    "&[data-disabled]": {
        opacity: 0.5,
        cursor: "default",
        pointerEvents: "none",
    },

    variants: {
        size: {
            small: {
                width: "$7",
                height: "$4",
            },
            medium: {
                width: "$8",
                height: "$5",
            },
            large: {
                width: "$9",
                height: "$6",
            },
        },
        color: {
            brown: {
                backgroundColor: "$brown2",

                "&:focus-visible": {
                    outlineColor: "$brown3",
                },
                "&:hover, &[data-state=checked]": {
                    backgroundColor: "$brown3",
                },
            },
            dark: {
                backgroundColor: "$dark2",

                "&:focus-visible": {
                    outlineColor: "$dark3",
                },
                "&:hover, &[data-state=checked]": {
                    backgroundColor: "$dark3",
                },
            },
            light: {
                backgroundColor: "$light2",

                "&:focus-visible": {
                    outlineColor: "$light3",
                },
                "&:hover, &[data-state=checked]": {
                    backgroundColor: "$light3",
                },
                span: {
                    border: "1px solid $colors$dark2",
                },
            },
        },
    },
    defaultVariants: {
        size: "medium",
        color: "brown",
    },
});

const SwitchThumb = styled(SwitchPrimitive.Thumb, {
    position: "absolute",
    left: "2px",
    top: "50%",
    width: "calc(50% - 2px)",
    display: "block",
    backgroundColor: "$light1",
    aspectRatio: "1",
    borderRadius: "$round",
    transform: "translate(0, -50%)",
    transition: "0.1s",

    "&[data-state=checked]": {
        transform: "translate(100%, -50%)",
    },
});

type SwitchVariants = VariantProps<typeof SwitchRoot>;
type SwitchRootPrimitiveProps = React.ComponentProps<
    typeof SwitchPrimitive.Root
>;
type SwitchProps = SwitchRootPrimitiveProps & SwitchVariants;

export const Switch = forwardRef<
    React.ElementRef<typeof SwitchRoot>,
    SwitchProps
>((props, ref) => {
    return (
        <SwitchRoot {...props} ref={ref}>
            <SwitchThumb />
        </SwitchRoot>
    );
});

export default Switch;
