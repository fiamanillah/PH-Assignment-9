import Section from '../layouts/Section'
import { FaGoogle, FaGoogleWallet } from 'react-icons/fa'
import {
    SiGooglecampaignmanager360,
    SiGooglebigtable,
    SiGoogledataproc,
    SiGooglepodcasts,
    SiGooglefonts,
    SiGooglepubsub,
    SiGoogletagmanager,
} from 'react-icons/si'

import Slider from 'react-infinite-logo-slider'
import useDarkMode from '../hooks/useDarkMode'

export default function BrandsSlide() {
    const { darkMode } = useDarkMode()
    return (
        <Section>
            <div className="py-8 mt-5">
                <Slider
                    width="200px"
                    duration={40}
                    pauseOnHover={true}
                    blurBorders={true}
                    blurBorderColor={darkMode ? '#121b3a' : '#f5f7fc'}
                >
                    <Slider.Slide>
                        <span className="cursor-pointer">
                            <FaGoogle className="text-6xl" />
                        </span>
                    </Slider.Slide>
                    <Slider.Slide>
                        <span className="cursor-pointer">
                            <FaGoogleWallet className="text-6xl" />
                        </span>
                    </Slider.Slide>
                    <Slider.Slide>
                        <span className="cursor-pointer">
                            <SiGooglecampaignmanager360 className="text-6xl" />
                        </span>
                    </Slider.Slide>
                    <Slider.Slide>
                        <span className="cursor-pointer">
                            <SiGooglebigtable className="text-6xl" />
                        </span>
                    </Slider.Slide>
                    <Slider.Slide>
                        <span className="cursor-pointer">
                            <SiGoogledataproc className="text-6xl" />
                        </span>
                    </Slider.Slide>
                    <Slider.Slide>
                        <span className="cursor-pointer">
                            <SiGooglepodcasts className="text-6xl" />
                        </span>
                    </Slider.Slide>
                    <Slider.Slide>
                        <span className="cursor-pointer">
                            <SiGooglefonts className="text-6xl" />
                        </span>
                    </Slider.Slide>
                    <Slider.Slide>
                        <span className="cursor-pointer">
                            <SiGooglepubsub className="text-6xl" />
                        </span>
                    </Slider.Slide>
                    <Slider.Slide>
                        <span className="cursor-pointer">
                            <SiGoogletagmanager className="text-6xl" />
                        </span>
                    </Slider.Slide>
                </Slider>
            </div>
        </Section>
    )
}
