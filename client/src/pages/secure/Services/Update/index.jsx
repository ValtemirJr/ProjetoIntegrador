import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { BsStar } from 'react-icons/bs';
import Section from './styles';
import ServiceForm from '../../../../components/Form/Service';

// Página de edição de serviços
export default function ClientUpdate() {
  // Estado para armazenar os dados do serviço
  const [service, setService] = useState({
    id: '',
    description: '',
    service_type_id: '',
    price: '',
  });

  // Hook para navegar entre as páginas
  const navigate = useNavigate();
  // Hook para pegar os dados da URL e salvar o ID do serviço
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  // Função para buscar um serviço no backend
  const fetchService = async (serviceId) => {
    try {
      const response = await fetch(
        // Requisição para buscar um serviço no backend enviando o ID como parâmetro
        `http://localhost:3333/service/${serviceId}`,
      );
      if (!response.ok) {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Não foi possível carregar o serviço.',
        });
        throw new Error('Network response was not ok');
      }
      // Conversão dos dados para JSON e armazenamento no estado
      const data = await response.json();
      setService(data);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Não foi possível carregar o serviço.',
      });
    }
  };

  // Função para atualizar um serviço no backend
  const putService = async (serviceId, bodyData) => {
    const { description, service_type_id, price } = bodyData;

    try {
      const response = await fetch(
        // Requisição para atualizar um serviço no backend enviando o ID como parâmetro
        `http://localhost:3333/service/${serviceId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            description,
            service_type_id,
            price,
          }),
        },
      );
      if (!response.ok) {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Não foi possível atualizar o Serviço.',
        });
        throw new Error('Network response was not ok');
      }
      // Conversão dos dados para JSON e armazenamento no estado
      const data = await response.json();
      setService(data);
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Serviço atualizado com sucesso.',
      });
      navigate('/secure/services');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Não foi possível atualizar o Serviço.',
      });
    }
  };

  // Função para enviar os dados do formulário para a função de atualizar
  const handleSubmit = (event) => {
    event.preventDefault();
    putService(id, service);
  };

  // Função para atualizar os dados do serviço no estado
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setService((prevService) => ({
      ...prevService,
      [name]: value,
    }));
  };

  // Busca o serviço ao carregar a página
  useEffect(() => {
    fetchService(id);
  }, [id]);

  // Função para cancelar a edição e voltar para a listagem de serviços
  const handleCancel = () => {
    navigate('/secure/services');
  };

  return (
    <Section>
      <h1>
        <BsStar />
        Serviços - Editar
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
