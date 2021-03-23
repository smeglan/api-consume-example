import React, { PureComponent } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import { ITodo } from '../../interfaces/todo';
import { getTodoList } from '../../services/todo.service';
import { AddTodo } from './components/add-todo';
import { TableTodo } from './components/table-todo';

export class Home extends PureComponent<{}, { todoList: ITodo[], showAddModal: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = {
            todoList: [],
            showAddModal: false
        }
    }
    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        const callBack = (todoList: [], error?: string) => {
            if (error) {
                alert("Error al cargar datos");
                return;
            }
            this.setState({ todoList })
        }
        getTodoList(callBack)
    }

    addToList = (item: ITodo) => {
        const todoList = this.state.todoList;
        todoList.push(item);
        this.setState({ todoList })
    }

    deleteFromList = (i: number) => {
        const todoList = [...this.state.todoList];
        todoList.splice(i, 1);
        this.setState({ todoList })
    }

    render() {
        return (
            <>
                <Container>
                    <Row className="m-1 p-2" style={styles.border}>
                        <Col md={9} className="p-2" style={{ ...styles.border, ...{ backgroundColor: '	#707070' } }}>
                            <h3 style={{ color: 'white' }}>Todo List</h3>
                        </Col>
                        <Col md={{ span: 2, offset: 1 }} className="p-2">
                            <Button
                                onClick={() => { this.setState({ showAddModal: true }) }}
                                variant="outline-success"
                                style={{ borderRadius: 60 }}><FaPlus />
                            </Button>
                        </Col>
                    </Row>
                    <TableTodo todoList={this.state.todoList} deleteFromList={this.deleteFromList}></TableTodo>
                </Container>
                <AddTodo
                    show={this.state.showAddModal}
                    onHide={() => this.setState({ showAddModal: false })}
                    addToList={this.addToList}
                    deleteFromList={this.deleteFromList}
                ></AddTodo>
            </>
        )
    }
}
const styles = {
    border: {
        borderWidth: 1,
        borderColor: "#aaaaaa",
        borderStyle: 'solid',
        borderRadius: 10,
    }
};