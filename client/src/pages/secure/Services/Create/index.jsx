import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { BsStar } from 'react-icons/bs';
import { Section, FormStyled } from './styles';
import Button from '../../../../components/Button';

// Página de cadastro de serviços
export default function ServiceCreate() {
  // Estado para armazenar os dados do serviço
  const [service, setService] = useState({
    description: '',
    service_type_id: '1', // Valor padrão definido para 1
    price: '',
  });

  // Hook para navegar entre as páginas
  const navigate = useNavigate();

  // Função para criar um serviço e enviar para o backend
  const createService = async (bodyData) => {
    try {
      // Requisição para criar um serviço
      const response = await fetch('http://localhost:3333/service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        // Corpo da requisição com os dados do serviço
        body: JSON.stringify(bodyData),
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
      // Armazenamento dos dados no estado
      const data = await response.json();
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
    if (!service.service_type_id) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Por favor, selecione um tipo de serviço.',
      });
    } else {
      createService(service);
    }
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

  // Função para atualizar os dados do formulário
  // conforme o usuário seleciona uma opção no select
  const handleSelectChange = (event) => {
    const { value } = event.target;
    setService((prevService) => ({
      ...prevService,
      service_type_id: value,
    }));
  };

  // Função para cancelar o cadastro e voltar para a listagem
  const handleCancel = () => {
    navigate('/secure/services');
  };

  // Hook para carregar os dados do serviço
  const [serviceTypes, setServiceTypes] = useState([]);
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

    // Chamar a função para carregar os tipos de serviço
    fetchServiceTypes();
  }, []);

  return (
    <Section>
      <h1>
        <BsStar />
        Serviços - Cadastro
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
            onChange={handleSelectChange}
          >
            {/* Mapeamento dos tipos de serviço */}
            <option value="">Selecione um tipo de serviço</option>
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
