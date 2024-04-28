# 🐇 Rabbit Design System

Rabbit Design System은 `Radix UI`와 `Stitches`의 조합으로 React 컴포넌트 라이브러리입니다. <br/>
제공하는 컴포넌트 종류는 [Storybook 문서](https://662d0fa4b0870d823843625b-ogrbakhato.chromatic.com/?path=/docs/components-accordion--docs)에서 확인하실 수 있습니다.

## Usage

-   `Toast`, `Tooltip` 등의 컴포넌트 사용을 위해 상위 컴포넌트를 `RabbitProvider` 로 감싸야합니다.

```tsx
const App = () => {
    return <RabbitProvider>//...</RabbitProvider>;
};
```

-   `stitches.config.ts`에서 variants를 확인 및 수정할 수 있습니다.

```tsx
const color = {
    dark: "#333",
    light: "#f5f5f5",
    brown: "#a67b5b",
};

export const { styled } = createStitches({
    theme: {
        colors: {
            dark1: `oklch(from ${color.dark} calc(l + .1) c h)`,
            dark2: `${color.dark}`,
            dark3: `oklch(from ${color.dark} calc(l - .1) c h)`,
            light1: `oklch(from ${color.light} calc(l + .1) c h)`,
            light2: `${color.light}`,
            light3: `oklch(from ${color.light} calc(l - .1) c h)`,
            brown1: `oklch(from ${color.brown} calc(l + .1) c h)`,
            brown2: `${color.brown}`,
            brown3: `oklch(from ${color.brown} calc(l - .1) c h)`,
        },
        space: {
            1: "4px",
            2: "8px",
            3: "12px",
            4: "16px",
            5: "20px",
            6: "24px",
            7: "28px",
            8: "32px",
            9: "48px",
            10: "64px",
        },
        sizes: {
            1: "4px",
            2: "8px",
            3: "12px",
            4: "16px",
            5: "20px",
            6: "24px",
            7: "28px",
            8: "32px",
            9: "48px",
            10: "64px",
        },
        radii: {
            1: "4px",
            2: "8px",
            3: "16px",
            pill: "9999px",
            round: "50%",
        },
        fonts: {
            pretendard: "Pretendard Variable, Pretendard, sans-serif",
        },
        fontSizes: {
            1: "12px",
            2: "14px",
            3: "16px",
            4: "20px",
            5: "24px",
            6: "32px",
        },
        fontWeights: {
            1: "400",
            2: "600",
            3: "700",
        },
        media: {
            bp1: "(max-width: 480px)",
            bp2: "(max-width: 768px)",
            bp3: "(max-width: 1024px)",
            bp4: "(max-width: 1320px)",
            hover: "(any-hover: hover)",
            dark: "(prefers-color-scheme: dark)",
            light: "(prefers-color-scheme: light)",
        },
    },
});
```
