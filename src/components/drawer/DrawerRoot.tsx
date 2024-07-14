import React, { ComponentProps } from "react";
import { Drawer as DrawerPrimitive } from "vaul";

type IDrawerRoot = ComponentProps<typeof DrawerPrimitive.Root>;
const DrawerRoot = ({ shouldScaleBackground, ...props }: IDrawerRoot) => {
  return (
    <DrawerPrimitive.Root
      shouldScaleBackground={shouldScaleBackground}
      {...props}
    />
  );
};

export default DrawerRoot;
