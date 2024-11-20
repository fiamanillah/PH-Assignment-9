import { Helmet } from 'react-helmet-async'
import Testimonial from '../components/Testimonial'

export default function TestimonialPage() {
    return (
        <div>
            <Helmet>
                <title>Career Craft | Testimonials</title>
            </Helmet>
            <Testimonial />
        </div>
    )
}
