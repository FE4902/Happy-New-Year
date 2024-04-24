import type { Meta, StoryObj } from "@storybook/react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "./Dialog";
import { Button } from "../Button/Button";

const meta = {
    title: "Components/Dialog",
    component: Dialog,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        modal: {
            control: {
                type: "boolean",
            },
            table: {
                defaultValue: { summary: "true" },
            },
            description: "`overlay`를 가지는 모달 여부를 결정하는 옵션입니다.",
        },
    },
    args: {
        modal: true,
    },
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
    parameters: {
        docs: {
            description: {
                story: "기본 다이얼로그입니다.",
            },
        },
    },
    render: () => (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Dialog Trigger</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>
                    <span>Dialog Title</span>
                </DialogTitle>
                <DialogDescription>
                    <span>Dialog Description</span>
                </DialogDescription>
            </DialogContent>
        </Dialog>
    ),
};

export const Modal: Story = {
    parameters: {
        docs: {
            description: {
                story: "`overlay`를 가지는 모달 여부를 결정하는 옵션입니다.",
            },
        },
    },
    render: () => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Modal Trigger</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogTitle>
                        <span>Dialog Title</span>
                    </DialogTitle>
                    <DialogDescription>
                        <span>Dialog Description</span>
                    </DialogDescription>
                </DialogContent>
            </Dialog>
            <Dialog modal={false}>
                <DialogTrigger asChild>
                    <Button outlined>Non Modal Trigger</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogTitle>
                        <span>Dialog Title</span>
                    </DialogTitle>
                    <DialogDescription>
                        <span>Dialog Description</span>
                    </DialogDescription>
                </DialogContent>
            </Dialog>
        </div>
    ),
};
