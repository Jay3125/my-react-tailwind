import React, { ReactNode } from "react";
import  {  Placement } from "tippy.js"; // Import tippy.js and its types
import "tippy.js/dist/tippy.css"; // Import tippy.css styles
import Tippy from "@tippyjs/react/headless";

interface Props {
  children?: ReactNode;
  placement: Placement;
  className?: string;
  title?: string;
}

const Tooltips = (props: Props) => {
  return (
    <div>
      <Tippy
        placement={props.placement}
        render={(attrs) => (
          <div
            className="bg-white px-2 w-full border shadow-md rounded"
            tabIndex={-1}
            {...attrs}
          >
            {props.title}
            
          </div>
        )}
      >
        <button className={props.className}>{props.children}</button>
      </Tippy>
    </div>
  );
};

export default Tooltips;
