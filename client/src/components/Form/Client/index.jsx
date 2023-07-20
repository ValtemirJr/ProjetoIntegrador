import React from 'react';
import Button from '../../Button';
import FormStyled from './styles';
import formatPhone from '../../../util/formatPhone';

// Componente de formulário para cadastro e atualização de clientes
// Recebe como props o objeto cliente com os dados vindos
// do banco de dados,
// a função para lidar com a mudança de dados nos inputs,
// a função para lidar com o envio do formulário
// e a função para lidar com o cancelamentodo envio do formulário.
function ClientForm({
  client,
  nacionality,
  maritalStatus,
  handleInputChange,
  handleSubmit,
  handleCancel,
  handleSelectChange,
}) {
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
        <label htmlFor="marital_status_id">Estado Civil:</label>
        <select
          id="marital_status_id"
          name="marital_status_id"
          value={client.marital_status_id}
          onChange={handleSelectChange}
        >
          <option value="">Selecione</option>
          {maritalStatus.map((status) => (
            <option key={status.id} value={status.id}>
              {status.description}
            </option>
          ))}
        </select>
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
        <label htmlFor="nacionality_id">Nacionalidade:</label>
        <select
          type="text"
          id="nacionality_id"
          name="nacionality_id"
          value={client.nacionality_id}
          onChange={handleSelectChange}
        >
          <option value="">Selecione</option>
          {nacionality.map((nation) => (
            <option key={nation.id} value={nation.id}>
              {nation.description}
            </option>
          ))}
        </select>
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
