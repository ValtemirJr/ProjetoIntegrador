import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillTrashFill } from 'react-icons/bs';
import { FaUserEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { PiUserList } from 'react-icons/pi';
import Button from '../../../../components/Button';
import {
  Section,
  TableWrapper,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableDataCell,
} from './styles';

// Página de listagem de clientes
export default function ClientList() {
  // Estado para armazenar os clientes
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // Hook para navegar entre as páginas
  const navigate = useNavigate();

  // Função para buscar a inserção no filtro de busca
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Função para buscar os clientes no backend
  const fetchClients = async () => {
    try {
      // Requisição para buscar os clientes no backend
      const response = await fetch(`${process.env.REACT_APP_API_URL}/client`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      // Verificação de erro na requisição
      if (!response.ok) {
        const data = await response.json();
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: data.errors[0],
        });
        throw new Error('Network response was not ok');
      }
      // Conversão dos dados para JSON
      const data = await response.json();
      // Armazenamento dos dados no estado
      setClients(data);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Não foi possível carregar os clientes.',
      });
    }
  };

  // Função para navegar para a página de edição de clientes
  const handleEditClient = (id) => {
    navigate(`/secure/clients/update?id=${id}`);
  };

  // Função para deletar um cliente
  const handleDeleteClient = async (id) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/client/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Cliente excluído com sucesso.',
      });
      fetchClients();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Não foi possível excluir o Cliente.',
      });
    }
  };

  // Hook para buscar os clientes no backend ao carregar a página
  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <Section>
      <h1>
        <PiUserList />
        Clientes
      </h1>
      <div className="actions">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Buscar cliente..."
        />
        <Button
          type="button"
          to="/secure/clients/create"
          className="button__crud"
        >
          Novo Cliente
        </Button>
      </div>
      <TableWrapper>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>CPF</TableHeaderCell>
            <TableHeaderCell>Nome</TableHeaderCell>
            <TableHeaderCell>E-mail</TableHeaderCell>
            <TableHeaderCell>Telefone</TableHeaderCell>
            <TableHeaderCell>Endereço</TableHeaderCell>
            <TableHeaderCell>Data de Nascimento</TableHeaderCell>
            <TableHeaderCell>Ações</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Mapeamento dos clientes para exibição na tabela */}
          {clients
            // Filtra os clientes de acordo com o termo de busca
            .filter((client) =>
              Object.values(client).some((value) =>
                String(value).toLowerCase().includes(searchTerm.toLowerCase()),
              ),
            )
            // Mapeia os clientes filtrados para exibição na tabela
            // Caso nõa haja filtro, exibe todos os clientes
            .map((client) => (
              <TableRow key={client.id}>
                <TableDataCell>{client.id}</TableDataCell>
                <TableDataCell>{client.cpf}</TableDataCell>
                <TableDataCell>{client.name}</TableDataCell>
                <TableDataCell>{client.email}</TableDataCell>
                <TableDataCell>{client.phonenumber}</TableDataCell>
                <TableDataCell>{client.address}</TableDataCell>
                <TableDataCell>{client.date_birth}</TableDataCell>
                <TableDataCell>
                  <button
                    type="button"
                    onClick={() => handleEditClient(client.id)}
                  >
                    <FaUserEdit />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteClient(client.id)}
                  >
                    <BsFillTrashFill />
                  </button>
                </TableDataCell>
              </TableRow>
            ))}
        </TableBody>
      </TableWrapper>
    </Section>
  );
}
