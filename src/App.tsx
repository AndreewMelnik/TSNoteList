import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import "./style.scss"
import { Main } from "./components/MainPage";

const App: React.FC = () => {
    return (
        <Container className="my-4 w-50">
            <Main/>
        </Container>
    );
}

export default App;
