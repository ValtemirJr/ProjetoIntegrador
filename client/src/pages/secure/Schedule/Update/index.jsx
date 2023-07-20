import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { TfiAgenda } from 'react-icons/tfi';
import { FormStyled, Section } from './styles';
import Button from '../../../../components/Button';

// Página de edição de Agendamentos
export default function ScheduleUpdate() {
  // Estado para armazenar os dados do Agendamento
  const [schedules, setSchedules] = useState({
    consultation_date: '',
    goal: '',
    client_id: '',
    service_id: '',
    status_id: '',
  });

  // Hook para navegar entre as páginas
  const navigate = useNavigate();
  // Hook para pegar os dados da URL e salvar o ID do Agendamento
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  // Função para buscar um Agendamento no backend
  const fetchSchedule = async (sheduleId) => {
    try {
      const response = await fetch(
        // Requisição para buscar um Agendamento no backend enviando o ID como parâmetro
        `http://localhost:3333/scheduling/${sheduleId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
      if (!response.ok) {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Não foi possível carregar o Agendamento.',
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
        text: 'Não foi possível carregar o Agendamento.',
      });
    }
  };

  // Função para atualizar um Agendamento no backend
  const putSchedule = async (schedulesId, bodyData) => {
    const { consultation_date, goal, client_id, service_id, status_id } =
      bodyData;

    try {
      const response = await fetch(
        // Requisição para atualizar um Agendamento no backend enviando o ID como parâmetro
        `http://localhost:3333/scheduling/${schedulesId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({
            consultation_date,
            goal,
            client_id,
            service_id,
            status_id,
          }),
        },
      );
      if (!response.ok) {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Não foi possível atualizar o Agendamento.',
        });
        throw new Error('Network response was not ok');
      }
      // Conversão dos dados para JSON e armazenamento no estado
      const data = await response.json();
      setSchedules(data);
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Agendamento atualizado com sucesso.',
      });
      navigate('/secure/schedules');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Não foi possível atualizar o Agendamento.',
      });
    }
  };

  // Função para enviar os dados do formulário para a função de atualizar
  const handleSubmit = (event) => {
    event.preventDefault();
    putSchedule(id, schedules);
  };

  // Função para atualizar os dados do Agendamento no estado
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSchedules((prevService) => ({
      ...prevService,
      [name]: value,
    }));
  };

  // Função para atualizar os dados do formulário
  // conforme o usuário seleciona uma opção no select
  const handleServiceChange = (event) => {
    const { value } = event.target;
    setSchedules((prevSchedule) => ({
      ...prevSchedule,
      service_id: value,
    }));
  };

  // Função para atualizar os dados do formulário
  // conforme o usuário seleciona uma opção no select
  const handleClientChange = (event) => {
    const { value } = event.target;
    setSchedules((prevSchedule) => ({
      ...prevSchedule,
      client_id: value,
    }));
  };

  // Função para atualizar os dados do formulário
  // conforme o usuário seleciona uma opção no select
  const handleStatusChange = (event) => {
    const { value } = event.target;
    setSchedules((prevSchedule) => ({
      ...prevSchedule,
      status_id: value,
    }));
  };

  // Função para cancelar a edição e voltar para a listagem de Agendamentos
  const handleCancel = () => {
    navigate('/secure/schedules');
  };

  const [service, setService] = useState([]);
  const [clients, setClient] = useState([]);
  const [scheduleStatus, setScheduleStatus] = useState([]);

  useEffect(() => {
    const fetchServiceTypes = async () => {
      try {
        const response = await fetch('http://localhost:3333/service', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await response.json();
        setService(data);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Não foi possível carregar os serviços.',
        });
      }
    };

    const fetchClients = async () => {
      try {
        const response = await fetch('http://localhost:3333/client', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await response.json();
        setClient(data);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Não foi possível carregar os clientes.',
        });
      }
    };

    const fetchScheduleStatus = async () => {
      try {
        const response = await fetch('http://localhost:3333/schedulingStatus', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await response.json();
        setScheduleStatus(data);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Não foi possível carregar os status.',
        });
      }
    };

    fetchClients();
    fetchServiceTypes();
    fetchScheduleStatus();
    fetchSchedule(id);
  }, [id]);

  return (
    <Section>
      <h1>
        <TfiAgenda />
        Agendamentos - Editar
      </h1>
      <FormStyled>
        <div className="input__group">
          <label htmlFor="consultation_date">Data da Consulta:</label>
          <input
            type="text"
            id="consultation_date"
            name="consultation_date"
            value={schedules.consultation_date}
            onChange={handleInputChange}
          />
        </div>
        <div className="input__group">
          <label htmlFor="goal">Objetivo:</label>
          <textarea
            id="goal"
            name="goal"
            value={schedules.goal}
            onChange={handleInputChange}
          />
        </div>
        <div className="input__group">
          <label htmlFor="service_id">Serviço:</label>
          <select
            id="service_id"
            name="service_id"
            value={schedules.service_id}
            onChange={handleServiceChange}
          >
            <option value="">Selecione um serviço</option>
            {service.map((type) => (
              <option key={type.id} value={type.id}>
                {type.description}
              </option>
            ))}
          </select>
        </div>
        <div className="input__group">
          <label htmlFor="client_id">Cliente:</label>
          <select
            id="client_id"
            name="client_id"
            value={schedules.client_id}
            onChange={handleClientChange}
          >
            <option value="">Selecione um cliente</option>
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name}
              </option>
            ))}
          </select>
        </div>
        <div className="input__group">
          <label htmlFor="status_id">Status:</label>
          <select
            id="status_id"
            name="status_id"
            value={schedules.status_id}
            onChange={handleStatusChange}
          >
            <option value="">Selecione um status</option>
            {scheduleStatus.map((status) => (
              <option key={status.id} value={status.id}>
                {status.description}
              </option>
            ))}
          </select>
        </div>
        <div className="button__group">
          <Button type="submit" className="button__crud" onClick={handleSubmit}>
            Salvar
          </Button>
          <Button
            type="button"
            to="/secure/services"
            onClick={handleCancel}
            className="button__cancel"
          >
            Cancelar
          </Button>
        </div>
      </FormStyled>
    </Section>
  );
}
