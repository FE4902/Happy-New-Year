import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { VariantProps, styled } from "../../stitches.config";
import { forwardRef } from "react";
import { Menu, MenuItem, MenuLabel, MenuSeparator } from "../Menu/Menu";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const StyledDropdownMenuContent = styled(DropdownMenuPrimitive.Content, Menu);

type DropdownMenuVariants = VariantProps<typeof StyledDropdownMenuContent>;
type DropdownMenuContentProps = DropdownMenuVariants &
    React.ComponentProps<typeof StyledDropdownMenuContent>;

const DropdownMenuContent = forwardRef<
    React.ElementRef<typeof StyledDropdownMenuContent>,
    DropdownMenuContentProps
>((props, ref) => (
    <DropdownMenuPrimitive.Portal>
        <StyledDropdownMenuContent
            {...props}
            ref={ref}
        ></StyledDropdownMenuContent>
    </DropdownMenuPrimitive.Portal>
));

const DropdownMenuItem = styled(DropdownMenuPrimitive.Item, MenuItem);

const DropdownMenuGroup = styled(DropdownMenuPrimitive.Group, {});

const DropdownMenuLabel = styled(DropdownMenuPrimitive.Label, MenuLabel);

const DropdownMenuSeparator = styled(
    DropdownMenuPrimitive.Separator,
    MenuSeparator
);

export {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuSeparator,
};
