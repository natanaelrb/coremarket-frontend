import { useEffect, useState } from "react";
import { listarClientes } from "../services/clienteService";

function Clientes() {

    const [clientes, setClientes] = useState([]);

    useEffect(() => {

        carregarClientes();

    }, []);

    async function carregarClientes() {

        try {

            const dados = await listarClientes();
            setClientes(dados);

        } catch (error) {

            console.error("Erro ao buscar clientes", error);

        }

    }

    return (
        <div>
            <h1>Clientes</h1>

            {clientes.map(cliente => (
                <div key={cliente.id}>
                    <p>{cliente.nome}</p>
                </div>
            ))}
        </div>
    );
}

export default Clientes;