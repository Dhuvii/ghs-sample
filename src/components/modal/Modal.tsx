"use client";
import { Dispatch, ReactNode, SetStateAction } from "react";

import { useMediaQuery } from "@react-hook/media-query";

import { cn } from "../../../utilities/cn";
import Dialog from "../dialog";
import Drawer from "../drawer";

interface IModal {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title?: string;
  description?: string;
  Button: React.FC<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  >;
  desktopClassName?: string;
  mobileClassName?: string;
}
const Modal = ({
  isOpen,
  setIsOpen,
  children,
  Button,
  title,
  description,
  desktopClassName,
  mobileClassName,
}: IModal) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {isDesktop ? (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <Button />
          <Dialog.Content
            className={cn(
              "flex max-h-dvh flex-col rounded-xl bg-white sm:max-w-[425px]",
              desktopClassName,
            )}
          >
            {(title || description) && (
              <Dialog.Header className="p-4 pb-0 sm:p-6 sm:pb-0">
                {title && <Dialog.Title>{title}</Dialog.Title>}
                {description && (
                  <Dialog.Description>{description}</Dialog.Description>
                )}
              </Dialog.Header>
            )}

            <div className="mt-5 flex-1 overflow-y-auto px-4 pb-4 sm:px-6 sm:pb-6">
              {children}
            </div>
          </Dialog.Content>
        </Dialog>
      ) : (
        <Drawer shouldScaleBackground open={isOpen} onOpenChange={setIsOpen}>
          <Button />
          <Drawer.Content
            className={cn("flex max-h-[80dvh] flex-col", mobileClassName)}
          >
            {(title || description) && (
              <Drawer.Header className="text-left">
                {title && <Drawer.Title>{title}</Drawer.Title>}
                {description && (
                  <Drawer.Description>{description}</Drawer.Description>
                )}
              </Drawer.Header>
            )}
            <div className="mt-5 flex-1 overflow-y-auto px-4 pb-4 sm:px-6 sm:pb-6">
              {children}
            </div>
          </Drawer.Content>
        </Drawer>
      )}
    </>
  );
};

export default Modal;
