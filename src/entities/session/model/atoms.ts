import { atom } from "recoil";
import { ISession } from "./types.ts";

export const sessionState = atom<ISession | null>({
    key: 'sessionState',
    default: null
})