import React, { useState } from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';


const items = [
    {
        src: 'https://d2wk7qpm4ouq76.cloudfront.net/images/2021/04/10/2020-21-Newcastle-Winners-1600x570pix-7bb5dc21-57c6-481d-b399-d15a67ddaf5c.jpg',
        // altText: 'Slide 1',
        // caption: 'Slide 1'
    },
    {
        src: 'https://d2wk7qpm4ouq76.cloudfront.net/images/2021/03/25/Carousel-SLOGOY-SWC-Desktop-9ce8fbd3-db07-4c88-a888-5b4be97e6248.jpg',
        // altText: 'Slide 2',
        // caption: 'Slide 2'
    },
    {
        src: 'https://d2wk7qpm4ouq76.cloudfront.net/images/2021/04/07/Carousel-Antiseries2021-Desktop-8f0dfe6d-375b-46ba-b6c7-d48a7da19bb9.jpg',
        // altText: 'Slide 3',
        // caption: 'Slide 3'
    }
];

const CarouselComp = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const printCarousel = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} style={{maxWidth:'100%', height:'400px'}} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {printCarousel}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default CarouselComp;