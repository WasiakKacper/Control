import { useTrackerContext } from "./useTrackerContext";
import type { trackerType } from "../Types/Types";

export function useCurrentTracker(): trackerType | undefined {
  const { trackers, selectedId } = useTrackerContext();
  const currentTracker = trackers.find((t) => t.id === selectedId);

  return currentTracker;
}
