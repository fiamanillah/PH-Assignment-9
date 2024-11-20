import { useServices } from '../context/ServicesContext'
import Section from '../layouts/Section'
import { IoCalendarOutline } from 'react-icons/io5'
import { RxAvatar } from 'react-icons/rx'
import { FiClock } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'
import Button from './Button'
import { Link } from 'react-router-dom'

export default function Services() {
    const { services } = useServices()
    return (
        <Section className={'mt-5'}>
            <div className="mx-auto max-w-screen-sm text-center" id="services">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold">Services</h2>
                <p className="mb-8 font-light lg:mb-16 sm:text-xl">
                    Empowering your journey with personalized guidance and expert support to achieve
                    your career goals.
                </p>
            </div>
            <div className="grid grid-cols-3 tablet-lg:grid-cols-2 mobile-sm:grid-cols-1 gap-3">
                {services?.map(service => (
                    <div
                        key={service.id}
                        className="bg-lightCard dark:bg-darkCard p-3 border-2 border-lightCardSecondary dark:border-darkCardSecondary rounded-2xl flex flex-col justify-between"
                    >
                        <img
                            className="max-h-[250px] w-full object-cover rounded-xl border-2 border-lightCardSecondary dark:border-darkCardSecondary "
                            src={service.image}
                            alt={service.image}
                        />
                        <div className="flex justify-between items-center mt-3">
                            <h1 className="text-3xl">{service.serviceName}</h1>
                            <div>
                                <span className="flex items-center gap-1">
                                    <FaStar className="text-yellow-500" />
                                    {service.rating}/5
                                </span>
                            </div>
                        </div>
                        <span className="text-gray-400 dark:text-gray-300 text-sm">
                            {service.category}
                        </span>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <span>
                                    <RxAvatar />
                                </span>
                                <span>{service.counselor}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>
                                    <IoCalendarOutline />
                                </span>
                                <span>{service.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>
                                    <FiClock />
                                </span>
                                <span>{service.time}</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-end mt-4">
                            <div>
                                <span>Start From</span>
                                <h2>
                                    {service.pricing}
                                    <span className="text-lg"></span>
                                </h2>
                            </div>
                            <Link to={`/service-details/${service.id}`}>
                                <Button className="bg-accent not-prose text-darkPrimaryText">
                                    Learn more
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}
