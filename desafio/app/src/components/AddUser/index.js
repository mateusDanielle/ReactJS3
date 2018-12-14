import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Container, Form } from './styles';

const AddUser = ({
  onCancel, onSave, repositoryInput, onChange,
}) => (
  <Fragment>
    <Container>
      <h4>
        <strong>Adicionar novo usuário</strong>
      </h4>
      <Form>
        <input
          className="Input-text"
          placeholder="Usuário no GitHub"
          type="text"
          value={repositoryInput}
          onChange={onChange}
          id="idDeveloperInput"
        />
        <div>
          <button className="btnCancelar" type="button" onClick={onCancel}>
            Cancelar
          </button>
          <button className="btnSalvar" type="button" onClick={onSave}>
            Salvar
          </button>
        </div>
      </Form>
    </Container>
  </Fragment>
);

AddUser.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  repositoryInput: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddUser;
