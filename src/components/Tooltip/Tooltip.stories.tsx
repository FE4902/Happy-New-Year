import type { Meta, StoryObj } from "@storybook/react";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Tooltip } from "./Tooltip";
import { Button } from "../Button/Button";

const meta = {
    title: "Components/Tooltip",
    component: Tooltip,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        children: {
            description: "툴팁의 트리거가 되는 컴포넌트입니다.",
        },
        content: {
            description: "툴팁에 표시할 내용을 결정하는 옵션입니다.",
        },
    },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    parameters: {
        docs: {
            description: {
                story: "기본 툴팁입니다.",
            },
        },
    },
    render: () => (
        <TooltipProvider>
            <Tooltip content="Hello, Tooltip!">
                <Button>Tooltip Trigger</Button>
            </Tooltip>
        </TooltipProvider>
    ),
};

export const Children: Story = {
    parameters: {
        docs: {
            description: {
                story: "툴팁의 트리거가 되는 컴포넌트입니다.",
            },
        },
    },
    render: (args) => (
        <TooltipProvider>
            <Tooltip content="Hello, Tooltip!">{args.children}</Tooltip>
        </TooltipProvider>
    ),
    args: {
        children: <span>Children</span>,
    },
};

export const Content: Story = {
    parameters: {
        docs: {
            description: {
                story: "툴팁에 표시할 내용을 결정하는 옵션입니다.",
            },
        },
    },
    render: (args) => (
        <TooltipProvider>
            <Tooltip content={args.content}>
                <Button>Tooltip Trigger</Button>
            </Tooltip>
        </TooltipProvider>
    ),
    args: {
        content: "Content",
    },
};
