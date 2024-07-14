import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import React, { ComponentProps, useEffect, useId, useState } from "react";
import { cn } from "../../../utilities/cn";

interface IInput extends ComponentProps<"input"> {
  Label?:
    | string
    | React.FC<
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
      >;
  Icon?: React.FC<
    React.DetailedHTMLProps<React.HTMLAttributes<SVGAElement>, SVGAElement>
  >;
  ErrorIcon?: React.FC<
    React.DetailedHTMLProps<React.HTMLAttributes<SVGAElement>, SVGAElement>
  >;
  AbsoluteContainer?: React.FC<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  >;
  error?: string;
}

const Input = ({
  Label,
  Icon,
  ErrorIcon,
  AbsoluteContainer,
  error,
  ...rest
}: IInput) => {
  const errorAnimationControls = useAnimationControls();
  const id = useId();

  const errorAnimation = async () => {
    if (error) {
      await errorAnimationControls.start("error");
      errorAnimationControls.start("vibrate");
    } else {
      errorAnimationControls.start("no_error");
    }
  };

  useEffect(() => {
    errorAnimation();
  }, [error]);

  return (
    <div className="relative">
      {Label && (
        <label
          className={`mb-2.5 flex ${
            error ? "text-red-700" : "text-gray-800"
          } w-max items-center justify-start gap-1 text-sm font-medium transition-colors duration-150`}
          htmlFor={id}
        >
          <motion.div
            animate={errorAnimationControls}
            initial="no_error"
            variants={{
              no_error: {
                width: 0,
                opacity: 0,
                filter: `blur(4px)`,
                scale: 0.5,
              },
              error: {
                width: "1.25rem",
                opacity: 1,
                filter: `blur(0px)`,
                scale: 1,
              },
              // vibrate: {
              //   scale: [1, 1.2, 1],
              //   transition: {
              //     duration: 0.2,
              //     repeat: 2,
              //   },
              // },
            }}
            className=""
          >
            <>
              {ErrorIcon ? (
                <ErrorIcon />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="aspect-square text-red-700"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M3 10.417c0-3.198 0-4.797.378-5.335.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991z"
                  />
                  <path
                    fill="white"
                    d="M12 7.25a.75.75 0 01.75.75v4a.75.75 0 01-1.5 0V8a.75.75 0 01.75-.75M12 16a1 1 0 100-2 1 1 0 000 2"
                  />
                </svg>
              )}
            </>
          </motion.div>

          <motion.span>
            {typeof Label === "function" ? <Label /> : Label}
          </motion.span>
        </label>
      )}

      <motion.div
        animate={errorAnimationControls}
        variants={{
          vibrate: {
            x: [0, -3, 0, 3, 0],
            transition: {
              duration: 0.15,
              repeat: 3,
            },
          },
        }}
        className="relative"
      >
        <input
          id={id}
          className={cn(
            `peer w-full rounded-xl border-[1.5px] px-3 py-3 text-sm text-gray-800 transition-all duration-75 focus:outline-none focus:ring-2 ${error ? "border-red-600 focus:border-gray-100 focus:ring-red-700" : "border-gray-300 focus:border-gray-300 focus:ring-skin-primary"} focus:ring-offset-2 focus:ring-offset-inherit`,
            `${Icon && "pl-10"}`,
          )}
          {...rest}
        />

        {/* icon */}
        {Icon && (
          <span
            className={`absolute inset-y-0 left-0 flex items-center justify-center p-3 ${error ? "text-red-700 peer-focus:text-red-700" : "text-gray-500 peer-focus:text-skin-primary"} `}
          >
            <Icon />
          </span>
        )}
        {/* icon */}
      </motion.div>

      {/* Absolute Container */}
      {AbsoluteContainer && <AbsoluteContainer />}
      {/* Absolute Container */}

      <div className="mt-1 min-h-4">
        <AnimatePresence>
          {error && (
            <motion.p
              initial="no_error"
              animate="error"
              exit="no_error"
              variants={{
                no_error: {
                  opacity: 0,
                  filter: `blur(2px)`,
                },
                error: {
                  opacity: 1,
                  filter: `blur(0px)`,
                },
              }}
              className="text-xs text-red-700"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Input;
