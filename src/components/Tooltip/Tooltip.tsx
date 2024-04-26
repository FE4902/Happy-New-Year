import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { styled } from "../../stitches.config";

const TooltipRoot = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

const StyledTooltipContent = styled(TooltipPrimitive.Content, {
    padding: "$1 $2",
    borderRadius: "$1",
    backgroundColor: "$light1",
    boxShadow: "0 3px 10px 0 rgba(0, 0, 0, 0.5)",
    fontSize: "$2",

    '&[data-side="top"]': {
        marginBottom: "$1",
    },

    '&[data-side="bottom"]': {
        marginTop: "$1",
    },
});

type TooltipPrimitiveProps = React.ComponentProps<typeof TooltipRoot>;
type TooltipPrimitiveContentProps = React.ComponentProps<
    typeof StyledTooltipContent
>;
type TooltipProps = TooltipPrimitiveProps &
    TooltipPrimitiveContentProps & {
        children: React.ReactElement;
        content: React.ReactNode;
    };

export const Tooltip = (props: TooltipProps) => {
    const { children, content, ...rest } = props;

    return (
        <TooltipRoot {...rest}>
            <TooltipTrigger asChild>{children}</TooltipTrigger>
            <TooltipPrimitive.Portal>
                <StyledTooltipContent>{content}</StyledTooltipContent>
            </TooltipPrimitive.Portal>
        </TooltipRoot>
    );
};

export default Tooltip;
