import { Disclosure } from "@headlessui/react";
import  { ReactNode } from "react";
interface Props {
  children?: ReactNode;
  className?: string;
  id?: any;
  active?: string | number | undefined;
  onClick?: () => void;
}

const Accordion = (props: Props) => (
  <>
    <Disclosure>{({ open }) => <>{props.children}</>}</Disclosure>
  </>
);
Accordion.Button = (props: Props) => (
  <Disclosure.Button
    onClick={props.onClick}
    className={`"flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"`}
  >
    {props.children}
  </Disclosure.Button>
);


Accordion.Panel = (props: Props) => (
  <Disclosure.Panel
    className={`${
      props.active === props.id ? "show" : "hidden"
    } px-4 pt-4 pb-2 text-sm text-gray-500`}
  >
    {props.children}
  </Disclosure.Panel>
);

export default Accordion