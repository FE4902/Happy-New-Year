import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
    title: "Components/Checkbox",
    component: Checkbox,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        children: {
            description: "체크박스 옆에 표시할 텍스트를 결정하는 옵션입니다.",
            control: {
                type: "text",
            },
        },
        size: {
            control: {
                type: "inline-radio",
            },
            description: "체크박스의 크기를 결정하는 옵션입니다.",
            table: {
                defaultValue: { summary: "medium" },
            },
            options: ["small", "medium", "large"],
        },
        color: {
            control: {
                type: "inline-radio",
            },
            description: "체크박스의 색상을 결정하는 옵션입니다.",
            table: {
                defaultValue: { summary: "brown" },
            },
            options: ["dark", "brown", "light"],
        },
        disabled: {
            description: "체크박스를 비활성화하는 옵션입니다.",
            table: {
                defaultValue: { summary: "false" },
            },
        },
        defaultChecked: {
            description: "체크박스를 기본으로 체크하는 옵션입니다.",
            table: {
                defaultValue: { summary: "false" },
            },
        },
    },
    args: {
        children: "Button",
        size: "medium",
        color: "brown",
        disabled: false,
        defaultChecked: false,
    },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    parameters: {
        docs: {
            description: {
                story: "기본 체크박스입니다. 색상은 `brown` 크기는 `medium` 입니다.",
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
            <Checkbox size="small" children="small" />
            <Checkbox size="medium" children="medium" />
            <Checkbox size="large" children="large" />
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
            <Checkbox color="dark" children="dark" />
            <Checkbox color="brown" children="brown" />
            <Checkbox color="light" children="light" />
        </div>
    ),
};

export const Disabled: Story = {
    parameters: {
        docs: {
            description: {
                story: "체크박스를 비활성화하는 옵션입니다.",
            },
        },
    },
    render: () => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Checkbox color="dark" disabled children="dark" />
            <Checkbox color="brown" disabled children="brown" />
            <Checkbox color="light" disabled children="light" />
        </div>
    ),
};

export const DefaultChecked: Story = {
    parameters: {
        docs: {
            description: {
                story: "체크박스를 기본으로 체크하는 옵션입니다.",
            },
        },
    },
    render: () => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Checkbox color="dark" defaultChecked children="dark" />
            <Checkbox color="brown" defaultChecked children="brown" />
            <Checkbox color="light" defaultChecked children="light" />
        </div>
    ),
};
