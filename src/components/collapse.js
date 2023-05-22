import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Collapse from 'react-bootstrap/Collapse';

function Example() {
  const [open, setOpen] = useState(false);
  const handelOpen = () =>{
    setOpen(!open)
  }

  return (
    <>

      <button type="button" onClick={handelOpen} className="bg-sky-200 hover:bg-sky-600 hover:text-white py-2 px-3 rounded hs-collapse-toggle" id="hs-unstyled-collapse" data-hs-collapse="#hs-unstyled-collapse-heading">
  Collapse
</button>
<div id="hs-unstyled-collapse-heading" onClick={handelOpen} className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-unstyled-collapse">
  This is a collapse body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
</div>
    </>
  );
}

export default Example;