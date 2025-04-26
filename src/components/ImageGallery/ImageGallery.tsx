import css from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard'
import { MouseEventHandler } from 'react';
import { GalleryImage } from '../../unsplash-api';

type Props = {
    images: GalleryImage[];
    openModal: (largeImage: string, description: string) => void;
};

export default function ImageGallery({ images, openModal }: Props)
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