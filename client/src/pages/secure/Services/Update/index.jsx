import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { BsStar } from 'react-icons/bs';
import { FormStyled, Section } from './styles';
import Button from '../../../../components/Button';

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
        `http://localhost:3333/service/${serviceId}`,
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
        `http://localhost:3333/service/${serviceId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
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

  const [serviceTypes, setServiceTypes] = useState([]);

  // Função para atuakizar os dados do formulário
  // conforme o usuário seleciona uma opção no select
  const handleSelectChange = (value) => {
    setService((prevService) => ({
      ...prevService,
      service_type_id: value,
    }));
  };

  // Função para buscar os tipos de serviço no backend e armazenar no estado
  useEffect(() => {
    const fetchServiceTypes = async () => {
      try {
        const response = await fetch('http://localhost:3333/serviceType', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await response.json();
        setServiceTypes(data);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Não foi possível carregar os tipos de serviço.',
        });
      }
    };

    // Atualiza o estado com os tipos de serviço
    fetchServiceTypes();
  }, []);

  return (
    <Section>
      <h1>
        <BsStar />
        Serviços - Editar
      </h1>
      <FormStyled>
        <div className="input__group">
          <label htmlFor="description">Descrição:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={service.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="input__group">
          <label htmlFor="price">Preço:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={service.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="input__group">
          <label htmlFor="service_type_id">Tipo de Serviço:</label>
          <select
            id="service_type_id"
            name="service_type_id"
            value={service.service_type_id}
            onChange={(event) => handleSelectChange(event.target.value)}
          >
            {/* Mapeia os tipos de serviço e cria uma opção para cada um */}
            {serviceTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.description}
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
