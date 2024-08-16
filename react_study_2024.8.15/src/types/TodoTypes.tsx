export type Task = {
  task: string;
  title: string;
  completed: boolean;
};

export type TaskInputProps = {
  addTask: (task: string) => void;
};

export type TaskItemProps = {
  task: Task;
  index: number;
  deleteTask: (index: number) => void;
  toggleComplete: (index: number) => void;
};

export type TaskListProps = {
  tasks: Task[];
  deleteTask: (index: number) => void;
  toggleComplete: (index: number) => void;
};

export type TaskSectionProps = {
  tasks: Task[];
  addTask: (task: string) => void;
  deleteTask: (index: number) => void;
  toggleComplete: (index: number) => void;
};

export type WeatherData = {
  main: Main;
  name: string;
};

export type Main = {
  temp: number;
  humidity: number;
};