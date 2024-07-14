import React, { ComponentProps, useEffect, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { DialogContext } from "./context";

type IDialogRoot = ComponentProps<typeof DialogPrimitive.Root>;

const DialogRoot = ({
  open = false,
  onOpenChange = () => {},
  ...props
}: IDialogRoot) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen }}>
      <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen} {...props} />
    </DialogContext.Provider>
  );
};

export default DialogRoot;
