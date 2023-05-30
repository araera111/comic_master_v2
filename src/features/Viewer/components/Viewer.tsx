import { useAtomValue } from "jotai";
import { match } from "ts-pattern";
import { viewerModeAtom } from "./stores/viewerStore";
import { SingleView } from "./SingleView";

export const Viewer = () => {
  const viewMode = useAtomValue(viewerModeAtom);
  return match(viewMode)
    .with("single", () => <SingleView />)
    .exhaustive();
};
