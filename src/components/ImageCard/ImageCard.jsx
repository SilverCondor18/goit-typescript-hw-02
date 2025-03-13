import css from './ImageCard.module.css'

export default function ImageCard({ image, description, largeImage, openModal })
{
    const onOpen = () => {
        openModal(largeImage, description);
    }
    return (
        <div className={css.wrapper}>
            <img className={css.image} src={image} alt={description} onClick={onOpen} />
        </div>
    );
}