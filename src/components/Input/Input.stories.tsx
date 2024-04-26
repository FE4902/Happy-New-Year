import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

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

const meta = {
    title: "Components/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: {
                type: "inline-radio",
            },
            description: "인풋의 크기를 결정하는 옵션입니다.",
            table: {
                defaultValue: { summary: "medium" },
            },
            options: ["small", "medium", "large"],
        },
        color: {
            control: {
                type: "inline-radio",
            },
            description: "인풋의 색상을 결정하는 옵션입니다.",
            table: {
                defaultValue: { summary: "brown" },
            },
            options: ["dark", "brown", "light"],
        },
        placeholder: {
            description: "인풋에 표시할 `placeholder`를 결정하는 옵션입니다.",
            control: {
                type: "text",
            },
        },
        value: {
            description: "인풋에 표시할 텍스트를 결정하는 옵션입니다.",
            control: {
                type: "text",
            },
        },
        leftSlot: {
            description: "인풋의 좌측에 추가할 아이콘을 결정하는 옵션입니다.",
        },
        rightSlot: {
            description: "인풋의 우측에 추가할 아이콘을 결정하는 옵션입니다.",
        },
    },
    args: {
        placeholder: "Input",
        size: "medium",
        color: "brown",
        value: "",
    },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
    parameters: {
        docs: {
            description: {
                story: "기본 인풋입니다. 색상은 `brown` 크기는 `medium` 입니다.",
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
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
            }}
        >
            <Input size="small" value="small" />
            <Input size="medium" value="medium" />
            <Input size="large" value="large" />
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
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
            }}
        >
            <Input color="dark" value="dark" />
            <Input color="brown" value="brown" />
            <Input color="light" value="light" />
        </div>
    ),
};

export const Disabled: Story = {
    parameters: {
        docs: {
            description: {
                story: "인풋을 비활성화하는 옵션입니다.",
            },
        },
    },
    render: () => (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
            }}
        >
            <Input color="dark" disabled value="dark" />
            <Input color="brown" disabled value="brown" />
            <Input color="light" disabled value="light" />
        </div>
    ),
};

export const LeftSlot: Story = {
    parameters: {
        docs: {
            description: {
                story: "인풋의 좌측에 아이콘을 추가하는 옵션입니다.",
            },
        },
    },
    render: () => (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
            }}
        >
            <Input
                leftSlot={icon}
                size="small"
                color="dark"
                placeholder="Input"
                type="text"
            />
            <Input leftSlot={icon} placeholder="Input" type="text" />
            <Input
                leftSlot={icon}
                size="large"
                color="light"
                placeholder="Input"
                type="text"
            />
        </div>
    ),
};

export const RightSlot: Story = {
    parameters: {
        docs: {
            description: {
                story: "인풋의 우측에 아이콘을 추가하는 옵션입니다.",
            },
        },
    },
    render: () => (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
            }}
        >
            <Input
                rightSlot={icon}
                size="small"
                color="dark"
                placeholder="Input"
                type="password"
            />
            <Input rightSlot={icon} placeholder="Input" type="password" />
            <Input
                rightSlot={icon}
                size="large"
                color="light"
                placeholder="Input"
                type="password"
            />
        </div>
    ),
};
