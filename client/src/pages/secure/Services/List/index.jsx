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

  //  Função para excluir um serviço
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

  return (
    <Section>
      <h1>
        <BsStar />
        Serviços
      </h1>
      <div className="actions">
        {/*
         O filtro de busca filtra os dados
         da tabela por qualquer campo e coluna
        da tabela
         */}
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Buscar serviço..."
        />
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
            // Filtro de busca nos dados da tabela por qualquer campo e coluna
            .filter((service) =>
              // Verifica se algum valor do objeto inclui o termo de busca
              Object.values(service).some((value) =>
                String(value).toLowerCase().includes(searchTerm.toLowerCase()),
              ),
            )
            // Mapeamento dos dados para a tabela de serviços
            .map((service) => (
              <TableRow key={service.id}>
                <TableDataCell>{service.id}</TableDataCell>
                <TableDataCell>{service.description}</TableDataCell>
                <TableDataCell>
                  {/* Formatação do tipo de serviço */}
                  {formatServiceType(service.service_type_id)}
                </TableDataCell>
                {/* Formatação do preço */}
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
