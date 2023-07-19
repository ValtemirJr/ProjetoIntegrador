import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillCheckSquareFill, BsFillTrashFill } from 'react-icons/bs';
import Swal from 'sweetalert2';
import { RiServiceLine } from 'react-icons/ri';
import {
  Section,
  TableWrapper,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableDataCell,
} from './styles';
import formatDate from '../../../util/formatDate';

export default function Solicitations() {
  const [solicitations, setSolicitations] = useState([]);
  const [dateFilter, setDateFilter] = useState('');
  const navigate = useNavigate();

  const fetchSolicitations = async () => {
    try {
      const response = await fetch('http://localhost:3333/client');
      if (!response.ok) {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Não foi possível carregar as solicitações de contato.',
        });
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSolicitations(data);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Não foi possível carregar as solicitações de contato.',
      });
    }
  };

  const handleAcceptSolicitation = (id) => {
    navigate(`/secure/clients/update?id=${id}`);
  };

  const handleDeleteSolicitation = async (id) => {
    try {
      await fetch(`http://localhost:3333/client/${id}`, {
        method: 'DELETE',
      });
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Solicitação de contato excluída com sucesso.',
      });
      fetchSolicitations();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Não foi possível excluir a solicitação de contato.',
      });
    }
  };

  const filteredSolicitations = solicitations.filter((solicitation) => {
    if (!dateFilter) {
      return true;
    }

    const formattedDate = new Date(solicitation.date_request)
      .toISOString()
      .substr(0, 10);
    return formattedDate === dateFilter;
  });

  useEffect(() => {
    fetchSolicitations();
  }, []);

  return (
    <Section>
      <h1>
        <RiServiceLine />
        Solicitações de Contato
      </h1>
      <div className="date-filter-wrapper">
        <label htmlFor="date-filter" className="date-filter-label">
          Filtrar por data:
        </label>
        <input
          className="date-filter"
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        />
      </div>
      <TableWrapper>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Nome</TableHeaderCell>
            <TableHeaderCell>E-mail</TableHeaderCell>
            <TableHeaderCell>Telefone</TableHeaderCell>
            <TableHeaderCell>Objetivo</TableHeaderCell>
            <TableHeaderCell>Data da Solicitação</TableHeaderCell>
            <TableHeaderCell>Ações</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredSolicitations.map((solicitation) => (
            <TableRow key={solicitation.id}>
              <TableDataCell>{solicitation.name}</TableDataCell>
              <TableDataCell>{solicitation.email}</TableDataCell>
              <TableDataCell>{solicitation.phonenumber}</TableDataCell>
              <TableDataCell>{solicitation.goal}</TableDataCell>
              <TableDataCell>
                {formatDate(solicitation.date_request)}
              </TableDataCell>
              <TableDataCell>
                <button
                  type="button"
                  onClick={() => handleAcceptSolicitation(solicitation.id)}
                >
                  <BsFillCheckSquareFill />
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteSolicitation(solicitation.id)}
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
