import css from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard'

export default function ImageGallery({ images, openModal })
{
    return (
        <ul className={css.list}>
            {images.map(image => (
                <li key={image.id} className={css.item}>
                    <ImageCard image={image.urls.small} description={image.description} largeImage={image.urls.regular} openModal={openModal} />
                </li>
            ))}
        </ul>
    );
}