import { useState } from "react";


const AddTodo = ({ addTodo }) => {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(content)
        setContent('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> Add new todo:</label>
                <input type="text"
                    onChange={(e) => setContent(e.target.value)}
                    value={content} />
            </form>
        </div>
    );
}

export default AddTodo;