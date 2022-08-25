import React, { useState } from 'react'
import { Modal } from '@mui/material'
import MapPicker from 'react-google-map-picker';

const LocModal = ({ st, setO, setD, open, setOpen }) => {
  console.log(open)
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const DefaultLocation = { lat: 22.7196, lng: 75.8577 };
  const DefaultZoom = 20;
  const [zoom, setZoom] = useState(DefaultZoom);
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '400px',
    width: '500px',
    maxWidth: '80vw',
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,

  };
  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
  }
  function handleChangeLocation(lat, long) {
    console.log(st)
    if (st === 'O') {
      setO({
        latitude: lat.toFixed(4),
        longitude: long.toFixed(4)
      })
    }
    else if (st === 'D') {
      setD({
        latitude: lat.toFixed(4),
        longitude: long.toFixed(4)
      })
    }

    setOpen(false)


  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >


      <MapPicker id="modal-modal-description" defaultLocation={defaultLocation}
        zoom={15}
        mapTypeId="roadmap"
        style={style}
        onChangeLocation={handleChangeLocation}
        onChangeZoom={handleChangeZoom}
        apiKey='' />

    </Modal>
  )
}
export default LocModal