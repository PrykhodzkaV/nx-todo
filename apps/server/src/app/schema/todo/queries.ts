import { ToDoModel } from "./models";

export const ToDoQueries = {
  todos: async () => {
    return await ToDoModel.find();
  }
};