import { useMediaQuery } from "@react-hook/media-query";
import { cn } from "../../../utilities/cn";
import { forwardRef } from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import * as DialogPrimitive from "@radix-ui/react-dialog";

type DrawerTriggerRef = React.ElementRef<typeof DialogPrimitive.Trigger>;
type DrawerTriggerProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Trigger
>;

const ModalButton = forwardRef<DrawerTriggerRef, DrawerTriggerProps>(
  ({ className, ...props }, ref) => {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    if (isDesktop) {
      return (
        <DialogPrimitive.Trigger
          ref={ref}
          className={cn("", className)}
          {...props}
        />
      );
    } else {
      return (
        <DrawerPrimitive.Trigger
          ref={ref}
          className={cn("", className)}
          {...props}
        />
      );
    }
  },
);
ModalButton.displayName = "ModalButton";

export default ModalButton;
