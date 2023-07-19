import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { PiUserList } from 'react-icons/pi';
import Section from './styles';
import ServiceForm from '../../../../components/Form/Service';

export default function ClientUpdate() {
  const [service, setService] = useState({
    id: '',
    description: '',
    service_type_id: '',
    price: '',
  });

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  const fetchService = async (serviceId) => {
    try {
      const response = await fetch(
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

  const putService = async (serviceId, bodyData) => {
    const { description, service_type_id, price } = bodyData;

    try {
      const response = await fetch(
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

  const handleSubmit = (event) => {
    event.preventDefault();
    putService(id, service);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setService((prevService) => ({
      ...prevService,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetchService(id);
  }, [id]);

  const handleCancel = () => {
    navigate('/secure/services');
  };

  return (
    <Section>
      <h1>
        <PiUserList />
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
