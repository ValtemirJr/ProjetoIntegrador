import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { TfiAgenda } from 'react-icons/tfi';
import { Section, FormStyled } from './styles';
import Button from '../../../../components/Button';
import formatDateHour from '../../../../util/formatDateHour';

// Página de cadastro de Agendamentos
export default function ScheduleCreate() {
  // Estado para armazenar os dados do Agendamento
  const [schedules, setSchedules] = useState({
    consultation_date: '',
    goal: '',
    client_id: '',
    service_id: '',
  });

  // Hook para navegar entre as páginas
  const navigate = useNavigate();

  // Função para criar um Agendamento e enviar para o backend
  const createSchedule = async (bodyData) => {
    try {
      // Requisição para criar um Agendamento
      const response = await fetch('http://localhost:3333/scheduling', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        // Corpo da requisição com os dados do Agendamento
        body: JSON.stringify(bodyData),
      });
      if (!response.ok) {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Não foi possível criar o Agendamento.',
        });
        throw new Error('Network response was not ok');
      }
      // Armazenamento dos dados no estado
      const data = await response.json();
      setSchedules(data);
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Agendamento criado com sucesso.',
      });
      navigate('/secure/schedules');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Não foi possível criar o Agendamento.',
      });
    }
  };

  // Função para enviar os dados do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    const regex = /^(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2}):(\d{2})$/;
    // Verifica se a data está no formato correto
    if (!regex.test(schedules.consultation_date)) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Data inválida. use o formato dd/mm/aaaa hh:mm:ss',
      });
      return;
    }
    // Chama a função para criar o Agendamento
    createSchedule(schedules);
  };

  // Função para atualizar os dados do formulário
  // conforme o usuário digita nos inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'consultation_date') {
      const formattedDate = formatDateHour(value);
      setSchedules((prevSchedule) => ({
        ...prevSchedule,
        consultation_date: formattedDate,
      }));
      return;
    }
    setSchedules((prevSchedule) => ({
      ...prevSchedule,
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

  // Função para cancelar o cadastro e voltar para a listagem
  const handleCancel = () => {
    navigate('/secure/schedules');
  };

  const [service, setService] = useState([]);
  const [clients, setClient] = useState([]);

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

    // Carrega os clientes cadastrados no banco de dados para o select
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

    // Atualiza os dados do cliente no estado
    fetchClients();
    fetchServiceTypes();
  }, []);

  return (
    <Section>
      <h1>
        <TfiAgenda />
        Agendamentos - Cadastro
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
            {/* Mapeamento dos serviços cadastrados no banco de dados */}
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
            {/* Mapeamento dos clientes cadastrados no banco de dados */}
            <option value="">Selecione um cliente</option>
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name}
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
            to="/secure/schedules"
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
