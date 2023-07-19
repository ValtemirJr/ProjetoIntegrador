import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { PiUserList } from 'react-icons/pi';
import { Section } from './styles';
import ClientForm from '../../../../components/Form/Client';

export default function ClientCreate() {
  const [client, setClient] = useState({
    id: '',
    name: '',
    email: '',
    phonenumber: '',
    cpf: '',
    occupation: '',
    marital_status: '',
    literacy: '',
    address: '',
    date_birth: '',
    nacionality: '',
    goal: '',
    date_request: '',
  });

  const navigate = useNavigate();

  const createClient = async (bodyData) => {
    const {
      name,
      email,
      phonenumber,
      cpf,
      occupation,
      marital_status,
      literacy,
      address,
      date_birth,
      nacionality,
      goal,
      date_request,
    } = bodyData;

    try {
      const response = await fetch('http://localhost:3333/client', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phonenumber,
          cpf,
          occupation,
          marital_status,
          literacy,
          address,
          date_birth,
          nacionality,
          goal,
          date_request,
        }),
      });
      if (!response.ok) {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Não foi possível criar o cliente.',
        });
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setClient(data);
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Cliente criado com sucesso.',
      });
      navigate('/secure/clients');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Não foi possível criar o cliente.',
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createClient(client);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    navigate('/secure/clients');
  };

  return (
    <Section>
      <h1>
        <PiUserList />
        Clientes - Editar
      </h1>
      <ClientForm
        client={client}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
      />
    </Section>
  );
}
