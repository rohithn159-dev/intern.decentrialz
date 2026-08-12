export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export interface ApiTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}