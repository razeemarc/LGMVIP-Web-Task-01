import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');

  const handleAddToDo = () => {
    if (toDo.trim() !== '') {
      setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
      setToDo('');
    }
  };

  const handleToggleStatus = (id) => {
    const updatedToDos = toDos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: !todo.status };
      }
      return todo;
    });
    setToDos(updatedToDos);
  };

  const handleRemoveToDo = (id) => {
    const updatedToDos = toDos.filter((todo) => todo.id !== id);
    setToDos(updatedToDos);
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
  <br />
  <h2>Whoop, it's {new Date().toLocaleDateString('en-US', { weekday: 'long' })} 🌝 ☕
  </h2>
</div>

      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add ToDos..."
        />
        <i onClick={handleAddToDo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((todo) => (
          <div className="todo" key={todo.id}>
            <div className="left">
              <input
                onChange={() => handleToggleStatus(todo.id)}
                checked={todo.status}
                type="checkbox"
              />
              <p className={todo.status ? 'completed' : ''}>{todo.text}</p>
            </div>
            <div className="right">
              <i onClick={() => handleRemoveToDo(todo.id)} className="fas fa-times"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
