import { cn } from "../../../utilities/cn";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { motion, useAnimationControls } from "framer-motion";
import { useContext } from "react";
import { DropdownMenuContext } from "./context";
import sleep from "../../../utilities/sleep";

interface IDropdownItem extends RadixDropdownMenu.DropdownMenuItemProps {
  color?: string;
  highlightColor?: string;
}

const DropdownMenuItem = ({
  children,
  onSelect,
  className,
  color,
  highlightColor: highlightColor,
}: IDropdownItem) => {
  const { closeMenu } = useContext(DropdownMenuContext);
  const animationController = useAnimationControls();
  return (
    <RadixDropdownMenu.Item
      onSelect={async (e) => {
        e.preventDefault();
        await animationController.start("click");
        await animationController.start("idle");
        await sleep(0.075);
        await closeMenu();
        onSelect && onSelect(e);
      }}
      className={cn(
        "select-none rounded-md px-2 py-2 text-sm text-white data-[highlighted]:bg-white/10 data-[highlighted]:text-white data-[highlighted]:focus:outline-none",
        className,
      )}
      asChild
    >
      <motion.div
        animate={animationController}
        variants={{
          click: {
            backgroundColor: `rgba(255,255,255,0)`,
            color: color ? color : `rgb(255,255,255)`,
          },
          idle: {
            backgroundColor: highlightColor
              ? highlightColor
              : `rgba(255,255,255,0.1)`,
            color: color ? color : `rgb(255,255,255)`,
          },
        }}
        transition={{
          duration: 0.04,
        }}
      >
        {children}
      </motion.div>
    </RadixDropdownMenu.Item>
  );
};

export default DropdownMenuItem;
