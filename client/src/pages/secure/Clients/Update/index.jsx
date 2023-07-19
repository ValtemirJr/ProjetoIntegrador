import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { PiUserList } from 'react-icons/pi';
import { Section } from './styles';
import ClientForm from '../../../../components/Form/Client';

export default function ClientUpdate() {
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
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  const fetchClient = async (clientId) => {
    try {
      const response = await fetch(`http://localhost:3333/client/${clientId}`);
      if (!response.ok) {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Não foi possível carregar o cliente.',
        });
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setClient(data);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Não foi possível carregar o cliente.',
      });
    }
  };

  const putClient = async (clientId, bodyData) => {
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
      const response = await fetch(`http://localhost:3333/client/${clientId}`, {
        method: 'PUT',
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
          text: 'Não foi possível atualizar o cliente.',
        });
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setClient(data);
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Cliente atualizado com sucesso.',
      });
      navigate('/secure/clients');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Não foi possível atualizar o cliente.',
      });
    }
  };

  // faz o update do cliente
  const handleSubmit = (event) => {
    event.preventDefault();
    putClient(id, client);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetchClient(id);
  }, [id]);

  const handleCancel = () => {
    navigate('/secure/solicitations');
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
