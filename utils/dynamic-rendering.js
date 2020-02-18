import React, { useRef } from "react";
import useNearScreen from "./useNearScreen";
export default function DynamicRendering({ children, isBot, force }) {
  const ref = useRef();
  const isNearScreen = useNearScreen({
    ref
  });

  if (isBot || isNearScreen || force) {
    return children;
  } else {
    return React.createElement("div", {
      ref: ref,
      style: {
        width: 300,
        margin: 20,
        height: 100,
        border: "2px solid #f55",
        background: "#f88"
      }
    });
  }
}
