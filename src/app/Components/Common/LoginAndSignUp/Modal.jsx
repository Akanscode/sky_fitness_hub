
import ReactModal from 'react-modal';

const Modal = ({ isOpen, onRequestClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
     
      className="modal w-auto py-10 my-20  mx-auto max-w-2xl"
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
