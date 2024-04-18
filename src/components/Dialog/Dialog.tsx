import * as DialogPrimitive from "@radix-ui/react-dialog";
import { styled } from "../../stitches.config";
import { forwardRef } from "react";
import { IconButton } from "../IconButton/IconButton";

const StyledOverlay = styled(DialogPrimitive.Overlay, {
    position: "fixed",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(4px)",
});

const StyledContent = styled(DialogPrimitive.Content, {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: "300px",
    padding: "$3 $4",
    backgroundColor: "$light1",
    borderRadius: "$2",
    boxShadow: "0 3px 10px 0 rgba(0, 0, 0, 0.5)",

    "&:focus": {
        outline: "none",
    },

    h2: {
        fontSize: "$4",
        paddingBottom: "$2",
        lineHeight: 1.2,
    },
});

const StyledClose = styled(DialogPrimitive.Close, {
    position: "absolute",
    top: "$3",
    right: "$3",
});

type DialogContentProps = React.ComponentProps<typeof DialogPrimitive.Content>;

const DialogContent = forwardRef<
    React.ElementRef<typeof StyledContent>,
    DialogContentProps
>(({ children, ...props }, ref) => {
    return (
        <DialogPrimitive.Portal>
            <StyledOverlay />
            <StyledContent {...props} ref={ref}>
                {children}
                <StyledClose asChild>
                    <IconButton size="small">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </StyledClose>
            </StyledContent>
        </DialogPrimitive.Portal>
    );
});

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogClose = DialogPrimitive.Close;
const DialogTitle = DialogPrimitive.Title;
const DialogDescription = DialogPrimitive.Description;

export {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogClose,
    DialogDescription,
};
