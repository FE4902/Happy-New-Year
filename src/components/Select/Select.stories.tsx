import type { Meta, StoryObj } from "@storybook/react";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectGroup,
    SelectLabel,
    SelectSeparator,
} from "./Select";

const meta = {
    title: "Components/Select",
    component: Select,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
    parameters: {
        docs: {
            description: {
                story: "기본 셀렉트입니다.",
            },
        },
    },
    render: () => (
        <Select>
            <SelectTrigger placeholder="Select Trigger"></SelectTrigger>
            <SelectContent>
                <SelectItem value="select item value 1">
                    Select Item 1
                </SelectItem>
                <SelectItem value="select item value 2">
                    Select Item 2
                </SelectItem>
                <SelectSeparator />
                <SelectGroup>
                    <SelectLabel>Select Label</SelectLabel>
                    <SelectItem value="select group item value 1">
                        Select Group Item 1
                    </SelectItem>
                    <SelectItem value="select group item value 2">
                        Select Group Item 2
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    ),
};

export const Color: Story = {
    parameters: {
        docs: {
            description: {
                story: "색상을 변경한 셀렉트입니다. `SelectTrigger`와 `SelectContent`의 `color` prop을 통해 각각의 색상을 변경할 수 있습니다.",
            },
        },
    },
    render: () => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Select>
                <SelectTrigger
                    placeholder="Select Trigger"
                    color="dark"
                ></SelectTrigger>
                <SelectContent color="dark">
                    <SelectItem value="select item value 1">
                        Select Item 1
                    </SelectItem>
                    <SelectItem value="select item value 2">
                        Select Item 2
                    </SelectItem>
                    <SelectSeparator />
                    <SelectGroup>
                        <SelectLabel>Select Label</SelectLabel>
                        <SelectItem value="select group item value 1">
                            Select Group Item 1
                        </SelectItem>
                        <SelectItem value="select group item value 2">
                            Select Group Item 2
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger
                    placeholder="Select Trigger"
                    color="brown"
                ></SelectTrigger>
                <SelectContent color="brown">
                    <SelectItem value="select item value 1">
                        Select Item 1
                    </SelectItem>
                    <SelectItem value="select item value 2">
                        Select Item 2
                    </SelectItem>
                    <SelectSeparator />
                    <SelectGroup>
                        <SelectLabel>Select Label</SelectLabel>
                        <SelectItem value="select group item value 1">
                            Select Group Item 1
                        </SelectItem>
                        <SelectItem value="select group item value 2">
                            Select Group Item 2
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger
                    placeholder="Select Trigger"
                    color="light"
                ></SelectTrigger>
                <SelectContent color="light">
                    <SelectItem value="select item value 1">
                        Select Item 1
                    </SelectItem>
                    <SelectItem value="select item value 2">
                        Select Item 2
                    </SelectItem>
                    <SelectSeparator />
                    <SelectGroup>
                        <SelectLabel>Select Label</SelectLabel>
                        <SelectItem value="select group item value 1">
                            Select Group Item 1
                        </SelectItem>
                        <SelectItem value="select group item value 2">
                            Select Group Item 2
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    ),
};
