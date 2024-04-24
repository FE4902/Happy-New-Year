import type { Meta, StoryObj } from "@storybook/react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./Accordion";

const meta: Meta<typeof Accordion> = {
    title: "Components/Accordion",
    component: Accordion,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        color: {
            control: {
                type: "inline-radio",
            },
            description: "아코디언의 색상을 결정하는 옵션입니다.",
            table: {
                defaultValue: { summary: "brown" },
            },
            options: ["dark", "brown", "light"],
        },
        defaultValue: {
            description: "기본으로 열려있는 아코디언을 결정하는 옵션입니다.",
            type: "string",
            control: {
                type: "string",
            },
        },
    },
    args: {
        color: "brown",
    },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
    parameters: {
        docs: {
            description: {
                story: "기본 아코디언입니다. 기본 색상은 `brown` 입니다.",
            },
        },
    },
    render: (args) => (
        <div style={{ display: "flex", width: "300px" }}>
            <Accordion type="single" color={args.color} collapsible>
                <AccordionItem value="accordion-one">
                    <AccordionTrigger>Accordion One</AccordionTrigger>
                    <AccordionContent>
                        The Nike Sportswear Tech Fleece Full-Zip Hoodie is made
                        from a double-sided spacer fabric for added warmth
                        without extra weight. A slightly taller collar in the
                        hood helps keep you dry in cold, wet weather.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="accordion-two">
                    <AccordionTrigger>Accordion Two</AccordionTrigger>
                    <AccordionContent>
                        The Nike Sportswear Tech Fleece Full-Zip Hoodie is made
                        from a double-sided spacer fabric for added warmth
                        without extra weight. A slightly taller collar in the
                        hood helps keep you dry in cold, wet weather.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="accordion-three">
                    <AccordionTrigger>Accordion Three</AccordionTrigger>
                    <AccordionContent>
                        The Nike Sportswear Tech Fleece Full-Zip Hoodie is made
                        from a double-sided spacer fabric for added warmth
                        without extra weight. A slightly taller collar in the
                        hood helps keep you dry in cold, wet weather.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    ),
};

export const Color: Story = {
    parameters: {
        docs: {
            description: {
                story: "아코디언의 색상을 결정하는 옵션입니다.",
            },
        },
    },
    render: () => (
        <div style={{ display: "flex", gap: "8px" }}>
            <div style={{ display: "flex", width: "300px" }}>
                <Accordion type="single" color="dark" collapsible>
                    <AccordionItem value="accordion-one">
                        <AccordionTrigger>Accordion One</AccordionTrigger>
                        <AccordionContent>
                            The Nike Sportswear Tech Fleece Full-Zip Hoodie is
                            made from a double-sided spacer fabric for added
                            warmth without extra weight. A slightly taller
                            collar in the hood helps keep you dry in cold, wet
                            weather.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="accordion-two">
                        <AccordionTrigger>Accordion Two</AccordionTrigger>
                        <AccordionContent>
                            The Nike Sportswear Tech Fleece Full-Zip Hoodie is
                            made from a double-sided spacer fabric for added
                            warmth without extra weight. A slightly taller
                            collar in the hood helps keep you dry in cold, wet
                            weather.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="accordion-three">
                        <AccordionTrigger>Accordion Three</AccordionTrigger>
                        <AccordionContent>
                            The Nike Sportswear Tech Fleece Full-Zip Hoodie is
                            made from a double-sided spacer fabric for added
                            warmth without extra weight. A slightly taller
                            collar in the hood helps keep you dry in cold, wet
                            weather.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div style={{ display: "flex", width: "300px" }}>
                <Accordion type="single" color="brown" collapsible>
                    <AccordionItem value="accordion-one">
                        <AccordionTrigger>Accordion One</AccordionTrigger>
                        <AccordionContent>
                            The Nike Sportswear Tech Fleece Full-Zip Hoodie is
                            made from a double-sided spacer fabric for added
                            warmth without extra weight. A slightly taller
                            collar in the hood helps keep you dry in cold, wet
                            weather.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="accordion-two">
                        <AccordionTrigger>Accordion Two</AccordionTrigger>
                        <AccordionContent>
                            The Nike Sportswear Tech Fleece Full-Zip Hoodie is
                            made from a double-sided spacer fabric for added
                            warmth without extra weight. A slightly taller
                            collar in the hood helps keep you dry in cold, wet
                            weather.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="accordion-three">
                        <AccordionTrigger>Accordion Three</AccordionTrigger>
                        <AccordionContent>
                            The Nike Sportswear Tech Fleece Full-Zip Hoodie is
                            made from a double-sided spacer fabric for added
                            warmth without extra weight. A slightly taller
                            collar in the hood helps keep you dry in cold, wet
                            weather.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div style={{ display: "flex", width: "300px" }}>
                <Accordion type="single" color="light" collapsible>
                    <AccordionItem value="accordion-one">
                        <AccordionTrigger>Accordion One</AccordionTrigger>
                        <AccordionContent>
                            The Nike Sportswear Tech Fleece Full-Zip Hoodie is
                            made from a double-sided spacer fabric for added
                            warmth without extra weight. A slightly taller
                            collar in the hood helps keep you dry in cold, wet
                            weather.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="accordion-two">
                        <AccordionTrigger>Accordion Two</AccordionTrigger>
                        <AccordionContent>
                            The Nike Sportswear Tech Fleece Full-Zip Hoodie is
                            made from a double-sided spacer fabric for added
                            warmth without extra weight. A slightly taller
                            collar in the hood helps keep you dry in cold, wet
                            weather.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="accordion-three">
                        <AccordionTrigger>Accordion Three</AccordionTrigger>
                        <AccordionContent>
                            The Nike Sportswear Tech Fleece Full-Zip Hoodie is
                            made from a double-sided spacer fabric for added
                            warmth without extra weight. A slightly taller
                            collar in the hood helps keep you dry in cold, wet
                            weather.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    ),
};

export const DefaultValue: Story = {
    parameters: {
        docs: {
            description: {
                story: "기본으로 열려있는 아코디언을 결정하는 옵션입니다.",
            },
        },
    },
    render: () => (
        <div style={{ display: "flex", width: "300px" }}>
            <Accordion type="single" defaultValue="accordion-one" collapsible>
                <AccordionItem value="accordion-one">
                    <AccordionTrigger>Accordion One</AccordionTrigger>
                    <AccordionContent>
                        The Nike Sportswear Tech Fleece Full-Zip Hoodie is made
                        from a double-sided spacer fabric for added warmth
                        without extra weight. A slightly taller collar in the
                        hood helps keep you dry in cold, wet weather.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="accordion-two">
                    <AccordionTrigger>Accordion Two</AccordionTrigger>
                    <AccordionContent>
                        The Nike Sportswear Tech Fleece Full-Zip Hoodie is made
                        from a double-sided spacer fabric for added warmth
                        without extra weight. A slightly taller collar in the
                        hood helps keep you dry in cold, wet weather.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="accordion-three">
                    <AccordionTrigger>Accordion Three</AccordionTrigger>
                    <AccordionContent>
                        The Nike Sportswear Tech Fleece Full-Zip Hoodie is made
                        from a double-sided spacer fabric for added warmth
                        without extra weight. A slightly taller collar in the
                        hood helps keep you dry in cold, wet weather.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    ),
};
