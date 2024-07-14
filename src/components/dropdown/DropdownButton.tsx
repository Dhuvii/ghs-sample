import { cn } from "../../../utilities/cn";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";

interface IDropdownButton
  extends RadixDropdownMenu.DropdownMenuSubTriggerProps {}

const DropdownButton = ({ children, className }: IDropdownButton) => {
  return (
    <RadixDropdownMenu.Trigger
      className={cn(
        "cursor-default select-none rounded px-4 text-2xl hover:bg-gray-200/50 focus-visible:outline-none data-[state=open]:bg-gray-200/75",
        className
      )}
    >
      {children}
    </RadixDropdownMenu.Trigger>
  );
};

export default DropdownButton;
