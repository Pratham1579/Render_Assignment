async function loadTodos () {
    const res = await fetch('/todos');
    const data = await res.json();
    const todos = data.todos;
    const t = document.getElementById('todos');
    t.innerHTML = "";

    todos.forEach(todo => {
        const div = document.createElement('div');
        div.innerHTML += `
            <div style="display: flex; justify-content: center; align-items: center; gap: 10px">
                <p>
                    ${todo.todo}
                </p>
                <button onclick="deleteTodo(${todo.id})" style="height: 25px;">Delete</button>
            </div>
        `;
        t.appendChild(div);
    });
}

async function addTodo () {
    const input = document.getElementById('todo');
    const todo = input.value;

    await fetch("/todos", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ todo }),
    });

    input.value = "";
    loadTodos();
}

async function deleteTodo(id) {
    console.log(id)
    await fetch(`/todo/${id}`, {
        method: "DELETE",
    });
    loadTodos();
}

loadTodos();