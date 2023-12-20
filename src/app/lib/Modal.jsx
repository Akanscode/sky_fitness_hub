
import ReactModal from 'react-modal';
import {AiOutlineClose} from "react-icons/ai"
const ModalComponent = ({ isOpen, onRequestClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal w-auto -z-50  my-20  mx-auto max-w-2xl relative"
    >
      {children}
      <button
        onClick={onRequestClose}
        className="px-2 py-3 absolute -right-40 top-0 -translate-x-96   hover:cursor-pointer  bg-status-purple-40 text-white rounded-md"
      >
        <AiOutlineClose className="w-5 h-5" />
      </button>
    </ReactModal>
  );
};

export default ModalComponent;
