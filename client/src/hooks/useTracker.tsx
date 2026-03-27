import { useState } from "react";
import type { trackerType } from "../Types/Types";

export function useTracker() {
  const [trackers, setTrackers] = useState<trackerType[]>([
    {
      id: Date.now(),
      name: "Tracker",
      tasks: [{ id: Date.now(), name: "Create first task", isComplete: false }],
    },
  ]);

  const [selectedId, setSelectedId] = useState<number | undefined>(
    trackers[0]?.id,
  );

  const handleAdd = () => {
    const newTracker = {
      id: Date.now(),
      name: trackers.length != 0 ? "Tracker" + trackers.length : "Tracker",
      tasks: [{ id: Date.now(), name: "Create first task", isComplete: false }],
    };
    setTrackers((prev) => [...prev, newTracker]);
  };

  const handleRemove = (idToRemove: number) => {
    setTrackers((prevTrackers) =>
      prevTrackers.filter((tracker) => tracker.id !== idToRemove),
    );
  };

  const updateTrackerName = (newName: string) => {
    setTrackers((prevTrackers) =>
      prevTrackers.map((tracker) =>
        tracker.id === selectedId ? { ...tracker, name: newName } : tracker,
      ),
    );
  };

  const handleAddTask = (taskName: string) => {
    setTrackers((prevTrackers) =>
      prevTrackers.map((tracker) =>
        tracker.id === selectedId
          ? {
              ...tracker,
              tasks: [
                ...tracker.tasks,
                { id: Date.now(), name: taskName, isComplete: false },
              ],
            }
          : tracker,
      ),
    );
  };

  return {
    trackers,
    updateTrackerName,
    handleAdd,
    handleRemove,
    selectedId,
    setSelectedId,
    handleAddTask,
  };
}
