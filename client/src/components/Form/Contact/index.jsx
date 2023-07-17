import React from 'react';
import { ContactForm, Input, TextArea, SubmitButton } from './styles';

export default function Contact() {
  return (
    <ContactForm className="section-contact__form">
      <Input
        className="section-contact__input"
        type="text"
        placeholder="Nome"
      />
      <Input
        className="section-contact__input"
        type="email"
        placeholder="E-mail"
      />
      <Input
        className="section-contact__input"
        type="text"
        placeholder="Telefone"
      />
      <TextArea
        className="section-contact__textarea"
        placeholder="Digite como podemos lhe ajudar e que objetivos deseja alcançar aqui..."
      />
      <SubmitButton className="section-contact__button" type="submit">
        Enviar
      </SubmitButton>
    </ContactForm>
  );
}
