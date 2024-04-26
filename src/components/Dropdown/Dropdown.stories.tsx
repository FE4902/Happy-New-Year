import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button/Button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "./Dropdown";

const meta = {
    title: "Components/Dropdown",
    component: DropdownMenu,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof DropdownMenu>;

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
    parameters: {
        docs: {
            description: {
                story: "기본 드롭다운입니다.",
            },
        },
    },
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>Dropdown Trigger</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>Dropdown Item 1</DropdownMenuItem>
                <DropdownMenuItem>Dropdown Item 2</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuLabel>Dropdown Label</DropdownMenuLabel>
                    <DropdownMenuItem>Dropdown Group Item 1</DropdownMenuItem>
                    <DropdownMenuItem>Dropdown Group Item 2</DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
};

export const Color: Story = {
    parameters: {
        docs: {
            description: {
                story: "색상을 변경한 드롭다운입니다. `DropdownMenuContent`의 `color` prop을 통해 색상을 변경할 수 있습니다.",
            },
        },
    },
    render: () => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button color="dark">Dark Trigger</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent color="dark">
                    <DropdownMenuItem>Dropdown Item 1</DropdownMenuItem>
                    <DropdownMenuItem>Dropdown Item 2</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuLabel>Dropdown Label</DropdownMenuLabel>
                        <DropdownMenuItem>
                            Dropdown Group Item 1
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Dropdown Group Item 2
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button color="brown">Brown Trigger</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent color="brown">
                    <DropdownMenuItem>Dropdown Item 1</DropdownMenuItem>
                    <DropdownMenuItem>Dropdown Item 2</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuLabel>Dropdown Label</DropdownMenuLabel>
                        <DropdownMenuItem>
                            Dropdown Group Item 1
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Dropdown Group Item 2
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button color="light">Light Trigger</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent color="light">
                    <DropdownMenuItem>Dropdown Item 1</DropdownMenuItem>
                    <DropdownMenuItem>Dropdown Item 2</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuLabel>Dropdown Label</DropdownMenuLabel>
                        <DropdownMenuItem>
                            Dropdown Group Item 1
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Dropdown Group Item 2
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    ),
};
