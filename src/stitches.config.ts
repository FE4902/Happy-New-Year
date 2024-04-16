import { createStitches } from "@stitches/react";
import type * as Stitches from '@stitches/react';

export type { VariantProps } from "@stitches/react";

const color = {
    dark: "#333",
    light: '#f5f5f5',
    brown: '#a67b5b',
}

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
            7: "32px",
            8: "48px",
            9: "64px",
            10: "128px",
        },
        sizes: {
            1: "4px",
            2: "8px",
            3: "12px",
            4: "16px",
            5: "20px",
            6: "24px",
            7: "32px",
            8: "48px",
            9: "64px",
            10: "128px",
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