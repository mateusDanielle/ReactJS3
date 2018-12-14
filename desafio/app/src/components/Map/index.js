import React, { Component, Fragment } from 'react';
import ReactMapGl, { Marker } from 'react-map-gl';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AddUser from '../AddUser';

import { Creators as DeveloperActions } from '../../store/ducks/developers';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '25%',
    background: '#121313',
    borderRadius: '10px',
  },
};

Modal.setAppElement('#root');

class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.56278,
      longitude: -46.654383,
      zoom: 16,
    },
    modalIsOpen: false,
    latitude: 0.0,
    longitude: 0.0,
    repositoryInput: '',
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    const { viewport } = this.state;
    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = (e) => {
    const [longitude, latitude] = e.lngLat;

    this.setState({ latitude });
    this.setState({ longitude });

    this.openModal();
    document.getElementById('idDeveloperInput').focus();
  };

  handleChangeInput = (e) => {
    this.setState({ repositoryInput: e.target.value });
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  save = () => {
    const { latitude, longitude, repositoryInput } = this.state;
    const { addDeveloperRequest } = this.props;

    addDeveloperRequest({ repositoryInput, latitude, longitude });

    this.setState({ repositoryInput: '' });

    this.closeModal();
  };

  notifyError = () => {
    const { developers } = this.props;
    toast.error(developers.error, {
      position: toast.POSITION.TOP_RIGHT,
    });
    developers.error = null;
  };

  notifySuccess = () => {
    toast.success('Usuário adiconado com sucesso', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  render() {
    const { viewport, modalIsOpen, repositoryInput } = this.state;
    const { developers } = this.props;

    return (
      <Fragment>
        <ReactMapGl
          {...viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mateusdanielle/cjpk6whqr0vrg2roahsotvr2a"
          onViewportChange={view => this.setState({ viewport: view })}
          mapboxApiAccessToken="pk.eyJ1IjoibWF0ZXVzZGFuaWVsbGUiLCJhIjoiY2pwaW0xemhuMThuMjNrbWxkYTlqZ244aiJ9.QyzENcI2uUdt9PYiMTKOgg"
        >
          {developers.data.map(developer => (
            <div key={developer.login}>
              <Marker
                latitude={developer.latitude}
                longitude={developer.longitude}
                onClick={this.handleMapClick}
                captureClick
              >
                <img
                  style={{
                    borderRadius: 100,
                    width: 54,
                    height: 54,
                  }}
                  src={developer.avatar_url}
                  alt={developer.name}
                />
              </Marker>
            </div>
          ))}
        </ReactMapGl>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Adicionar"
        >
          <AddUser
            onCancel={this.closeModal}
            onSave={this.save}
            repositoryInput={repositoryInput}
            onChange={this.handleChangeInput}
          />
        </Modal>

        <ToastContainer />
        {!!developers.error && this.notifyError()}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  developers: state.developers,
});

const mapDispatchToProps = dispatch => bindActionCreators(DeveloperActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
