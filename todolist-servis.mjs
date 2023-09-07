export class TodolistServis {
  todolist = ["programer", "zaman", "now"];

  getJsonTodolist() {
    return JSON.stringify({
      code: 200,
      status: "ok",
      data: this.todolist.map((value, index) => {
        return {
          id: index,
          todo: value,
        };
      }),
    });
  }
  getTodolist(req, res) {
    res.write(this.getJsonTodolist());
    res.end();
  }
  createTodolist(req, res) {
    req.addListener("data", (data) => {
      const body = JSON.parse(data.toString());
      this.todolist.push(body.todo);
      res.write(this.getJsonTodolist());
      res.end();
    });
  }

  updateTodolist(req, res) {
    req.addListener("data", (data) => {
      const body = JSON.parse(data.toString());
      if (this.todolist[body.id]) {
        this.todolist[body.id] = body.todo;
      }
      res.write(this.getJsonTodolist());
      res.end();
    });
  }
  deleteTodolist(req, res) {
    req.addListener("data", (data) => {
      const body = JSON.parse(data.toString());
      if (this.todolist[body.id]) {
        this.todolist.splice(body.id, 1);
      }
      res.write(this.getJsonTodolist());
      res.end();
    });
  }
}
