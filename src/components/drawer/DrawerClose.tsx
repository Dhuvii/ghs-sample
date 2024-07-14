import { cn } from "../../../utilities/cn";
import { forwardRef } from "react";
import { Drawer as DrawerPrimitive } from "vaul";

type DrawerCloseRef = React.ElementRef<typeof DrawerPrimitive.Close>;
type DrawerCloseProps = React.ComponentPropsWithoutRef<
  typeof DrawerPrimitive.Close
>;

const DrawerClose = forwardRef<DrawerCloseRef, DrawerCloseProps>(
  ({ className, ...props }, ref) => (
    <DrawerPrimitive.Close ref={ref} className={cn("", className)} {...props} />
  )
);
DrawerClose.displayName = DrawerPrimitive.Close.displayName;

export default DrawerClose;
