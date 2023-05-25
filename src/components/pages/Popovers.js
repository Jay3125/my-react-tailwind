import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { createPopper } from '@popperjs/core'
import { Fragment, useState } from 'react'
import { usePopper } from 'react-popper'
import { Link } from 'react-router-dom'



const  PopoverExample = (props) => {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
      modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
    }); 
    createPopper(referenceElement, popperElement, {
        placement : props.placement
      });
  return (
    <>
    <div className="top-16 w-full max-w-sm px-4">
      <Popover className="relative">
        {({ open }) => (
          <>
          <div className='flex gap-4'>
            <Popover.Button 
            type='button'
            ref={setReferenceElement}
              className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>{props.label}</span>
              <ChevronDownIcon
                className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
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
              ref={setPopperElement} style={styles.popper} {...attributes.popper}
              className="absolute left-1/2 z-10 mt-3 w-auto max-w-sm -translate-x-1/2 transform px-4 sm:px-0 ">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-2 lg:grid-cols-1">
                    
                      <a
                        href="#"
                        className="-m-3 px-4 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                
                        <div className="">
                          <p className="text-sm font-medium text-gray-900">
                            {props.title}
                          </p>
                          
                        </div>
                      </a>
                 
                     <div ref={setArrowElement} style={styles.arrow} />
                  </div>
                  <div ref={setArrowElement} style={styles.arrow} />
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
    </>
  )
}
export default PopoverExample
