import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { PiUserList } from 'react-icons/pi';
import Section from './styles';
import ServiceForm from '../../../../components/Form/Service';

export default function ServiceCreate() {
  const [service, setService] = useState({
    id: '',
    description: '',
    service_type_id: '',
    price: '',
  });

  const navigate = useNavigate();

  const createService = async (bodyData) => {
    const { description, service_type_id, price } = bodyData;

    try {
      const response = await fetch('http://localhost:3333/service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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

  const handleSubmit = (event) => {
    event.preventDefault();
    createService(service);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setService((prevService) => ({
      ...prevService,
      [name]: value,
    }));
  };

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
