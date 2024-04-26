import * as SelectPrimitive from "@radix-ui/react-select";
import { VariantProps, styled } from "../../stitches.config";
import { forwardRef } from "react";
import { Menu, MenuItem, MenuLabel, MenuSeparator } from "../Menu/Menu";
import { Button } from "../Button/Button";

const Select = SelectPrimitive.Root;

const StyledSelectTrigger = styled(SelectPrimitive.Trigger, Button);

const StyledSelectIcon = styled(SelectPrimitive.Icon, {
    transition: "0.4s",

    '[aria-expanded="true"] &': {
        transform: "rotate(180deg)",
    },

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

type SelectVariants = VariantProps<typeof StyledSelectTrigger>;
type SelectTriggerProps = SelectVariants &
    React.ComponentProps<typeof StyledSelectTrigger>;
interface ExtendedSelectTriggerProps extends SelectTriggerProps {
    placeholder: string;
}

const SelectTrigger = forwardRef<
    React.ElementRef<typeof StyledSelectTrigger>,
    ExtendedSelectTriggerProps
>((props, ref) => {
    const { placeholder, ...rest } = props;

    return (
        <StyledSelectTrigger {...rest} ref={ref}>
            <SelectPrimitive.Value placeholder={placeholder} />
            <StyledSelectIcon size={props.size}>
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7 10l5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </StyledSelectIcon>
        </StyledSelectTrigger>
    );
});

const StyledSelectContent = styled(SelectPrimitive.Content, Menu);

type SelectContentProps = React.ComponentProps<typeof StyledSelectContent>;

const SelectContent = forwardRef<
    React.ElementRef<typeof StyledSelectContent>,
    SelectContentProps
>((props, ref) => {
    return (
        <SelectPrimitive.Portal>
            <StyledSelectContent
                position="popper"
                {...props}
                ref={ref}
            ></StyledSelectContent>
        </SelectPrimitive.Portal>
    );
});

const StyledSelectItem = styled(SelectPrimitive.Item, MenuItem);

type SelectItemProps = React.ComponentProps<typeof StyledSelectItem>;

const SelectItem = forwardRef<
    React.ElementRef<typeof StyledSelectItem>,
    SelectItemProps
>((props, ref) => {
    const { children, ...rest } = props;

    return (
        <StyledSelectItem {...rest} ref={ref}>
            <SelectItemText>{children}</SelectItemText>
            <SelectItemIndicator />
        </StyledSelectItem>
    );
});

const SelectItemText = styled(SelectPrimitive.ItemText, {});

const SelectItemIndicator = styled(SelectPrimitive.ItemIndicator, {});

const SelectGroup = styled(SelectPrimitive.Group, {});

const SelectLabel = styled(SelectPrimitive.Label, MenuLabel);

const SelectSeparator = styled(SelectPrimitive.Separator, MenuSeparator);

export {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectGroup,
    SelectLabel,
    SelectSeparator,
};
