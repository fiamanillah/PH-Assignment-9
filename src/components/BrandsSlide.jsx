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
                        <span className="cursor-pointer hover:text-secondary dark:hover:text-darkSecondary">
                            <FaGoogle className="text-6xl" />
                        </span>
                    </Slider.Slide>
                    <Slider.Slide>
                        <span className="cursor-pointer hover:text-secondary dark:hover:text-darkSecondaryr">
                            <FaGoogleWallet className="text-6xl" />
                        </span>
                    </Slider.Slide>
                    <Slider.Slide>
                        <span className="cursor-pointer hover:text-secondary dark:hover:text-darkSecondaryr">
                            <SiGooglecampaignmanager360 className="text-6xl" />
                        </span>
                    </Slider.Slide>
                    <Slider.Slide>
                        <span className="cursor-pointer hover:text-secondary dark:hover:text-darkSecondaryr">
                            <SiGooglebigtable className="text-6xl" />
                        </span>
                    </Slider.Slide>
                    <Slider.Slide>
                        <span className="cursor-pointer hover:text-secondary dark:hover:text-darkSecondaryr">
                            <SiGoogledataproc className="text-6xl" />
                        </span>
                    </Slider.Slide>
                    <Slider.Slide>
                        <span className="cursor-pointer hover:text-secondary dark:hover:text-darkSecondaryr">
                            <SiGooglepodcasts className="text-6xl" />
                        </span>
                    </Slider.Slide>
                    <Slider.Slide>
                        <span className="cursor-pointer hover:text-secondary dark:hover:text-darkSecondaryr">
                            <SiGooglefonts className="text-6xl" />
                        </span>
                    </Slider.Slide>
                    <Slider.Slide>
                        <span className="cursor-pointer hover:text-secondary dark:hover:text-darkSecondaryr">
                            <SiGooglepubsub className="text-6xl" />
                        </span>
                    </Slider.Slide>
                    <Slider.Slide>
                        <span className="cursor-pointer hover:text-secondary dark:hover:text-darkSecondaryr">
                            <SiGoogletagmanager className="text-6xl" />
                        </span>
                    </Slider.Slide>
                </Slider>
            </div>
        </Section>
    )
}
