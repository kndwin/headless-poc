import { styled } from "classname-variants/react";
const PageRoot = styled("div", {
  base: "min-h-screen h-full w-full",
  variants: {},
});

const Header = styled("header", {
  base: "mx-auto container flex py-8 px-4",
  variants: {},
});

const Main = styled("main", {
  base: "mx-auto container flex px-4",
  variants: {},
});

export const Page = Object.assign(PageRoot, {
  Header,
  Main,
});
