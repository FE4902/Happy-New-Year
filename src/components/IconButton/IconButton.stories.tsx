import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";

const icon = (
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
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
        />
    </svg>
);

const meta: Meta<typeof IconButton> = {
    title: "Components/IconButton",
    component: IconButton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        children: {
            control: {
                type: "svg",
            },
            description: "아이콘을 결정하는 옵션입니다.",
        },
        size: {
            control: {
                type: "inline-radio",
            },
            description: "버튼의 크기를 결정하는 옵션입니다.",
            table: {
                defaultValue: { summary: "medium" },
            },
            options: ["small", "medium", "large"],
        },
        color: {
            control: {
                type: "inline-radio",
            },
            description: "버튼의 색상을 결정하는 옵션입니다.",
            table: {
                defaultValue: { summary: "brown" },
            },
            options: ["dark", "brown", "light"],
        },
        outlined: {
            description: "버튼을 아웃라인으로 표시하는 옵션입니다.",
            table: {
                defaultValue: { summary: "false" },
            },
        },
        disabled: {
            description: "버튼을 비활성화하는 옵션입니다.",
            table: {
                defaultValue: { summary: "false" },
            },
        },
    },
    args: {
        children: icon,
        size: "medium",
        color: "brown",
        outlined: false,
        disabled: false,
    },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
    parameters: {
        docs: {
            description: {
                story: "기본 버튼입니다. 색상은 `brown` 크기는 `medium` 입니다.",
            },
        },
    },
};

export const Size: Story = {
    parameters: {
        docs: {
            description: {
                story: "사이즈를 결정하는 옵션입니다. 기본 크기는 `medium` 입니다.",
            },
        },
    },
    render: () => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <IconButton size="small" children={icon} />
            <IconButton size="medium" children={icon} />
            <IconButton size="large" children={icon} />
        </div>
    ),
};

export const Color: Story = {
    parameters: {
        docs: {
            description: {
                story: "색상을 결정하는 옵션입니다. 기본 색상은 `brown` 입니다.",
            },
        },
    },
    render: () => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <IconButton color="dark" children={icon} />
            <IconButton color="brown" children={icon} />
            <IconButton color="light" children={icon} />
        </div>
    ),
};

export const Outlined: Story = {
    parameters: {
        docs: {
            description: {
                story: "버튼을 아웃라인으로 표시하는 옵션입니다.",
            },
        },
    },
    render: () => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <IconButton color="dark" outlined children={icon} />
            <IconButton color="brown" outlined children={icon} />
            <IconButton color="light" outlined children={icon} />
        </div>
    ),
};

export const Disabled: Story = {
    parameters: {
        docs: {
            description: {
                story: "버튼을 비활성화하는 옵션입니다.",
            },
        },
    },
    render: () => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <IconButton color="dark" disabled children={icon} />
            <IconButton color="brown" disabled children={icon} />
            <IconButton color="light" disabled children={icon} />
        </div>
    ),
};
