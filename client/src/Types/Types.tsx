export interface Task {
  name: string;
  isChecked: boolean;
}

/* MonthProps */
export interface MonthProps {
  month: number;
  year: number;
  visitedDays?: number[];
}

export interface VisitedDays {
  [year: number]: {
    [month: number]: number[];
  };
}

export interface StreakType {
  count: number;
  lastActivity: string;
}

export interface Tracker {
  name: string;
  isOpen: boolean;
  tasks: Task[];
  streak: StreakType[];
  calendar: VisitedDays[];
}

export interface User {
  name: string;
  avatar: string;
  trackers: Tracker[];
}
