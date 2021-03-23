import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { FaThumbsUp, FaTimesCircle, FaTrash } from 'react-icons/fa';
import { ITodo } from '../../../interfaces/todo';
import { deleteTodo } from '../../../services/todo.service';

export const TableTodo = (props: { todoList: ITodo[], deleteFromList: (i: number) => void }) => {
    const { todoList, deleteFromList = (i: number) => { } } = props
    const deleteItem = (todo: ITodo, i: number) => {
        deleteTodo(todo.id, () => deleteFromList(i))
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Completed</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {todoList.map((todo: ITodo, i: number) => {
                        return (
                            <tr key={"todo" + i}>
                                <td>{todo.id}</td>
                                <td>{todo.title}</td>
                                <td>{todo.completed ? <FaThumbsUp color="#22bb33" /> : <FaTimesCircle color="#bb2124" />}</td>
                                <td><Button variant="outline-dark" onClick={() => deleteItem(todo, i)}><FaTrash /></Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )

}