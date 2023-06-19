"use client";

import React from "react";
import { Global, css } from "@emotion/react";
import type { CSSInterpolation } from "./types";

export function GlobalStyles(props: { styles: CSSInterpolation }) {
    const { styles } = props;

    return <Global styles={css(styles)} />;
}
