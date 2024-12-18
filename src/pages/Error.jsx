import { Link } from 'react-router-dom'
import Section from '../layouts/Section'
import { Helmet } from 'react-helmet-async'

function Error() {
    return (
        <Section className={'prose max-w-none fixed inset-0 '}>
            <Helmet>
                <title>Page not found</title>
            </Helmet>
            <div className="flex z-10 flex-col items-center justify-center h-screen">
                <img className="max-w-[300px] m-0" src="/404.png" alt="" />
                <p className="text-lg mb-3 mt-0">
                    Sorry, the page you are looking for does not exist.
                </p>
                <Link to="/" className="underline">
                    Go back to Home
                </Link>
            </div>
        </Section>
    )
}

export default Error
