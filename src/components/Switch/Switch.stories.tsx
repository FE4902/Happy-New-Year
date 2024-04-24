import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
    title: "Components/Switch",
    component: Switch,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: {
                type: "inline-radio",
            },
            description: "스위치의 크기를 결정하는 옵션입니다.",
            table: {
                defaultValue: { summary: "medium" },
            },
            options: ["small", "medium", "large"],
        },
        color: {
            control: {
                type: "inline-radio",
            },
            description: "스위치의 색상을 결정하는 옵션입니다.",
            table: {
                defaultValue: { summary: "brown" },
            },
            options: ["dark", "brown", "light"],
        },
        disabled: {
            description: "스위치를 비활성화하는 옵션입니다.",
            table: {
                defaultValue: { summary: "false" },
            },
        },
        defaultValue: {
            description: "기본으로 체크할 스위치를 결정하는 옵션입니다.",
            type: "string",
            control: {
                type: "string",
            },
        },
    },
    args: {
        size: "medium",
        color: "brown",
        disabled: false,
    },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
    parameters: {
        docs: {
            description: {
                story: "기본 스위치입니다. 색상은 `brown` 크기는 `medium` 입니다.",
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
            <Switch size="small" />
            <Switch size="medium" />
            <Switch size="large" />
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
            <Switch color="dark" />
            <Switch color="brown" />
            <Switch color="light" />
        </div>
    ),
};

export const Disabled: Story = {
    parameters: {
        docs: {
            description: {
                story: "스위치를 비활성화하는 옵션입니다.",
            },
        },
    },
    render: () => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Switch color="dark" disabled />
            <Switch color="brown" disabled />
            <Switch color="light" disabled />
        </div>
    ),
};

export const DefaultChecked: Story = {
    parameters: {
        docs: {
            description: {
                story: "스위치를 기본으로 체크하는 옵션입니다.",
            },
        },
    },
    render: () => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Switch defaultChecked />
        </div>
    ),
};
