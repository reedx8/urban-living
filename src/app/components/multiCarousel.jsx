import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import kitchen from '/public/images/kitchen.jpg';
import pub from '/public/images/pub.jpg';
import Image from 'next/image';

export default function MultiCarousel({ floorplan, pics }) {
    const picWidth = '500px';
    const picHeight = '333px';

    const responsive = {
        desktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 400000, min: 0 },
            items: 1,
        },
        // mobile: {
        //     breakpoint: { max: 464, min: 0 },
        //     items: 2,
        // },
    };

    return (
        <div
            style={{
                width: picWidth,
                height: picHeight,
                // border: '1px solid black',
                // borderRadius: '5px',
            }}
        >
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=''
                containerClass='container'
                dotListClass=''
                draggable
                focusOnSelect={false}
                // infinite
                itemClass=''
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={responsive}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots
                sliderClass=''
                slidesToSlide={1}
                swipeable
            >
                <a href={floorplan} target='_blank' rel='noopener noreferrer'>
                    <Image
                        src={floorplan}
                        alt='image 1'
                        width={330}
                        height={330}
                    />
                </a>
                <Image src={pics[0]} alt='image 2' width={500} height={333} />
                <Image src={pics[1]} alt='image 3' width={500} height={333} />
                {/* <img
                    src='https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
                    style={{
                        display: 'block',
                        height: '300px',
                        margin: 'auto',
                        width: '300px',
                    }}
                />
                <img
                    src='https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
                    style={{
                        display: 'block',
                        height: '300px',
                        margin: 'auto',
                        width: '300px',
                    }}
                />
                <img
                    src='https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
                    style={{
                        display: 'block',
                        height: '300px',
                        margin: 'auto',
                        width: '300px',
                    }}
                /> */}
            </Carousel>
        </div>
    );
}
