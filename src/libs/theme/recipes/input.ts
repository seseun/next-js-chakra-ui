import { defineRecipe, defineSlotRecipe } from "@chakra-ui/react";

export const inputRecipe = defineRecipe({
    base: {
        borderRadius: "8px",
        border: "default",
        transition: "var(--ck-durations-moderate)",
        outline: "none !important",
        "--focus-color": "transparent",
        "--error-color": "colors.danger",
        _hover: {
            borderColor: "primary.600",
        },
        _focus: {
            border: "1px solid var(--ck-colors-primary-600) !important",
            boxShadow: "var(--ck-shadows-focus1)",
        },
        _active: {
            borderColor: "primary.600",
            boxShadow: "var(--ck-shadows-focus1)",
        },
        _invalid: {
            borderColor: "var(--error-color)",
        },
    },
    variants: {
        size: {
            lg: {
                textStyle: "body3",
                px: 4,
                "--input-height": "sizes.12",
                _placeholder: {
                    textStyle: "body3",
                },
            },
            md: {
                textStyle: "body4",
                px: 4,
                "--input-height": "sizes.9",
                _placeholder: {
                    textStyle: "body4",
                },
            },
        },
    },
});
