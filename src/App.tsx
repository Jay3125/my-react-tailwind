// import { useState } from "react";
// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion";
import { HUIAccordion, HUIPopover, HUIToast, HUITooltip } from "./components/pages";
import { usePopper } from "react-popper";
import SubMenu from "./components/subMenu";

// import CollapseDemo from "./components/CollapseDemo";
// import LeftOffcanvas from "./components/LeftOffcanvas";
// import RightOffcanvas from "./components/RightOffcanvas";
// import TopOffcanvas from "./components/TopOffcanvas";
// import Example from "./components/collapse";
// import Collapse from "./components/collapse";
// // import OffCanvas from "./components/modal";
// import Menu from "./components/menu";
// import Modal from "./components/modal";
// import TopMenu from "./components/topsmenu";
// import { HUIAccordion, HUISwiper } from "./components/pages";
// import React from "react";
// import Modal from "./components/modal";
// import SwiperComponent from "./components/pages/swiper";
function App() {
  let [ isOpen , setIsOpen] = useState(true);

  // function closeModal() {
  //   setIsOpen(false);
  // }

  // function openModal() {
  //   setIsOpen(true);
  // }
  // const faqs = [
  //   {
  //     id: 1,
  //     header: "What is Lorem Ipsum?",
  //     text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  //   },
  //   {
  //     id: 2,
  //     header: "Where does it come from?",
  //     text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `,
  //   },
  //   {
  //     id: 3,
  //     header: "Why do we use it?",
  //     text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`,
  //   },
  //   {
  //     id: 4,
  //     header: "Where can I get some?",
  //     text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
  //   },
  // ];
  // const [activePanelId, setActivePanelId] = useState();

  // const handlePanelToggle = (panelId: any) => {
  //   setActivePanelId((prevActivePanelId) =>
  //     prevActivePanelId === panelId ? null : panelId
  //   );
  // };
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: "arrow", options: { element: arrowElement } }],
  });

  return (
    <div className="App">
      <h1 className="text-2xl text-blue-900 pt-10 font-extrabold">
        Hello Tailwind
      </h1>

      {/* <div className="flex justify-center"> */}
        {/* <Accordion /> */}
        
        {/* <HUIPopover BgColor='bg-sky-500' children='Click For Top' content="Top" title="Top" placement = 'top'/>
      <HUIPopover BgColor='bg-sky-500' children='Click For Bottom' placement='bottom' title='Bottom' content='Bottom' />
      <HUIPopover BgColor='bg-sky-500' children='Click For Left' placement='left' title='Left' content='Left' />
      <HUIPopover BgColor='bg-sky-500' children='Click For Right' placement='right' title='Right' content='Right' />
      </div>
      <div className="top-5 flex justify-center space-x-2">
        <HUITooltip placement="left" className="bg-orange-300 px-3 py-2" title="Tooltip on left">Tooltip on left</HUITooltip>
        <HUITooltip placement="right" className="bg-orange-300 px-3 py-2" title="Tooltip on left">Tooltip on right</HUITooltip>
        <HUITooltip placement="top" className="bg-orange-300 px-3 py-2" title="Tooltip on top">Tooltip on top</HUITooltip>
        <HUITooltip placement="bottom" className="bg-orange-300 px-3 py-2" title="Tooltip on Bottom">Tooltip on Bottom</HUITooltip>
      </div> */}
      <div className="flex justify-center">
        {/* <HUIToast isOpen={isOpen} BgColor="bg-sky-200">
          <HUIToast.Header BgColor="bg-sky-200" >
          <p className="font-bold text-secondary-600 flex items-center">
        <svg
          className="rounded bd-placeholder-img mr-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <rect width="100%" height="100%" fill="#007aff"></rect>
        </svg>
        Bootstrap
      </p>
      <p className="text-secondary-600 opacity-90 pl-14 text-xs">Toast Header </p>
      <button onClick={()=>setIsOpen(false)} className="bg-transparent ml-0 outline-none opacity-80 hover:opacity-100 focus:outline-none dark:text-secondary-600"><svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"></path></svg></button>
          </HUIToast.Header>
          <HUIToast.Body>Toast Body</HUIToast.Body>
        </HUIToast> */}
        <SubMenu className='cursor-auto'/>
      </div>
{/* 
      <div className="mt-5">
      <HUIToast isOpen={isOpen} BgColor="bg-sky-200" className='md:w-3/12 rounded'>
          <HUIToast.Body BgColor="bg-slate-500">Toast Body</HUIToast.Body>
        </HUIToast>
      </div>
      <div className="mt-5">
        <HUIAccordion>
          <HUIAccordion.Button>Accordion 1</HUIAccordion.Button>
          <HUIAccordion.Panel>Accordion panel</HUIAccordion.Panel>
        </HUIAccordion>
      </div> */}
    </div>
  );
}

export default App;
