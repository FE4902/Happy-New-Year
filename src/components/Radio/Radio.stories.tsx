import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
    title: "Components/Radio",
    component: Radio,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        value: {
            description: "라디오의 값을 결정하는 옵션입니다.",
            type: "string",
        },
        size: {
            control: {
                type: "inline-radio",
            },
            description: "라디오의 크기를 결정하는 옵션입니다.",
            table: {
                defaultValue: { summary: "medium" },
            },
            options: ["small", "medium", "large"],
        },
        color: {
            control: {
                type: "select",
            },
            description: "라디오의 색상을 결정하는 옵션입니다.",
            table: {
                defaultValue: { summary: "brown" },
            },
            options: ["dark", "brown", "light"],
        },
        disabled: {
            description: "라디오를 비활성화하는 옵션입니다.",
            table: {
                defaultValue: { summary: "false" },
            },
        },
        defaultValue: {
            control: {
                type: "string",
            },
            description: "기본으로 체크할 라디오를 결정하는 옵션입니다.",
            type: "string",
        },
    },
    args: {
        value: "Radio",
        size: "medium",
        color: "brown",
        disabled: false,
    },
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
    parameters: {
        docs: {
            description: {
                story: "기본 라디오입니다. 색상은 `brown` 크기는 `medium` 입니다.",
            },
        },
    },
    render: (args) => (
        <RadioGroup>
            <Radio
                size={args.size}
                color={args.color}
                disabled={args.disabled}
                value={args.value + " 1"}
            />
            <Radio
                size={args.size}
                color={args.color}
                disabled={args.disabled}
                value={args.value + " 2"}
            />
            <Radio
                size={args.size}
                color={args.color}
                disabled={args.disabled}
                value={args.value + " 3"}
            />
        </RadioGroup>
    ),
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
        <RadioGroup>
            <Radio size="small" value="small" />
            <Radio size="medium" value="medium" />
            <Radio size="large" value="large" />
        </RadioGroup>
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
        <RadioGroup>
            <Radio color="dark" value="dark" />
            <Radio color="brown" value="brown" />
            <Radio color="light" value="light" />
        </RadioGroup>
    ),
};

export const Disabled: Story = {
    parameters: {
        docs: {
            description: {
                story: "라디오를 비활성화하는 옵션입니다.",
            },
        },
    },
    render: () => (
        <RadioGroup>
            <Radio color="dark" disabled value="dark" />
            <Radio color="brown" disabled value="brown" />
            <Radio color="light" disabled value="light" />
        </RadioGroup>
    ),
};

export const DefaultValue: Story = {
    parameters: {
        docs: {
            description: {
                story: "기본으로 체크할 라디오를 결정하는 옵션입니다.",
            },
        },
    },
    render: () => (
        <RadioGroup defaultValue="Radio 1">
            <Radio value="Radio 1" />
            <Radio value="Radio 2" />
            <Radio value="Radio 3" />
        </RadioGroup>
    ),
};
