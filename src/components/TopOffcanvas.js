import React, { useState } from 'react'

const TopOffcanvas = () => {
    const [isOpen,setIsOpen] = useState(false);
    const handleShow = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
      <button
  className="mr-1.5 inline-block rounded bg-sky-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
  type="button"
  data-te-target="#offcanvasTop"
  aria-controls="offcanvasTop"
  data-te-ripple-color="light"
  onClick={handleShow}
  >
  Toggle top offcanvas
</button>

<div
  className={` ${isOpen ? '-translate-y-full' : ''} fixed bottom-0 left-0 right-0 top-0 z-[1045] flex h-1/3 max-h-full max-w-full  flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 `}
  tabIndex="-1"
  id="offcanvasTop"
  aria-labelledby="offcanvasTopLabel"
  onClick={handleShow}
  >
  <div className="flex items-center justify-between p-4">
    <h5 className="mb-0 font-semibold leading-normal" id="offcanvasTopLabel">
      Offcanvas top
    </h5>
    <button
      type="button"
      className="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
    >
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
  <div className="flex-grow overflow-y-auto p-4">...</div>
</div>
    </>
  )
}

export default TopOffcanvas
