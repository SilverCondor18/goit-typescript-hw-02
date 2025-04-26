import css from './ImageModal.module.css'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    }
};

type Props = {
    largeImage: string;
    description: string;
    isOpen: boolean;
    closeModal: (event: React.MouseEvent) => void;
}

export default function ImageModal({ largeImage, description, isOpen, closeModal }: Props)
{
    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles} ariaHideApp={false}>
            <img className={css.image} src={largeImage} alt={description} />
        </Modal>
    );
}