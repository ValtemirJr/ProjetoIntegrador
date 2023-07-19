import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillTrashFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
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

export default function ServiceList() {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const fetchServices = async () => {
    try {
      const response = await fetch('http://localhost:3333/service');
      if (!response.ok) {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Não foi possível carregar os serviços.',
        });
        throw new Error('Network response was not ok');
      }
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

  const handleEditClient = (id) => {
    navigate(`/secure/service/update?id=${id}`);
  };

  const handleDeleteClient = async (id) => {
    try {
      await fetch(`http://localhost:3333/service/${id}`, {
        method: 'DELETE',
      });
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Serviço excluído com sucesso.',
      });
      fetchServices();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Não foi possível excluir o Serviço.',
      });
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <Section>
      <h1>
        <PiUserList />
        Serviços
      </h1>
      <div className="actions">
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
          <Button
            type="button"
            to="/secure/servicesType/create"
            className="button__crud"
          >
            Novo Tipo de Serviço
          </Button>
        </div>
      </div>
      <TableWrapper>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Descrição</TableHeaderCell>
            <TableHeaderCell>Tipo</TableHeaderCell>
            <TableHeaderCell>Preço</TableHeaderCell>
            <TableHeaderCell>Ações</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services
            .filter((service) =>
              Object.values(service).some((value) =>
                String(value).toLowerCase().includes(searchTerm.toLowerCase()),
              ),
            )
            .map((service) => (
              <TableRow key={service.id}>
                <TableDataCell>{service.description}</TableDataCell>
                <TableDataCell>{service.service_type_id}</TableDataCell>
                <TableDataCell>{service.price}</TableDataCell>
                <TableDataCell>
                  <button
                    type="button"
                    onClick={() => handleEditClient(service.id)}
                  >
                    <FiEdit />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteClient(service.id)}
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
