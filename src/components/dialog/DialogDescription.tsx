import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "../../../utilities/cn";

type DialogDescriptionRef = React.ElementRef<
  typeof DialogPrimitive.Description
>;
type DialogDescriptionProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Description
>;

const DialogDescription = React.forwardRef<
  DialogDescriptionRef,
  DialogDescriptionProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-gray-600", className)}
    {...props}
  />
));

DialogDescription.displayName = DialogPrimitive.Description.displayName;

export default DialogDescription;
