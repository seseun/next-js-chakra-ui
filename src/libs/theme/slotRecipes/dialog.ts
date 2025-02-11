import { defineSlotRecipe } from "@chakra-ui/react";
import { dialogAnatomy } from "@chakra-ui/react/anatomy";

export const dialogRecipe = defineSlotRecipe({
    slots: dialogAnatomy.keys(),
    base: {
        backdrop: {
            backdropFilter: "blur(20px)",
        },
        content: {
            bgColor: "gray.900",
            borderRadius: "2xl",
        },
    },
    variants: {
        size: {
            md: {
                content: {
                    maxW: "524px",
                },
            },
        },
    },
});
