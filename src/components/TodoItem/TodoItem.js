import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export const TodoItem = ({
  todo,
  deleteTodo,
  changeCompleteness,
  changeTodoTitle,
  areAllToggled,
  setTogglingAll,
}) => {
  const [isEditingNow, setEditing] = useState(false);
  const [choosenTodoId, setChoosenTodoId] = useState(null);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleOnBlur = () => {
    if (newTitle.trim()) {
      changeTodoTitle(choosenTodoId, newTitle.trim());
      setEditing(!isEditingNow);
    } else {
      deleteTodo(todo.id);
    }
  };

  const handleKeysPressing = (event) => {
    switch (event.key) {
      case 'Escape':
        setNewTitle(todo.title);
        setEditing(!isEditingNow);
        break;
      case 'Enter':
        if (newTitle.trim()) {
          changeTodoTitle(choosenTodoId, newTitle.trim());
          setEditing(!isEditingNow);
          break;
        }

        deleteTodo(todo.id);
        break;
      default:
    }
  };

  return (
    <li
      className={cn({
        completed: todo.completed,
        editing: choosenTodoId === todo.id && isEditingNow,
      })}
      onDoubleClick={() => {
        setEditing(true);
        setChoosenTodoId(todo.id);
      }}
    >
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={todo.completed}
          onChange={() => {
            changeCompleteness(todo.id);
            setTogglingAll(false);
          }}
        />

        <label>{todo.title}</label>

        <button
          type="button"
          className="destroy"
          onClick={() => deleteTodo(todo.id)}
        />
      </div>

      {isEditingNow && (
        <input
          type="text"
          className="edit"
          value={newTitle}
          onChange={event => setNewTitle(event.target.value)}
          onKeyDown={event => handleKeysPressing(event)}
          autoFocus
          onBlur={() => {
            setEditing(!isEditingNow);
            handleOnBlur();
          }}
        />
      )}
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  changeCompleteness: PropTypes.func.isRequired,
  changeTodoTitle: PropTypes.func.isRequired,
  areAllToggled: PropTypes.func.isRequired,
  setTogglingAll: PropTypes.func.isRequired,
};
