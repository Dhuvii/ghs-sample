import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { forwardRef, useContext } from "react";
import { cn } from "../../../utilities/cn";
import { DialogContext } from "./context";
import DialogOverlay from "./DialogOverlay";

type DialogContentRef = React.ElementRef<typeof DialogPrimitive.Content>;
type DialogContentProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
>;

const DialogContent = forwardRef<DialogContentRef, DialogContentProps>(
  ({ className, children, ...props }, ref) => {
    const { isOpen } = useContext(DialogContext);
    return (
      <DialogPrimitive.Portal forceMount>
        <>
          <AnimatePresence>
            {isOpen && (
              <motion.div initial="closed" animate="open" exit="closed">
                <DialogOverlay asChild>
                  <motion.div
                    variants={{
                      closed: { opacity: 0, transition: { duration: 0.2 } },
                      open: { opacity: 1, transition: { duration: 0.3 } },
                    }}
                    transition={{ ease: "circInOut" }}
                    className=""
                  ></motion.div>
                </DialogOverlay>

                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="fixed inset-0 z-[999] flex items-center justify-center"
                >
                  <DialogPrimitive.Content
                    ref={ref}
                    {...props}
                    className={cn(className)}
                    asChild
                  >
                    <motion.div
                      variants={{
                        closed: {
                          y: 2,
                          opacity: 0,
                          scale: 0.97,
                          transition: { duration: 0.15 },
                        },
                        open: {
                          y: 0,
                          opacity: 1,
                          scale: 1,
                          transition: { duration: 0.3 },
                        },
                      }}
                      transition={{ ease: "easeInOut" }}
                      className="overflow-hidden focus:outline-none sm:max-h-[90dvh]"
                    >
                      {children}
                    </motion.div>
                  </DialogPrimitive.Content>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      </DialogPrimitive.Portal>
    );
  },
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

export default DialogContent;
