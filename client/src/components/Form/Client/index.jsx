import React from 'react';
import Button from '../../Button';
import FormStyled from './styles';
import formatPhone from '../../../util/formatPhone';

function ClientForm({ client, handleInputChange, handleSubmit, handleCancel }) {
  return (
    <FormStyled>
      <div className="input__group">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={client.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="input__group">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={client.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="input__group">
        <label htmlFor="phonenumber">Telefone:</label>
        <input
          type="tel"
          id="phonenumber"
          name="phonenumber"
          value={formatPhone(client.phonenumber)}
          onChange={handleInputChange}
        />
      </div>
      <div className="input__group">
        <label htmlFor="cpf">CPF:</label>
        <input
          type="text"
          id="cpf"
          name="cpf"
          value={client.cpf}
          onChange={handleInputChange}
        />
      </div>
      <div className="input__group">
        <label htmlFor="occupation">Profissão:</label>
        <input
          type="text"
          id="occupation"
          name="occupation"
          value={client.occupation}
          onChange={handleInputChange}
        />
      </div>
      <div className="input__group">
        <label htmlFor="marital_status">Estado Civil:</label>
        <input
          type="text"
          id="marital_status"
          name="marital_status"
          value={client.marital_status}
          onChange={handleInputChange}
        />
      </div>
      <div className="input__group">
        <label htmlFor="literacy">Escolaridade:</label>
        <input
          type="text"
          id="literacy"
          name="literacy"
          value={client.literacy}
          onChange={handleInputChange}
        />
      </div>
      <div className="input__group">
        <label htmlFor="address">Endereço:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={client.address}
          onChange={handleInputChange}
        />
      </div>
      <div className="input__group">
        <label htmlFor="date_birth">Data de Nascimento:</label>
        <input
          type="date"
          id="date_birth"
          name="date_birth"
          value={client.date_birth}
          onChange={handleInputChange}
        />
      </div>
      <div className="input__group">
        <label htmlFor="nacionality">Nacionalidade:</label>
        <input
          type="text"
          id="nacionality"
          name="nacionality"
          value={client.nacionality}
          onChange={handleInputChange}
        />
      </div>
      <div className="textarea__group">
        <label htmlFor="goal">Objetivo:</label>
        <textarea
          type="text"
          id="goal"
          name="goal"
          value={client.goal}
          onChange={handleInputChange}
        />
      </div>
      <div className="button__group">
        <Button type="submit" className="button__crud" onClick={handleSubmit}>
          Salvar
        </Button>
        <Button
          type="button"
          to="/secure/solicitations"
          onClick={handleCancel}
          className="button__cancel"
        >
          Cancelar
        </Button>
      </div>
    </FormStyled>
  );
}

export default ClientForm;
