import React, { createContext, useState } from "react";
import type { ReactNode } from "react";

interface TasksContextType {
  name: string;
  isChecked: boolean;
}

interface TasksProviderType {
  children: ReactNode;
}

type Tasks = {
  name: string;
  isChecked: boolean;
};

const TasksContext = createContext<TasksContextType | null>(null);

export const TasksProvider = ({ children }: TasksProviderType) => {
  const [tasks, setTasks] = useState<Tasks[]>([
    { name: "Lorem", isChecked: true },
  ]);
};

export default TasksContext;
