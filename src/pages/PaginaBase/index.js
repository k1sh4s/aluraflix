import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import { Outlet } from "react-router-dom";

function PaginaBase() {
    return (
        <main>
            <Cabecalho />
                <Container>
                    <Outlet />
                </Container>
            <Rodape />
        </main>
    )
}

export default PaginaBase;