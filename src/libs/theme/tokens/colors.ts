export const colors = {
    primary: {
        100: { value: "#F1FBD9" },
        200: { value: "#E3F7B3" },
        300: { value: "#D5F38C" },
        400: { value: "#C7EF66" },
        DEFAULT: { value: "#B9EB40" },
        600: { value: "#Add800" },
        700: { value: "#839D1C" },
        800: { value: "#456907" },
        900: { value: "#233208" },
    },
    gray: {
        10: { value: "#EAEAEA" },
        50: { value: "#D4D4D4" },
        100: { value: "#BFBFBF" },
        200: { value: "#A9A9A9" },
        300: { value: "#949494" },
        400: { value: "#7F7F7F" },
        DEFAULT: { value: "#6A6A6A" },
        600: { value: "#545454" },
        700: { value: "#3F3F3F" },
        800: { value: "#292929" },
        900: { value: "#161616" },
        950: { value: "#090909" },
    },
    danger: {
        100: { value: "#FEF2F2" },
        200: { value: "#FFEBEE" },
        300: { value: "#FFD7DB" },
        400: { value: "#F49898" },
        DEFAULT: { value: "#EB6F70" },
        600: { value: "#D75B5C" },
        700: { value: "#A63233" },
        800: { value: "#731B1C" },
        900: { value: "#400D0E" },
    },
    link: {
        100: { value: "#F1F9FF" },
        200: { value: "#DBF0FF" },
        300: { value: "#B7E1FF" },
        400: { value: "#6FC2FF" },
        DEFAULT: { value: "#4BA1FF" },
        600: { value: "#409FE5" },
        700: { value: "#2A72A6" },
        800: { value: "#17486C" },
        900: { value: "#0F3048" },
    },
    success: {
        100: { value: "#EDFBF5" },
        200: { value: "#D3F6E5" },
        300: { value: "#A7EDCB" },
        400: { value: "#4FDB98" },
        DEFAULT: { value: "#22D27E" },
        600: { value: "#28C077" },
        700: { value: "#1E8E59" },
        800: { value: "#125D3A" },
        900: { value: "#0A3521" },
    },
    warning: {
        100: { value: "#FFF9EE" },
        200: { value: "#FFF7E1" },
        300: { value: "#FFEAB3" },
        400: { value: "#FFDD82" },
        DEFAULT: { value: "#FFC62B" },
        600: { value: "#FFAD0D" },
        700: { value: "#BA8010" },
        800: { value: "#5E4109" },
        900: { value: "#35270A" },
    },
    purple: {
        100: { value: "#F5F1FF" },
        200: { value: "#DCCBFF" },
        300: { value: "#BA9AFF" },
        400: { value: "#9C6EFF" },
        DEFAULT: { value: "#8248FF" },
        600: { value: "#6A2DED" },
        700: { value: "#5119C9" },
        800: { value: "#341D75" },
        900: { value: "#21173F" },
    },
};

// solid: 진한 색
// contrast: 대조 색상, 진한 색 위에 들어가는 글자 색
// fg: 전경색, 텍스트나 아이콘 등의 전면에 사용되는 색
// muted: 흐린 색
// subtle: 은은한 색
// emphasized: 강조된 은은한 색
// focusRing: 요소가 포커스 됐을 때 나타나는 포커스 링 색상
export const semanticColor = {
    // light-dark mode
    // danger: {
    //     value: { base: "{colors.red}", _dark: "{colors.darkred}" },
    // },
    // success: {
    //     value: { base: "{colors.green}", _dark: "{colors.darkgreen}" },
    // },
    brand: {
        // solid: { value: "{colors.brand.500}" },
        // contrast: { value: "{colors.brand.100}" },
        // fg: { value: "{colors.brand.700}" },
        // muted: { value: "{colors.brand.100}" },
        // subtle: { value: "{colors.brand.200}" },
        // emphasized: { value: "{colors.brand.300}" },
        // focusRing: { value: "{colors.brand.500}" },
    },
    dimmed: {
        header: { value: "rgba(9, 9, 9, 0.5)" },
        70: { value: "rgba(1, 1, 1, 0.7)" },
    },
    kakao: {
        primary: { value: "#F9E000" },
        dark: { value: "#371D1E" },
    },
    upbit: {
        primary: { value: "#0062DF" },
        dark: { value: "#041635" },
    },
    binance: {
        primary: { value: "#F0B90B" },
        dark: { value: "#141310" },
    },
};

export const gradients = {
    gradient01: {
        value: "linear-gradient(to right top, #27c4bf, #cdf43d)",
    },
    gradient02: {
        value: "linear-gradient(to right top, #cdf43d, #27c4bf)",
    },
    gradient03: { value: "linear-gradient(to right top, #5b33e8, #1bd4cf))" },
};
