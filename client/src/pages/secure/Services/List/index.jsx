import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillTrashFill, BsStar } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import Swal from 'sweetalert2';
import formatPrice from '../../../../util/formatPrice';
import formatServiceType from '../../../../util/formatServiceType';
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
export default function ServiceList() {
  // Estado para armazenar os clientes
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedServiceType, setSelectedServiceType] = useState(null); // New state for the selected service type filter
  // Hook para navegar entre as páginas
  const navigate = useNavigate();

  // Função para buscar a inserção no filtro de busca
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Função para buscar os clientes no backend
  const fetchServices = async () => {
    try {
      // Requisição para buscar os clientes no backend
      const response = await fetch('http://localhost:3333/service', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) {
        const data = await response.json();
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: data.errors[0],
        });
        throw new Error('Network response was not ok');
      }
      // Conversão dos dados para JSON e armazenamento no estado
      const data = await response.json();
      setServices(data);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Não foi possível carregar os serviços.',
      });
    }
  };

  // Função para navegar para a página de edição de serviços
  const handleEditServices = (id) => {
    navigate(`/secure/services/update?id=${id}`);
  };

  // Função para excluir um serviço
  const handleDeleteServices = async (id) => {
    try {
      // Requisição para excluir um serviço no backend enviando o ID como parâmetro
      await fetch(`http://localhost:3333/service/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Serviço excluído com sucesso.',
      });
      // Busca novamente os serviços
      fetchServices();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Não foi possível excluir o Serviço.',
      });
    }
  };

  // Hook para buscar os serviços e atualizar a tabela
  useEffect(() => {
    fetchServices();
  }, []);

  // Implementing the function to handle changes in the select input for service type
  const handleServiceTypeChange = (event) => {
    setSelectedServiceType(event.target.value);
  };

  return (
    <Section>
      <h1>
        <BsStar />
        Serviços
      </h1>
      <div className="actions">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Buscar serviço..."
        />
        {/* Select input for filtering by service type */}
        <select value={selectedServiceType} onChange={handleServiceTypeChange}>
          <option value="">Todos</option>
          <option value="1">Terapia</option>
          <option value="2">Massagem</option>
          <option value="3">Estética</option>
        </select>
        <div className="actions__buttons">
          <Button
            type="button"
            to="/secure/services/create"
            className="button__crud"
          >
            Novo Serviço
          </Button>
        </div>
      </div>
      <TableWrapper>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Descrição</TableHeaderCell>
            <TableHeaderCell>Tipo</TableHeaderCell>
            <TableHeaderCell>Preço</TableHeaderCell>
            <TableHeaderCell>Ações</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services
            .filter((service) => {
              // Se o filtro de tipo de serviço selecionado não for nulo ou vazio, retorna true para todos os serviços com o tipo selecionado
              if (selectedServiceType !== null && selectedServiceType !== '') {
                return (
                  service.service_type_id === parseInt(selectedServiceType, 10)
                );
              }
              // Caso contrário, retorna true para todos os serviços
              return true;
            })
            .filter((service) =>
              Object.values(service).some((value) =>
                String(value).toLowerCase().includes(searchTerm.toLowerCase()),
              ),
            )
            .map((service) => (
              <TableRow key={service.id}>
                <TableDataCell>{service.id}</TableDataCell>
                <TableDataCell>{service.description}</TableDataCell>
                <TableDataCell>
                  {formatServiceType(service.service_type_id)}
                </TableDataCell>
                <TableDataCell>{formatPrice(service.price)}</TableDataCell>
                <TableDataCell>
                  <button
                    type="button"
                    onClick={() => handleEditServices(service.id)}
                  >
                    <FiEdit />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteServices(service.id)}
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
