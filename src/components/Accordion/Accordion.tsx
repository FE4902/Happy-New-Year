import { forwardRef } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { styled, VariantProps } from "../../stitches.config";
import { keyframes } from "@stitches/react";

const StyledAccordion = styled(AccordionPrimitive.Root, {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "$2",

    variants: {
        color: {
            brown: {
                "[data-radix-collection-item]": {
                    color: "$light2",
                    backgroundColor: "$brown2",

                    "&:hover, &[data-state=open]": {
                        backgroundColor: "$brown3",
                    },
                    "&:focus-visible": {
                        outlineColor: "$brown3",
                    },
                },
            },
            dark: {
                "[data-radix-collection-item]": {
                    color: "$light2",
                    backgroundColor: "$dark2",

                    "&:hover, &[data-state=open]": {
                        backgroundColor: "$dark3",
                    },
                    "&:focus-visible": {
                        outlineColor: "$dark3",
                    },
                },
            },
            light: {
                "[data-radix-collection-item]": {
                    color: "$dark2",
                    backgroundColor: "$light2",

                    "&:hover, &[data-state=open]": {
                        backgroundColor: "$light3",
                    },
                    "&:focus-visible": {
                        outlineColor: "$light3",
                    },
                },
            },
        },
    },
    defaultVariants: {
        color: "brown",
    },
});

type AccordionVariants = VariantProps<typeof StyledAccordion>;
type AccordionPrimitiveProps = React.ComponentProps<
    typeof AccordionPrimitive.Root
>;
type AccordionProps = AccordionPrimitiveProps & AccordionVariants;

export const Accordion = forwardRef<
    React.ElementRef<typeof StyledAccordion>,
    AccordionProps
>(({ children, ...props }, ref) => {
    return (
        <StyledAccordion {...props} ref={ref}>
            {children}
        </StyledAccordion>
    );
});

const StyledHeader = styled(AccordionPrimitive.Header, {});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "$2 $3",
    borderRadius: "$1",
    transition: "0.4s",

    "&:focus-visible": {
        outlineOffset: "2px",
        outlineWidth: "4px",
        outlineStyle: "solid",
        transition: "0s",
    },

    svg: {
        width: "$5",
        height: "$5",
        transition: "0.4s",

        "[data-state=open] &": {
            transform: "rotate(180deg)",
        },
    },
});

type AccordionTriggerProps = React.ComponentProps<
    typeof AccordionPrimitive.Trigger
>;

export const AccordionTrigger = forwardRef<
    React.ElementRef<typeof StyledTrigger>,
    AccordionTriggerProps
>(({ children, ...props }, ref) => {
    return (
        <StyledHeader>
            <StyledTrigger {...props} ref={ref}>
                {children}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </StyledTrigger>
        </StyledHeader>
    );
});

const StyledItem = styled(AccordionPrimitive.Item, {});

const slideDown = keyframes({
    from: { height: 0 },
    to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
    from: { height: "var(--radix-accordion-content-height)" },
    to: { height: 0 },
});

const StyledContent = styled(AccordionPrimitive.Content, {
    padding: "$2 $3",
    overflow: "hidden",

    '&[data-state="open"]': {
        animation: `${slideDown} 0.3s`,
    },

    '&[data-state="closed"]': {
        animation: `${slideUp} 0.3s`,
    },
});

export const AccordionItem = StyledItem;
export const AccordionContent = StyledContent;
