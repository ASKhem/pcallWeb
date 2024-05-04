import Bimage from './BoardImage';

function Carrousel({ images, texts, alt }) {

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-11/12 flex flex-col items-center justify-between mb-10">
                <ul className="w-full flex items-start justify-between">
                        <Bimage
                            src={images[0]}
                            vidSrc={images[0].replace('.png', '-vid.gif')}
                            alt={alt[0]}
                            text={texts[0]}
                            color={1}
                        />
                        <Bimage
                            src={images[1]}
                            vidSrc={images[1].replace('.png', '-vid.gif')}
                            alt={alt[1]}
                            text={texts[1]}
                            color={2}
                        />
                        <Bimage
                            src={images[2]}
                            vidSrc={images[2].replace('.png', '-vid.gif')}
                            alt={alt[2]}
                            text={texts[2]}
                            color={3}
                        />
                </ul>
            </div>
        </div>
    );
}

export default Carrousel;