import { atom } from "jotai";
import { ViewMode } from "../types/viewerType";

export const viewerModeAtom = atom<ViewMode>("single");
