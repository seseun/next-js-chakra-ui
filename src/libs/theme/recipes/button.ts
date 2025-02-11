import { defineRecipe, defineSlotRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
    base: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
    },
    variants: {
        variant: {
            primarySolid: {
                bgColor: "primary.600",
                color: "black",
                _hover: {
                    bgColor: "primary",
                },
                _focus: {
                    bgColor: "primary",
                },
                _active: {
                    bgColor: "primary.700",
                },
                _disabled: {
                    bgColor: "gray.700",
                    color: "gray.400",
                },
            },
            primaryOutline: {
                borderColor: "primary.600",
                color: "primary.600",
                borderWidth: "1px",
                _hover: {
                    borderColor: "primary",
                    color: "primary",
                },
                _focus: {
                    borderColor: "primary",
                    color: "primary",
                },
                _active: {
                    borderColor: "primary.700",
                    color: "primary.700",
                },
                _disabled: {
                    borderColor: "gray.700",
                    color: "gray.600",
                },
            },
            graySolid: {
                bgColor: "gray.700",
                color: "white",
                _hover: {
                    bgColor: "gray.600",
                },
                _focus: {
                    bgColor: "gray.600",
                },
                _active: {
                    bgColor: "gray.800",
                },
                _disabled: {
                    bgColor: "gray.950",
                    color: "gray.800",
                },
            },
            link: {
                color: "gray.300",
                position: "relative",
                width: "auto",
                height: "auto",
                lineHeight: 1.3,
                _before: {
                    content: '""',
                    bgColor: "gray.300",
                    bottom: "1px",
                    h: "1px",
                    left: 0,
                    position: "absolute",
                    width: "100%",
                },
                _hover: {
                    color: "gray.200",
                    _before: {
                        bgColor: "gray.200",
                    },
                },
                _focus: {
                    color: "gray.200",
                    _before: {
                        bgColor: "gray.200",
                    },
                },
                _active: {
                    color: "gray.500",
                    _before: {
                        bgColor: "gray.500",
                    },
                },
                _disabled: {
                    color: "gray.700",
                    _before: {
                        bgColor: "gray.700",
                    },
                },
            },
            text: {
                width: "auto",
                height: "auto",
            },
        },
        size: {
            lg: {
                borderRadius: "8px",
                height: "48px",
                fontSize: "14px",
                fontWeight: 600,
                minW: { base: "initial", md: "240px" },
                p: 0,
            },
            md: {
                borderRadius: "8px",
                height: "36px",
                fontSize: "14px",
                fontWeight: 600,
                minW: { base: "initial", md: "240px" },
                p: 0,
            },
            sm: {
                borderRadius: "8px",
                height: "32px",
                fontSize: "12px",
                fontWeight: 600,
                minW: { base: "initial", md: "160px" },
                p: 0,
            },
            textLg: {
                fontSize: "16px",
                fontWeight: 400,
            },
            textMd: {
                fontSize: "14px",
                fontWeight: 400,
            },
            textSm: {
                fontSize: "12px",
                fontWeight: 400,
            },
            auto: {},
        },
    },
    defaultVariants: {
        variant: "primarySolid",
        size: "auto",
    },
});
