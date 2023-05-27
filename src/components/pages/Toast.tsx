import React, { ReactNode } from 'react'

interface Props{
    children?:ReactNode
    className?:string
    isOpen?:boolean
    BgColor?:string
}


const Toast = (props:Props) => (<div className={`${props.isOpen ? 'show' : 'hidden'} ${props.className}`}>{props.children}</div>)
Toast.Header = (props:Props) => (<div className={`${props.BgColor} dark:bg-dark-bg text-secondary-500 flex flex-wrap justify-between items-center py-2 px-4  border-b border-secondary-300 dark:border-secondary-800 rounded-t`}>{props.children}</div>)
Toast.Body = (props:Props) => (<div className={`${props.BgColor} p-4 dark:bg-dark-card rounded-b text-sm font-medium text-secondary-500 `}>{props.children}</div>)

export default Toast
