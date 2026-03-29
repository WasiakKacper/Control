import { useState, useMemo } from "react";
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

  //Group of function for operations on trackers
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

  //Group of function for operations on tasks
  const handleAddTask = (taskName: string) => {
    if (taskName !== "") {
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
    }
  };

  const handleToogleTask = (taskId: number) => {
    setTrackers((prevTrackers) =>
      prevTrackers.map((tracker) =>
        tracker.id === selectedId
          ? {
              ...tracker,
              tasks: tracker.tasks.map((task) =>
                task.id === taskId
                  ? { ...task, isComplete: !task.isComplete }
                  : task,
              ),
            }
          : tracker,
      ),
    );
  };

  const handleRemoveTask = (idToRemove: number) => {
    setTrackers((prevTrackers) =>
      prevTrackers.map((tracker) =>
        tracker.id === selectedId
          ? {
              ...tracker,
              tasks: tracker.tasks.filter((task) => task.id !== idToRemove),
            }
          : tracker,
      ),
    );
  };

  const { completionPercentage } = useMemo(() => {
    const currentTracker = trackers.find((t) => t.id === selectedId);

    if (!currentTracker || currentTracker.tasks.length === 0)
      return { completionPercentage: 0 };

    const total = currentTracker.tasks.length;
    const completed = currentTracker.tasks.filter((t) => t.isComplete).length;
    const percentage = Math.round((completed / total) * 100);

    return { completionPercentage: percentage };
  }, [trackers, selectedId]);

  return {
    trackers,
    updateTrackerName,
    handleAdd,
    handleRemove,
    selectedId,
    setSelectedId,
    handleAddTask,
    handleToogleTask,
    handleRemoveTask,
    completionPercentage,
  };
}
