import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillTrashFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { TfiAgenda } from 'react-icons/tfi';
import Swal from 'sweetalert2';
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
import formatStatusId from '../../../../util/formatStatusId';
import formatDate from '../../../../util/formatDate';

// Página de listagem de agendamentos
export default function ScheduleList() {
  // Estado para armazenar os agendamentos
  const [schedules, setSchedules] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // Hook para navegar entre as páginas
  const navigate = useNavigate();

  // Função para buscar a inserção no filtro de busca
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Função para buscar os agendamentos no backend
  const fetchSchedules = async () => {
    try {
      // Requisição para buscar os agendamentos no backend
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/scheduling`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
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
      setSchedules(data);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Não foi possível carregar os agendamentos.',
      });
    }
  };

  // Função para navegar para a página de edição de agendamentos
  const handleEditServices = (id) => {
    navigate(`/secure/schedules/update?id=${id}`);
  };

  //  Função para excluir um agendamento
  const handleDeleteServices = async (id) => {
    try {
      // Requisição para excluir um agendamento no backend enviando o ID como parâmetro
      await fetch(`${process.env.REACT_APP_API_URL}/scheduling/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Agendamento excluído com sucesso.',
      });
      // Busca novamente os agendamentos
      fetchSchedules();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Não foi possível excluir o Agendamento.',
      });
    }
  };

  // Hook para buscar os agendamentos e atualizar a tabela
  useEffect(() => {
    fetchSchedules();
  }, []);

  return (
    <Section>
      <h1>
        <TfiAgenda />
        Agendamentos
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
          placeholder="Buscar agendamento..."
        />
        <div className="actions__buttons">
          <Button
            type="button"
            to="/secure/schedules/create"
            className="button__crud"
          >
            Novo agendamento
          </Button>
        </div>
      </div>
      <TableWrapper>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Data da Consulta</TableHeaderCell>
            <TableHeaderCell>Data da Registro</TableHeaderCell>
            <TableHeaderCell>Serviço</TableHeaderCell>
            <TableHeaderCell>Cliente</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Ações</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {schedules
            // Filtro de busca nos dados da tabela por qualquer campo e coluna
            .filter((term) =>
              // Verifica se algum valor do objeto inclui o termo de busca
              Object.values(term).some((value) =>
                String(value).toLowerCase().includes(searchTerm.toLowerCase()),
              ),
            )
            // Mapeamento dos dados para a tabela de agendamentos
            .map((schedule) => (
              <TableRow key={schedule.id}>
                <TableDataCell>{schedule.consultation_date}</TableDataCell>
                <TableDataCell>
                  {formatDate(schedule.date_request)}
                </TableDataCell>
                <TableDataCell>{schedule.service_id}</TableDataCell>
                <TableDataCell>{schedule.client_id}</TableDataCell>
                <TableDataCell>
                  {formatStatusId(schedule.status_id)}
                </TableDataCell>
                <TableDataCell>
                  <button
                    type="button"
                    onClick={() => handleEditServices(schedule.id)}
                  >
                    <FiEdit />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteServices(schedule.id)}
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
