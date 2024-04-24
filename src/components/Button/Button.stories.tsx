import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        children: {
            description: "버튼에 표시할 텍스트를 결정하는 옵션입니다.",
            control: {
                type: "text",
            },
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
        children: "Button",
        size: "medium",
        color: "brown",
        outlined: false,
        disabled: false,
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

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
            <Button size="small" children="small" />
            <Button size="medium" children="medium" />
            <Button size="large" children="large" />
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
            <Button color="dark" children="dark" />
            <Button color="brown" children="brown" />
            <Button color="light" children="light" />
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
            <Button color="dark" outlined children="dark" />
            <Button color="brown" outlined children="brown" />
            <Button color="light" outlined children="light" />
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
            <Button color="dark" disabled children="dark" />
            <Button color="brown" disabled children="brown" />
            <Button color="light" disabled children="light" />
        </div>
    ),
};
