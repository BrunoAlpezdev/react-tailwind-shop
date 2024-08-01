interface ImageComponentProps {
    imageUrl: string;
    altText?: string;
    size?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ imageUrl, altText, size }) => {
    return <img src={imageUrl} alt={altText} width={size} height={size} />;
};

export default ImageComponent;