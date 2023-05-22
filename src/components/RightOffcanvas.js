import React, { useState } from 'react'

const RightOffcanvas = (props) => {
    const [isOpen,setIsOpen] = useState(true);
    const handleShow =() =>{
        setIsOpen(!isOpen)
    }

    let position = '';
    switch (props.position){
        case 'left' :
            position = '-translate-x-full';
            break
            default :
            console.log(position)
    }
  return (
    <>
     
  <div>

    <button
      className="inline-block rounded bg-sky-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
      type="button"
      data-te-target="#offcanvasExample"
      aria-controls="offcanvasExample"
      data-te-ripple-color="light"
      onClick={handleShow}
      >
      Button with data-te-target
    </button>

    <div
      className={`${isOpen ? position : ''}  fixed bottom-0 left-0 top-0 z-50 flex w-96 max-w-full  flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200`}
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
      onClick={handleShow}
      >
      <div className="flex items-center justify-between p-4">
        <h5
          className="mb-0 font-semibold leading-normal"
          id="offcanvasExampleLabel">
          Offcanvas
        </h5>
        <button
          type="button"
          className="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          data-te-offcanvas-dismiss>
          <span
            className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        </button>
      </div>
      <div className="flex-grow overflow-y-auto p-4">
        <div>
          Some text as placeholder. In real life you can have the elements
          you have chosen. Like, text, images, lists, etc.
        </div>

      </div>
    </div>
  </div>
</>
  )
}

export default RightOffcanvas
