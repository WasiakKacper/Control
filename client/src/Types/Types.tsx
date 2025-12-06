export interface Task {
  name: string;
  isChecked: boolean;
}

export interface Streak {
  count: number;
  lastActivity: string;
}

export interface Tracker {
  name: string;
  isOpen: boolean;
  tasks: Task[];
  streak: Streak[];
}

export interface User {
  name: string;
  avatar: string;
  trackers: Tracker[];
}
