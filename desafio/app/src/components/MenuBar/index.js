import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as DeveloperActions } from '../../store/ducks/developers';

import { Container } from './styles';

const MenuBar = ({ developers, removeDeveloperRequest }) => (
  <Container>
    <ul>
      {developers.data.map(developer => (
        <li key={developer.login}>
          <div className="box">
            <img src={developer.avatar_url} alt={developer.name} />
            <div className="inner">
              <strong>{developer.name}</strong>
              <span>{developer.login}</span>
            </div>
            <div className="right">
              <span className="del fa-stack">
                <i className="fa fa-circle fa-stack-2x" />
                <button type="button" title="Remove">
                  <i className="fa fa-remove fa-stack-1x" style={{ color: '#FFF' }} />
                </button>
              </span>
              <i className="arrow fa fa-angle-right fa-lg" />
            </div>
          </div>
          <hr />
        </li>
      ))}
    </ul>
  </Container>
);

MenuBar.propTypes = {
  developers: PropTypes.shape({
    loading: PropTypes.bool,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
      }),
    ),
    error: PropTypes.any,
  }).isRequired,
  removeDeveloperRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  developers: state.developers,
});

const mapDispatchToProps = dispatch => bindActionCreators(DeveloperActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuBar);
