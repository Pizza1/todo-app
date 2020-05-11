import React from 'react';
import moment from 'moment';
import OneTodo from './OneTodo';
 
const ListTodo = ({ todos, deleteTodo ,getTodos }) => {

  return (
    <ul>
      {
        todos &&
          todos.length > 0 ?
            (
              todos.map(todo => {
                return (
                  <li key={todo._id}>
                      <OneTodo todo={todo} deleteTodo={deleteTodo}
                      getTodos={getTodos}></OneTodo>
                  {/* <div onClick={() => deleteTodo(todo._id)}></div>
                  <div>{todo.action} {moment(todo.duedate).format('MMMM Do, YYYY')}</div> */}
                  </li>
                )
              })
            )
            :
            (
              <li>No todo(s) left</li>
            )
      }
    </ul>
  )
}

export default ListTodo