import {
    createSystem,
    defaultConfig,
    defineConfig,
    mergeConfigs,
} from "@chakra-ui/react";

import { colors, gradients, semanticColor } from "./theme/colors";
import { components } from "./theme/components";
import { fonts, semanticBorder } from "./theme/etc";
import { layerStyles } from "./theme/layerStyles";
import { recipes } from "./theme/recipes";
import { sizes } from "./theme/sizes";
import { textStyles } from "./theme/textStyles";

const themeProps = {
    tokens: {
        colors: colors,
        components: components,
        fonts: fonts,
        gradients: gradients,
        sizes: sizes,
        spacing: sizes,
    },
    semanticTokens: {
        colors: semanticColor,
        borders: semanticBorder,
    },
    recipes: recipes,
    textStyles: textStyles,
    layerStyles: layerStyles,
};

const configProps = {
    conditions: {
        // cqSm: "@container(min-width: 320px)",
        child: "& > *",
    },
    cssVarsRoot: ":where(:root, :host)",
    cssVarsPrefix: "ck",
    globalCss: {
        "html, body": {
            margin: 0,
            padding: 0,
            fontSize: { base: "14px", md: "16px" }, // ~767px, 768px~
        },
        body: {
            bgColor: "gray.950",
        },
        main: {
            mt: "70px",
            py: 10,
            minH: "80dvh",
        },
    },
};

const customConfig = defineConfig(
    mergeConfigs(defaultConfig, {
        ...configProps,
        theme: themeProps,
    }),
);

const chakraSystem = createSystem(customConfig);

export default chakraSystem;

// const system = createSystem(config)

// // raw token
// system.token("colors.red.200")
// // => "#EE0F0F"

// // token with fallback
// system.token("colors.pink.240", "#000")
// // => "#000"

// // css variable
// system.token.var("colors.red.200")
// // => "var(--chakra-colors-red-200)"

// // token with fallback
// system.token.var("colors.pink.240", "colors.red.200")
// // => "var(--chakra-colors-red-200)"

// system.tokens.getVar("colors.red.200")
// // => "var(--chakra-colors-red-200)"

// system.tokens.expandReferenceInValue("3px solid {colors.red.200}")
// // => "3px solid var(--chakra-colors-red-200)"

// system.tokens.cssVarMap
// // => Map { "colors": Map { "red.200": "var(--chakra-colors-red-200)" } }

// system.tokens.flatMap
// // => Map { "colors.red.200": "var(--chakra-colors-red-200)" }
