import { styled } from "classname-variants/react";

export const Text = styled("p", {
  base: "text-stone-900",
  variants: {
    size: {
      md: "text-base",
      lg: "text-4xl font-bold",
    },
  },
  defaultVariants: {
    size: "base",
  },
});
