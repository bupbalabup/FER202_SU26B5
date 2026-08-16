import Counter from "./Components/Counter";
import Input from "./Components/Input";
import ToggleVisibility from "./Components/ToggleVisibility";
import ColorSwitcher from "./Components/ColorSwitcher";
import SearchFilter from "./Components/SearchFilter";
import TodoList from "./Components/TodoList";
import DragDropList from "./Components/DragDropList";
import { Container } from "react-bootstrap";

function App() {
    return (
        <Container>
            <Counter />
            <hr />
            <Input />
            <hr />
            <ToggleVisibility />
            <hr />
            <TodoList />
            <hr />
            <ColorSwitcher />
            <hr />
            <SearchFilter />
            <hr />
            <DragDropList />
        </Container>
    )
}

export default App;