import {
    createSystem,
    defaultConfig,
    defineConfig,
    defineSemanticTokens,
    defineTokens,
    mergeConfigs,
} from "@chakra-ui/react";

const tokens = defineTokens({
    colors: {
        // 50 - 950
        // brand: {
        //     50: { value: "#e6f2ff" },
        //     100: { value: "#e6f2ff" },
        //     200: { value: "#bfdeff" },
        //     300: { value: "#99caff" },
        //     // DEFAULT: { value: "#EE0F0F" },
        //     950: { value: "#001a33" },
        // },
    },
    gradients: {},
    sizes: {
        // width, height, minWidth, maxWidth, minHeight, maxHeight
        full: { value: "100%" },
    },
    spacing: {
        // margin, padding, gap, {top,right,bottom,left}
        full: { value: "100%" },
    },
    fonts: {
        body: { value: "'Pretendard Variable', sans-serif" },
        heading: { value: "'Pretendard Variable', sans-serif" },
    },
    fontWeights: {},
    letterSpacings: {},
    lineHeights: {},
    radii: {},
    components: {
        Select: {
            // baseStyle: {
            //     bgColor: "green",
            // },
        },
        Table: {
            // baseStyle: {
            //     table: { width: "100%" },
            // },
            // variants: {
            //     data: {
            //         table: {
            //             borderTopWidth: "2px",
            //             borderStyle: "solid",
            //             borderColor: "gray.700",
            //         },
            //         thead: {
            //             borderColor: "gray.400",
            //             borderLeftWidth: "1px",
            //             borderStyle: "solid",
            //             borderTopWidth: "1px",
            //         },
            //         tbody: {
            //             borderColor: "gray.400",
            //             borderLeftWidth: "1px",
            //             borderStyle: "solid",
            //             borderTopWidth: "1px",
            //             td: {
            //                 textAlign: "right",
            //             },
            //         },
            //         tr: {},
            //         th: {
            //             borderBottomWidth: "1px",
            //             borderColor: "gray.400",
            //             borderRightWidth: "1px",
            //             borderStyle: "solid",
            //             fontSize: { md: "16px", base: "14px" },
            //             fontWeight: 500,
            //             px: 2,
            //             py: 0.5,
            //             textAlign: "left",
            //         },
            //         td: {
            //             borderBottomWidth: "1px",
            //             borderColor: "gray.400",
            //             borderRightWidth: "1px",
            //             borderStyle: "solid",
            //             fontSize: { md: "16px", base: "14px" },
            //             fontWeight: 600,
            //             px: 2,
            //             py: 0.5,
            //         },
            //     },
            // },
        },
    },
});
const semanticTokens = defineSemanticTokens({
    // solid: 진한 색
    // contrast: 대조 색상, 진한 색 위에 들어가는 글자 색
    // fg: 전경색, 텍스트나 아이콘 등의 전면에 사용되는 색
    // muted: 흐린 색
    // subtle: 은은한 색
    // emphasized: 강조된 은은한 색
    // focusRing: 요소가 포커스 됐을 때 나타나는 포커스 링 색상
    colors: {
        brand: {
            // solid: { value: "{colors.brand.500}" },
            // contrast: { value: "{colors.brand.100}" },
            // fg: { value: "{colors.brand.700}" },
            // muted: { value: "{colors.brand.100}" },
            // subtle: { value: "{colors.brand.200}" },
            // emphasized: { value: "{colors.brand.300}" },
            // focusRing: { value: "{colors.brand.500}" },
        },
        border: {
            DEFAULT: {
                value: {},
            },
        },
    },
    borders: {
        // subtle: { value: "1px solid {colors.border}" },
        // emphasized: {
        //     value: {
        //         base: "1px solid {colors.gray.300}",
        //         _dark: "1px solid {colors.gray.700}",
        //     },
        // },
    },
});

const customConfig = defineConfig(
    mergeConfigs(defaultConfig, {
        cssVarsRoot: ":where(:root, :host)",
        cssVarsPrefix: "ck",
        globalCss: {
            "html, body": {
                margin: 0,
                padding: 0,
            },
        },
        theme: { tokens, semanticTokens },
    }),
);

const theme = createSystem(customConfig);

export default theme;
