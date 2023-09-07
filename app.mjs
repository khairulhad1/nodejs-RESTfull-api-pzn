import http from "http";
import { TodolistServis } from "./todolist-servis.mjs";

const srvis = new TodolistServis();
const server = http.createServer((req, res) => {
  res.setHeader("content-type", "application/json");
  if (req.method === "GET") {
    srvis.getTodolist(req, res);
  } else if (req.method === "POST") {
    srvis.createTodolist(req, res);
  } else if (req.method === "PUT") {
    srvis.updateTodolist(req, res);
  } else if (req.method === "DELETE") {
    srvis.deleteTodolist(req, res);
  }
});

server.listen(8000);
