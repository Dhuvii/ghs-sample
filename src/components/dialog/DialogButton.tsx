import { cn } from "../../../utilities/cn";
import { forwardRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

type DrawerTriggerRef = React.ElementRef<typeof DialogPrimitive.Trigger>;
type DrawerTriggerProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Trigger
>;

const DialogButton = forwardRef<DrawerTriggerRef, DrawerTriggerProps>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Trigger
      ref={ref}
      className={cn("", className)}
      {...props}
    />
  )
);

DialogButton.displayName = DialogPrimitive.Trigger.displayName;

export default DialogButton;
