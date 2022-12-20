import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import "./style.scss"
import { Main } from "./components/MainPage";

const App: React.FC = () => {
    return (
        <Container className="main-container">
            <Main/>
        </Container>
    );
}

export default App;
