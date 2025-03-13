import css from './ImageModal.module.css'
import Modal from 'react-modal'

export default function ImageModal({ largeImage, description })
{
    return (
        <div className={css.wrapper}>
            <img className={css.image} src={largeImage} alt={description} />
        </div>
    );
}