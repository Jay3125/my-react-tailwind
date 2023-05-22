// import { useState } from "react";
import "./App.css";
// import Accordion from "./components/Accordion";
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
import { HUIAccordion } from "./components/pages";
function App() {
  // let [ setIsOpen] = useState(true);

  // function closeModal() {
  //   setIsOpen(false);
  // }

  // function openModal() {
  //   setIsOpen(true);
  // }

  return (
    <div className="App">
      <h1 className="text-2xl text-blue-900 pt-10 font-extrabold">Hello Tailwind</h1>
      {/* <Modal /> */}
      {/* <Collapse /> */}
      {/* <Menu children={"hello"} /> */}
      {/* <TopMenu></TopMenu> */}
      {/* <CollapseDemo/> */}
      {/* <Example/> */}
      {/* <LeftOffcanvas/> */}
      {/* <RightOffcanvas position='left' /> */}
      {/* <TopOffcanvas/> */}
      {/* <Accordion/> */}
      <HUIAccordion>
        <HUIAccordion.Button>
          Accordio 1
        </HUIAccordion.Button>
        <HUIAccordion.Panel id='ac1' activeId='ac1'>
          Accordio 1 panel
        </HUIAccordion.Panel>
        <HUIAccordion.Button>
          Accordio 1
        </HUIAccordion.Button>
        <HUIAccordion.Panel id='ac2' activeId='ac2'>
          Accordio 1 panel
        </HUIAccordion.Panel>
      </HUIAccordion>
    </div>
  );
}

export default App;
