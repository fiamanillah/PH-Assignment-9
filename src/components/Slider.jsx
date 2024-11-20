// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { useEffect, useState } from 'react'
import Button from './Button'
import Section from '../layouts/Section'

function Slider() {
    const [sliderData, setSliderData] = useState(null)

    useEffect(() => {
        async function fetchSliderData() {
            const response = await fetch('/slider.json')

            const sliderData = await response.json()

            setSliderData(sliderData)
        }

        fetchSliderData()
    }, [])
    console.log(sliderData)

    return (
        <Section>
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{
                    dynamicBullets: true,
                }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className="mySwiper rounded-3xl"
            >
                {sliderData?.map(slide => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="relative min-h-[500px]  bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-transparent"></div>

                            <div className="relative z-10 p-4 text-white flex min-h-[500px] h-[70vh]">
                                <div className="basis-1/3 tablet-lg:basis-1/2 mobile-lg:basis-full ml-4 flex flex-col items-start justify-evenly">
                                    <h1 className="text-darkPrimaryText">{slide.heading}</h1>
                                    <p className="text-darkPrimaryText">{slide.subheading}</p>
                                    <Button className="bg-accent not-prose">
                                        <a href={slide.buttonLink}>{slide.buttonText}</a>
                                    </Button>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Section>
    )
}

export default Slider
