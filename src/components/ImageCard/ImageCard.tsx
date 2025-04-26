import css from './ImageCard.module.css'

type Props = {
    image: string;
    description: string;
    largeImage: string;
    openModal: (largeImage: string, description: string) => void;
};

export default function ImageCard({ image, description, largeImage, openModal }: Props)
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