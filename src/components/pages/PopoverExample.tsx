import { Fragment, ReactNode, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { createPopper } from '@popperjs/core'
import { usePopper } from 'react-popper'
// import { variant } from "../../utilities/types";
// import { classVarients } from "../../utilities/color";
import { Placement } from 'popper.js';

interface Props {
  children?: ReactNode;
  className?: string;
  placement?: Placement;
  // variant?: variant
  size?: "none" | "sm" | "md" | "lg"
  title?: string;
  toggle?: string;
  content?: string;
  BgColor?:string
}
  
const PopoverExample = (props: Props) => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);

  
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: "arrow", options: { element: arrowElement } }],
  });

  if (referenceElement && popperElement) {
    createPopper(referenceElement, popperElement, {
      placement: props.placement,
    });
  }

  // Bg color
  // let BgColor = props.variant !== undefined  : ''
  let ButtonSize = "py-2 px-4"
  switch (props.size) {
    case "none":
      ButtonSize = ""
      break
    case "sm":
      ButtonSize = "py-2 px-3 text-sm"
      break
    case "md":
      ButtonSize = "py-3 px-5"
      break
    case "lg":
      ButtonSize = "py-3 px-5 text-lg"
      break
    default:
      ButtonSize = "py-2 px-4"
  }
  return (
    <>
      <div className="top-16 w-full ">
        <Popover className="relative">
          {({ open }) => (
            <>
              <div className="flex">
                <Popover.Button
                  type="button"
                  ref={setReferenceElement}
                  className={`
                    ${open ? "" : "text-opacity-90"}
                    group inline-flex items-center rounded-md ${props.BgColor} ${ButtonSize} text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span>{props.children}</span>
                </Popover.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel
                  ref={setPopperElement}
                  style={styles.popper}
                  {...attributes.popper}
                  className="absolute left-1/2 z-10 mt-3 w-auto max-w-sm -translate-x-1/2 transform px-4 sm:px-0 ml-2 mr-2"
                >
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-8 bg-white p-2 lg:grid-cols-1">
                      <a
                        href='#'
                        className="-m-3 px-4 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="">
                          <p className="text-sm font-medium text-gray-900">
                            {props.content}
                          </p>
                        </div>
                      </a>

                      <div ref={setArrowElement} style={styles.arrow} />
                    </div>
              
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </>
  );
};

export default PopoverExample;
