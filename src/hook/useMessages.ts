'use client'

import { useContext } from "react";
import { TranslateContent } from "@/translateContent/translate";

const useMessages = () => {
  return useContext(TranslateContent)
}

export default useMessages