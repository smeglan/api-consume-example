import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import { ITodo } from '../../../interfaces/todo';
import { addTodo } from '../../../services/todo.service';

export const AddTodo = (props: any) => {
    const { show = false, onHide = () => { }, addToList = (item:any) => { }} = props
    const [title, setTitle] = useState("");
    const [checkComplete, setCheckComplete] = useState(false);

    const onAdded = (data: ITodo) => {
        if(data){
            addToList(data);
            onHide();
        }
    }

    const onAddItem = () => {
        if (title !== "") {
            addTodo(title, checkComplete, onAdded);
        }
    }
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Add item todo list</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-group">
                    <label >Title</label>
                    <input className="form-control" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" onChange={() => setCheckComplete(!checkComplete)} value="" checked={checkComplete} />
                    <label className="form-check-label" >
                        Completed?
                </label>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-secondary" onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick={onAddItem}><FaPlus />Add Todo</Button>
            </Modal.Footer>
        </Modal>

    )
}