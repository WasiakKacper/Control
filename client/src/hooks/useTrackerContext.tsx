import { TrackerContext } from "../context/TrackerContext";
import { useContext } from "react";

export function useTrackerContext() {
  const context = useContext(TrackerContext);

  if (context === undefined) {
    throw new Error("Use TrackerContext whit TrackerContext.Provider");
  }

  return context;
}
