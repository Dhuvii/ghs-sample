import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { DropdownContext } from "./context";

interface IDropdown extends RadixDropdownMenu.DropdownMenuProps {}

const DropdownRoot = ({ children }: IDropdown) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      <RadixDropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
        {children}
      </RadixDropdownMenu.Root>
    </DropdownContext.Provider>
  );
};

export default DropdownRoot;
