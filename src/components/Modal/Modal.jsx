import Backdrop from '@mui/material/Backdrop';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Form from '../Form/Form';
import PropTypes from 'prop-types';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({
  setTasks,
  toggleModal,
  title,
  tasks,
  id,
}) {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    toggleModal();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Form
              setTasks={setTasks}
              toggleModal={toggleModal}
              title={title}
              tasks={tasks}
              taskId={id}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

TransitionsModal.propTypes = {
  toggleModal: PropTypes.func,
  title: PropTypes.string,
  setTasks: PropTypes.func,
  tasks: PropTypes.array,
  id: PropTypes.string,
};
