import { cn } from "../../../utilities/cn";
import { forwardRef } from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import DrawerOverlay from "./DrawerOverlay";

type DrawerContentRef = React.ElementRef<typeof DrawerPrimitive.Content>;
type DrawerContentProps = React.ComponentPropsWithoutRef<
  typeof DrawerPrimitive.Content
>;

const DrawerContent = forwardRef<DrawerContentRef, DrawerContentProps>(
  ({ className, children, ...props }, ref) => (
    <DrawerPrimitive.Portal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(
          "fixed inset-x-0 bottom-0 z-[999] mt-24 flex h-auto flex-col rounded-t-[10px] border bg-white",
          className,
        )}
        {...props}
      >
        <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-gray-200" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPrimitive.Portal>
  ),
);
DrawerContent.displayName = "DrawerContent";

export default DrawerContent;
