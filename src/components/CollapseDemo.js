import { useState } from "react";

function CollapseDemo() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <a
        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase bg-sky-200 text-dark"
        href="#collapseExample"
        role="button"
        aria-expanded={!isCollapsed}
        aria-controls="collapseExample"
        onClick={handleCollapseToggle}
      >
        Link with href
      </a>
      <button
        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase bg-sky-200 text-dark"
        type="button"
        aria-expanded={!isCollapsed}
        aria-controls="collapseExample"
        onClick={handleCollapseToggle}
      >
        Button with data-te-target
      </button>
      <div
        className={`${isCollapsed ? "hidden" : ""}`}
        id="collapseExample"
      >
        <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 dark:text-neutral-50">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      </div>
    </>
  );
}

export default CollapseDemo;
