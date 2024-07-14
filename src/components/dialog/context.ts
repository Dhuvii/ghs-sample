import { createContext } from "react";

interface DialogContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

// Create context to manage the dialog state with default values
export const DialogContext = createContext<DialogContextType>({
  isOpen: false,
  setIsOpen: () => {},
});
