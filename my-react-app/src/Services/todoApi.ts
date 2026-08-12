
import type { ApiTodo } from "../types/todo";//This tells TypeScript what the API data looks like.

const API_URL =
  "https://jsonplaceholder.typicode.com/todos";

export const getTodos = async (): Promise<ApiTodo[]> => { //creates a function called:getTodos()Its job is:Go to the API and get the Todo data.

  const response = await fetch(API_URL);//Send a GET request to the URL we stored in API_URL.

  const data: ApiTodo[] = await response.json();//The API sends JSON data.

  return data;
};