import { createContext } from "react";
import type { trackerType } from "../Types/Types";

interface TrackerContextType {
  trackers: trackerType[];
  updateTrackerName: (newName: string) => void;
  handleAdd: () => void;
  handleRemove: (idToRemove: number) => void;
  selectedId: number | undefined;
  setSelectedId: React.Dispatch<React.SetStateAction<number | undefined>>;
  handleAddTask: (taskName: string) => void;
  handleToogleTask: (taskId: number) => void;
  handleRemoveTask: (idToRemove: number) => void;
  completionPercentage: number;
}

export const TrackerContext = createContext<TrackerContextType | undefined>(
  undefined,
);
