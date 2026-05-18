'use client'

import { createContext } from "react"
import type { MessagesEngType } from "@/messages/en"

export const TranslateContent = createContext<MessagesEngType | null>(null)
