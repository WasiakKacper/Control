export interface Task {
  name: string;
  isChecked: boolean;
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
}

export interface User {
  name: string;
  avatar: string;
  trackers: Tracker[];
}
