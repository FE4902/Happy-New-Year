import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { styled } from "../../stitches.config";

type TooltipPrimitiveProps = React.ComponentProps<typeof TooltipPrimitive.Root>;
type TooltipPrimitiveContentProps = React.ComponentProps<
    typeof TooltipPrimitive.Content
>;
type TooltipProps = TooltipPrimitiveProps &
    TooltipPrimitiveContentProps & {
        children: React.ReactElement;
        content: React.ReactNode;
    };

const TooltipRoot = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = styled(TooltipPrimitive.Content, {
    padding: "$1 $2",
    borderRadius: "$1",
    backgroundColor: "$light1",
    boxShadow: "0 3px 10px 0 rgba(0, 0, 0, 0.5)",
    fontSize: "$2",
});

export const Tooltip = (props: TooltipProps) => {
    const { children, content, ...rootProps } = props;

    return (
        <TooltipRoot {...rootProps}>
            <TooltipTrigger asChild>{children}</TooltipTrigger>
            <TooltipPrimitive.Portal>
                <TooltipContent>{content}</TooltipContent>
            </TooltipPrimitive.Portal>
        </TooltipRoot>
    );
};

export default Tooltip;
