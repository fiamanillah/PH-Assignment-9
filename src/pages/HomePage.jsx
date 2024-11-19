import { Helmet } from 'react-helmet-async'
import Section from '../layouts/Section'
import Slider from '../components/Slider'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
import BrandsSlide from '../components/BrandsSlide'
import SuccessStories from '../components/SucessStories'

function HomePage() {
    return (
        <Section>
            <Helmet>
                <title>Career Craft | Home</title>
            </Helmet>
            <div className="min-h-screen">
                <Slider />
                <BrandsSlide />
                <Services />
                <Testimonial />
                <SuccessStories />
            </div>
        </Section>
    )
}

export default HomePage
