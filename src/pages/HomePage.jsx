import { Helmet } from 'react-helmet-async'
import Section from '../layouts/Section'
import Slider from '../components/Slider'
import Services from '../components/Services'

function HomePage() {
    return (
        <Section>
            <Helmet>
                <title>Career Craft | Home</title>
            </Helmet>
            <div className="min-h-screen">
                <Slider />
                <Services />
            </div>
        </Section>
    )
}

export default HomePage
