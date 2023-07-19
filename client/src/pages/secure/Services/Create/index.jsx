import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { PiUserList } from 'react-icons/pi';
import Section from './styles';
import ServiceForm from '../../../../components/Form/Service';

// Página de cadastro de serviços
export default function ServiceCreate() {
  // Estado para armazenar os dados do serviço
  const [service, setService] = useState({
    id: '',
    description: '',
    service_type_id: '',
    price: '',
  });

  // Hook para navegar entre as páginas
  const navigate = useNavigate();

  // Função para criar um serviço e enviar para o backend
  const createService = async (bodyData) => {
    // Desestruturação dos dados do serviço
    const { description, service_type_id, price } = bodyData;

    try {
      // Requisição para criar um serviço
      const response = await fetch('http://localhost:3333/service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Corpo da requisição com os dados do serviço desestruturados
        body: JSON.stringify({
          description,
          service_type_id,
          price,
        }),
      });
      if (!response.ok) {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Não foi possível criar o serviço.',
        });
        throw new Error('Network response was not ok');
      }
      // Conversão dos dados para JSON
      const data = await response.json();
      // Armazenamento dos dados no estado
      setService(data);
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Serviço criado com sucesso.',
      });
      navigate('/secure/services');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Não foi possível criar o serviço.',
      });
    }
  };

  // Função para enviar os dados do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    createService(service);
  };

  // Função para atualizar os dados do formulário
  // conforme o usuário digita nos inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setService((prevService) => ({
      ...prevService,
      [name]: value,
    }));
  };

  // Função para cancelar o cadastro e voltar para a listagem
  const handleCancel = () => {
    navigate('/secure/services');
  };

  return (
    <Section>
      <h1>
        <PiUserList />
        Serviços - Cadastro
      </h1>
      <ServiceForm
        service={service}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
      />
    </Section>
  );
}
