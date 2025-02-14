"use server"

import { auth } from "@src/lib"

export const getUser = async () => (await auth())?.user || null