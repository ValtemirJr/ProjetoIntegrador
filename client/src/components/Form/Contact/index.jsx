import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import {
  ContactForm,
  Input,
  TextArea,
  SubmitButton,
  CheckboxLabel,
  CheckboxInput,
} from './styles';
import formatPhone from '../../../util/formatPhone';
import postSolicitation from '../../../api/postSolicitation';

// Componente de formulário para contato
export default function Contact() {
  // Estados para os dados do formulário
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [goal, setGoal] = useState('');
  const [privacyPolicyChecked, setPrivacyPolicyChecked] = useState(false); // Novo estado para o checkbox

  // Função para lidar com a mudança de dados nos inputs
  const handlePhoneChange = (event) => {
    event.preventDefault();
    setPhonenumber(formatPhone(event.target.value));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!privacyPolicyChecked) {
      // Se o checkbox de política de privacidade não estiver marcado, exibe um alerta
      Swal.fire({
        title: 'Política de Privacidade',
        text: 'Por favor, leia e concorde com a Política de Privacidade para prosseguir.',
        icon: 'info',
        confirmButtonText: 'Ok',
      });
      return; // Impede o envio do formulário
    }

    const formData = {
      name,
      email,
      phonenumber,
      goal,
      nacionality_id: null,
      marital_status_id: null,
    };

    postSolicitation(formData)
      .then(() => {
        Swal.fire({
          title: 'Sucesso!',
          text: 'Sua mensagem foi enviada com sucesso!',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
      })
      .catch(() => {
        Swal.fire({
          title: 'Erro!',
          text: 'Ocorreu um erro ao enviar sua solicitação! Verifique os dados e tente novamente, todos são obrigatórios. Caso o erro persista, entre em contato conosco por telefone ou e-mail.',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      });

    setName('');
    setEmail('');
    setPhonenumber('');
    setGoal('');
    setPrivacyPolicyChecked(false); // Reseta o checkbox após o envio do formulário
  };

  // Retorna o formulário de contato com os inputs e botão de envio
  return (
    <ContactForm onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Telefone"
        value={phonenumber}
        onChange={handlePhoneChange}
      />
      <TextArea
        className="section-contact__textarea"
        placeholder="Digite como podemos lhe ajudar e que objetivos deseja alcançar aqui..."
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />

      {/* Checkbox para a política de privacidade */}
      <CheckboxLabel>
        <CheckboxInput
          type="checkbox"
          checked={privacyPolicyChecked}
          onChange={(e) => setPrivacyPolicyChecked(e.target.checked)}
        />
        Concordo com a <Link to="/privacy-policy">Política de Privacidade</Link>
      </CheckboxLabel>

      <SubmitButton className="section-contact__button" type="submit">
        Enviar
      </SubmitButton>
    </ContactForm>
  );
}
