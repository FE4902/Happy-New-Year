import { globalCss } from "@stitches/react";

export const resetStyle = globalCss({
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

export const GlobalStyles = () => {
    resetStyle();

    return null;
};

export default GlobalStyles;
