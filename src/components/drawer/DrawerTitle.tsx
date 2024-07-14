import { cn } from "../../../utilities/cn";
import { forwardRef } from "react";
import { Drawer as DrawerPrimitive } from "vaul";

type DrawerTitleRef = React.ElementRef<typeof DrawerPrimitive.Title>;
type DrawerTitleProps = React.ComponentPropsWithoutRef<
  typeof DrawerPrimitive.Title
>;

const DrawerTitle = forwardRef<DrawerTitleRef, DrawerTitleProps>(
  ({ className, ...props }, ref) => (
    <DrawerPrimitive.Title
      ref={ref}
      className={cn(
        "text-lg font-semibold leading-none tracking-tight",
        className,
      )}
      {...props}
    />
  ),
);
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

export default DrawerTitle;
