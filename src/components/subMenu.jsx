import React, { useState } from "react";

const SubMenu = (props) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isOpen1, setIsOpen1] = useState(false);
//   return (
//     <div>
//       <ul className={props.className}>
//         <li>1</li>
//         <li>2</li>
//         <li onClick={() => setIsOpen(!isOpen)}>
//           3
//           <ul className={`${isOpen ? "show" : "hidden"}`}>
//             <li>3.1</li>
//             <li>3.2</li>
//             <li onClick={()=>setIsOpen1(!isOpen1)}>
//               3.3
//               <ul className={`${isOpen1 ? "show" : "hidden"}`}>
//                 <li>3.3.1</li>
//                 <li>3.3.2</li>
//                 <li>3.3.3</li>
//               </ul>
//             </li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//   );
// };
const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);


  return (
    <ul className={props.className}>
    <li>1</li>
    <li>2</li>
    <li onClick={(e) => {
      e.stopPropagation(); // Stop the click event from propagating to the parent element
      setIsOpen(!isOpen);
    }}>
      3
      <ul className={`${isOpen ? 'show' : 'hidden'}`}>
        <li>3.1</li>
        <li>3.2</li>
        <li onClick={(e) => {
          e.stopPropagation(); // Stop the click event from propagating to the parent element
          setIsOpen1(!isOpen1);
        }}>
          3.3
          <ul className={`${isOpen1 ? 'show' : 'hidden'}`}>
            <li>3.3.1</li>
            <li>3.3.2</li>
            <li>3.3.3</li>
          </ul>
        </li>
        <li onClick={(e)=>{
          e.stopPropagation();
          setIsOpen2(!isOpen2)
        }}>4
        <ul className={`${isOpen2 ? 'show' : 'hidden'}`}>
          <li>4.1</li>
        </ul>
        </li>
      </ul>
    </li>
  </ul>
);
};
export default SubMenu;
