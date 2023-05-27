import { Disclosure } from "@headlessui/react";
import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
  className?: string;
  id?: any;
  active?: string | number | undefined;
  onClick?: () => void;
  isOpen?: boolean;
}

const Accordion = (props: Props) => (
  <>
    <Disclosure>{({ open }) => <>{props.children}</>}</Disclosure>
  </>
);
Accordion.Button = (props: Props) => (
  <Disclosure.Button
    className={`" flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium  hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75"`}
  >
    {props.children}
  </Disclosure.Button>
);

Accordion.Panel = (props: Props) => (
  <Disclosure.Panel
    className={`${
      props.isOpen ? props.id === props.active : ""
    } px-4 pt-4 pb-2 text-sm text-gray-500`}
  >
    {props.children}
  </Disclosure.Panel>
);

export default Accordion;
