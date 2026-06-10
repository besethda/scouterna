"use client"

import { RefObject, useEffect } from "react"

export const useOutsideClick = (ref:RefObject<HTMLElement|null>, currentState:number|boolean|null, stateFalse:()=>void) => {
  useEffect(()=> {
    console.log('click')
    const click=(click:MouseEvent)=> {
        if(ref.current && !ref.current.contains(click.target as Node)){
          stateFalse()
        }
      }
      if(currentState){
        document.addEventListener('mousedown', click)
      }
    return()=> {document.removeEventListener("mousedown", click)}
  }, [currentState, ref])
}