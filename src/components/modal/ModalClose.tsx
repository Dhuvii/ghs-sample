import { useMediaQuery } from "@react-hook/media-query";
import { cn } from "../../../utilities/cn";
import { forwardRef } from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import * as DialogPrimitive from "@radix-ui/react-dialog";

type DrawerCloseRef = React.ElementRef<typeof DrawerPrimitive.Close>;
type DrawerCloseProps = React.ComponentPropsWithoutRef<
  typeof DrawerPrimitive.Close
>;

const ModalClose = forwardRef<DrawerCloseRef, DrawerCloseProps>(
  ({ className, ...props }, ref) => {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    if (isDesktop) {
      return (
        <DialogPrimitive.Close
          ref={ref}
          className={cn("", className)}
          {...props}
        />
      );
    } else {
      return (
        <DrawerPrimitive.Close
          ref={ref}
          className={cn("", className)}
          {...props}
        />
      );
    }
  },
);
ModalClose.displayName = "ModalClose";

export default ModalClose;
