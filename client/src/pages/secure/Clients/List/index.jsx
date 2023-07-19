import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillCheckSquareFill, BsFillTrashFill } from 'react-icons/bs';
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

export default function ClientList() {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const fetchClients = async () => {
    try {
      const response = await fetch('http://localhost:3333/client');
      if (!response.ok) {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Não foi possível carregar os clientes.',
        });
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setClients(data);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Não foi possível carregar os clientes.',
      });
    }
  };

  const handleEditClient = (id) => {
    navigate(`/secure/clients/create?id=${id}`);
  };

  const handleDeleteClient = async (id) => {
    try {
      await fetch(`http://localhost:3333/client/${id}`, {
        method: 'DELETE',
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
        text: 'Não foi possível excluir a Cliente.',
      });
    }
  };

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
          onClick={() => navigate('/secure/clients/create')}
          className="button__crud"
        >
          Novo Cliente
        </Button>
      </div>
      <TableWrapper>
        <TableHeader>
          <TableRow>
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
          {clients
            .filter((client) =>
              Object.values(client).some((value) =>
                String(value).toLowerCase().includes(searchTerm.toLowerCase()),
              ),
            )
            .map((client) => (
              <TableRow key={client.id}>
                <TableDataCell>{client.cpf}</TableDataCell>
                <TableDataCell>{client.name}</TableDataCell>
                <TableDataCell>{client.email}</TableDataCell>
                <TableDataCell>{client.phonenumber}</TableDataCell>
                <TableDataCell>{client.address}</TableDataCell>
                <TableDataCell>{client.birthdate}</TableDataCell>
                <TableDataCell>
                  <button
                    type="button"
                    onClick={() => handleEditClient(client.id)}
                  >
                    <BsFillCheckSquareFill />
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
