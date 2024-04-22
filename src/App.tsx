import { Button } from "./components/Button/Button";
import { globalCss } from "@stitches/react";
import MyCheckbox from "./components/Checkbox/Checkbox";
import { Radio, RadioGroup } from "./components/Radio/Radio";
import Switch from "./components/Switch/Switch";
import Tooltip from "./components/Tooltip/Tooltip";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "./components/Dialog/Dialog";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./components/Accordion/Accordion";
import Input from "./components/Input/Input";

const globalStyles = globalCss({
    "*": { margin: 0, padding: 0, font: "inherit", color: "inherit" },
    "*, :after, :before": { boxSizing: "border-box" },
    ":root": {
        webkitTapHighlightColor: "transparent",
        webkitTextSizeAdjust: "100%",
        textSizeAdjust: "100%",
        cursor: "default",
        lineHeight: "1.5",
        overflowWrap: "break-word",
        wordBreak: "break-word",
        tabSize: 4,
    },
    "html, body": { height: "100%" },
    "img, picture, video, canvas, svg": { display: "block", maxWidth: "100%" },
    button: { background: "none", border: 0, cursor: "pointer" },
    a: { textDecoration: "none" },
    table: { borderCollapse: "collapse", borderSpacing: 0 },

    body: {
        fontFamily: "$pretendard",
        lineHeight: 1.5,
        scrollbarGutter: "stable",
    },
});

function App() {
    globalStyles();

    return (
        <div>
            Hello, Rabbit! 🐇 <br />
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    width: "300px",
                    marginTop: "16px",
                }}
            >
                <Accordion
                    type="single"
                    defaultValue="accordion-one"
                    color="light"
                    collapsible
                >
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
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "16px",
                }}
            >
                <Button size="small" color="dark">
                    Button
                </Button>
                <Button>Button</Button>
                <Button size="large" color="light">
                    Button
                </Button>
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "16px",
                }}
            >
                <Button size="small" color="dark" outlined>
                    Button
                </Button>
                <Button outlined>Button</Button>
                <Button size="large" color="light" outlined>
                    Button
                </Button>
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "16px",
                }}
            >
                <Button size="small" color="dark" disabled>
                    Button
                </Button>
                <Button disabled>Button</Button>
                <Button size="large" color="light" disabled>
                    Button
                </Button>
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "16px",
                }}
            >
                <Button size="small" color="dark" outlined disabled>
                    Button
                </Button>
                <Button outlined disabled>
                    Button
                </Button>
                <Button size="large" color="light" outlined disabled>
                    Button
                </Button>
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "16px",
                }}
            >
                <MyCheckbox
                    size="small"
                    children="Checkbox"
                    color="dark"
                    id="1"
                />
                <MyCheckbox children="Checkbox" id="2" />
                <MyCheckbox
                    size="large"
                    children="Checkbox"
                    color="light"
                    id="3"
                />
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "16px",
                }}
            >
                <MyCheckbox
                    size="small"
                    children="Checkbox"
                    color="dark"
                    id="1"
                    defaultChecked
                />
                <MyCheckbox children="Checkbox" id="2" defaultChecked />
                <MyCheckbox
                    size="large"
                    children="Checkbox"
                    color="light"
                    id="3"
                    defaultChecked
                />
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "16px",
                }}
            >
                <MyCheckbox
                    size="small"
                    children="Checkbox"
                    color="dark"
                    id="1"
                    disabled
                />
                <MyCheckbox children="Checkbox" id="2" disabled />
                <MyCheckbox
                    size="large"
                    children="Checkbox"
                    color="light"
                    id="3"
                    disabled
                />
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "16px",
                }}
            >
                <RadioGroup>
                    <Radio size="small" color="dark" value="Radio 1" id="1" />
                    <Radio value="Radio 2" id="1" />
                    <Radio size="large" color="light" value="Radio 3" id="1" />
                </RadioGroup>
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "16px",
                }}
            >
                <RadioGroup defaultValue="Radio 1">
                    <Radio size="small" color="dark" value="Radio 1" id="1" />
                    <Radio value="Radio 2" id="1" />
                    <Radio size="large" color="light" value="Radio 3" id="1" />
                </RadioGroup>
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "16px",
                }}
            >
                <RadioGroup>
                    <Radio
                        size="small"
                        color="dark"
                        value="Radio 1"
                        id="1"
                        disabled
                    />
                    <Radio value="Radio 2" id="1" disabled />
                    <Radio
                        size="large"
                        color="light"
                        value="Radio 3"
                        id="1"
                        disabled
                    />
                </RadioGroup>
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "16px",
                }}
            >
                <Switch size="small" color="dark" />
                <Switch />
                <Switch size="large" color="light" />
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "16px",
                }}
            >
                <Switch size="small" color="dark" disabled />
                <Switch disabled />
                <Switch size="large" color="light" disabled />
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "16px",
                }}
            >
                <Tooltip content="Hello, Tooltip!">
                    <Button color="dark">Tooltip Trigger</Button>
                </Tooltip>
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "16px",
                }}
            >
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>Dialog Trigger</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogTitle>
                            <span>Hello, Dialog!</span>
                        </DialogTitle>
                        <span>안녕하세요, 다이얼로그!</span>
                        <DialogDescription>
                            <span>こんにちは、ダイアログ！</span>
                        </DialogDescription>
                    </DialogContent>
                </Dialog>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    marginTop: "16px",
                }}
            >
                <Input
                    leftSlot={<div>leftSlot</div>}
                    size="small"
                    placeholder="Input"
                    type="text"
                />
                <Input
                    leftSlot={<div>leftSlot</div>}
                    placeholder="Input"
                    type="text"
                />
                <Input
                    leftSlot={<div>leftSlot</div>}
                    size="large"
                    placeholder="Input"
                    type="text"
                />
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    marginTop: "16px",
                }}
            >
                <Input
                    rightSlot={<div>rightSlot</div>}
                    size="small"
                    placeholder="Input"
                    type="text"
                />
                <Input
                    rightSlot={<div>rightSlot</div>}
                    placeholder="Input"
                    type="text"
                />
                <Input
                    rightSlot={<div>rightSlot</div>}
                    size="large"
                    placeholder="Input"
                    type="text"
                />
            </div>
        </div>
    );
}

export default App;
