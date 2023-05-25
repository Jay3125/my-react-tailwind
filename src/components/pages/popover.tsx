import {
    CSSProperties,
    ReactNode,
  } from "react";
  import { Popover, Transition } from "@headlessui/react";
  import { Placement, createPopper } from "@popperjs/core";
  import { Fragment } from "react";
  import { Link } from "react-router-dom";
  import React from "react";
  interface Props {
    children?: ReactNode;
    className?: string;
    placement?: Placement;
    referenceElement?: any;
    popperElement?: any;
    arrowElement?: any;
    setReferenceElement?: any;
    setPopperElement?: any;
    open?: boolean;
    ref?:any
    style?:CSSProperties
  

  }
  const PopoverExample = (props: Props) => {
  
    return (
      <Popover className={props.className}>
        {({ open }) => (
          <>
            <div className="flex gap-4">{props.children}</div>
          </>
        )}
      </Popover>
    );
  };
  
  PopoverExample.Button = (props: Props) => {
    
    return (
      <Popover.Button
        type="button"
        ref={props.ref}
        
        className={`
        ${props.open ? "" : "text-opacity-90"}
        group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        {props.children}
      </Popover.Button>
    );
  };
  
  PopoverExample.Panel = (props: Props) => {
    // createPopper(props.referenceElement, props.popperElement, {
    //   placement: props.placement,
    // });
    if (props.referenceElement && props.popperElement) {
      createPopper(props.referenceElement, props.popperElement, {
        modifiers: [{ name: 'arrow', options: { element: props.arrowElement } }],
        placement: 'bottom',
      });
    }
    return (
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
    
          ref={props.ref}
          style={props.style}
          className="absolute left-1/2 z-10 mt-3 w-auto max-w-sm -translate-x-1/2 transform px-4 sm:px-0 "
        >
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="relative grid gap-8 bg-white p-2 lg:grid-cols-1">
           
              <Link
               
                to="#"
                className="-m-3 px-4 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
              >
                <div className="">
                  <p className="text-sm font-medium text-gray-900">
                    {props.children}
                  </p>
                </div>
            </Link>
            </div>
          </div>
        <div ref={props.ref} style={props.style} />
        </Popover.Panel>
      </Transition>
    );
  };
  export default PopoverExample;
  