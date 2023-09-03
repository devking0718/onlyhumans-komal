import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { SlideImageData } from '../contents';
import { Image } from 'react-bootstrap';

export default function BannerCarousel() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4.5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay="false"
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {
                SlideImageData.map((item, index) => (
                    <div className='px-3'>
                        <Image src={item} width="100%" height="50%" alt="slide" className='rounded rounded-5'/>
                    </div>
                ))
            }
        </Carousel>
    )
}