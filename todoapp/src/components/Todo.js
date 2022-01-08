


const Todos = ({ todos, deleteTodo }) => {
    return (
        <div className="todos collection">
            {
                todos.length ? (
                    todos.map(todo => {
                        return (
                            <div className="collection-item" key={todo.id}>
                                <span onClick={() => { deleteTodo(todo.id) }}>{todo.content}</span>
                            </div>
                        )
                    })) : (
                    <p className="center">you have no todo's left</p>
                )
            }
        </div>
    )
}

export default Todos;