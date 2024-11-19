import { useParams, useNavigate, Link } from 'react-router-dom'
import { useServices } from '../context/ServicesContext'
import { useEffect, useState } from 'react'
import Section from '../layouts/Section'
import { IoCalendarOutline } from 'react-icons/io5'
import { RxAvatar } from 'react-icons/rx'
import { FiClock } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'
import { TbTimeDuration30 } from 'react-icons/tb'
import { LuMail } from 'react-icons/lu'
import Button from '../components/Button'
import { VscFeedback } from 'react-icons/vsc'
import InputField from '../components/InputField'
import { useModal } from '../context/ModalContext'

const InfoItem = ({ icon: Icon, text }) => (
    <div className="flex items-center gap-2">
        <span>
            <Icon />
        </span>
        <span>{text}</span>
    </div>
)

export default function ServiceDetails() {
    const { serviceId } = useParams()
    const { services, addFeedback } = useServices()
    const navigate = useNavigate()
    const service = services?.find(service => service.id === Number(serviceId))
    const [ftback, setftback] = useState('')
    const { showModal, hideModal } = useModal()
    useEffect(() => {
        if (services && !service) {
            navigate('/404', { replace: true })
        }
    }, [services, navigate, service])

    function handleBook() {
        showModal(
            <div>
                <h2 className="text-xl font-bold">Booking successfull</h2>
                <p>We will get back to you soon</p>
                <Button
                    className="mt-4 bg-accent text-white p-2 rounded"
                    onClick={() => {
                        hideModal()
                    }}
                >
                    Okay
                </Button>
            </div>
        )
    }

    if (!services) {
        return <p>Loading...</p>
    }

    if (!service) {
        return null
    }

    return (
        <Section>
            <div className="bg-lightCard dark:bg-darkCard p-3 rounded-3xl border-2 border-lightCardSecondary dark:border-darkCardSecondary">
                <div className="flex gap-3 tablet-lg:flex-col">
                    <img
                        className="max-h-[350px] aspect-4/3 object-cover rounded-2xl"
                        src={service?.image || '/placeholder.jpg'}
                        alt={`Image of ${service?.serviceName || 'service'}`}
                    />
                    <div className="w-full flex flex-col justify-between bg-lightCardSecondary dark:bg-darkCardSecondary py-3 px-5 rounded-2xl max-h-[350px]">
                        <div className="flex justify-between items-center mt-3 w-full">
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
                        <div className="flex flex-col justify-between">
                            <InfoItem
                                icon={RxAvatar}
                                text={service?.counselor || 'No counselor assigned'}
                            />
                            <InfoItem
                                icon={IoCalendarOutline}
                                text={service?.date || 'No date available'}
                            />
                            <InfoItem icon={FiClock} text={service?.time || 'No time available'} />
                            <InfoItem
                                icon={TbTimeDuration30}
                                text={`${service?.duration || 0} Session`}
                            />
                            <InfoItem
                                icon={LuMail}
                                text={service?.contact || 'No contact information'}
                            />
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
                                <Button
                                    className="bg-accent not-prose text-darkPrimaryText"
                                    onClick={handleBook}
                                >
                                    Book
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="bg-lightCardSecondary dark:bg-darkCardSecondary my-3 p-3 rounded-2xl">
                    <h3>Description</h3>
                    <p>{service.description || 'No description available.'}</p>
                </div>
                <div>
                    <h3>User Feedbacks</h3>
                    <div className="grid grid-cols-4 gap-2">
                        {service?.feedbacks?.length > 0 ? (
                            service?.feedbacks.map((msg, index) => (
                                <div
                                    className="bg-lightCardSecondary dark:bg-darkCardSecondary p-2 rounded-lg"
                                    key={index}
                                >
                                    <div className="flex items-start gap-2">
                                        <span className="mt-2">
                                            <VscFeedback />
                                        </span>
                                        <span>{msg}</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No feedback available</p>
                        )}
                    </div>

                    <div className="flex items-center">
                        <div className="basis-1/3 mobile-lg:basis-2/3">
                            <InputField
                                type={'text'}
                                name={'feedback'}
                                value={ftback}
                                onChange={e => setftback(e.target.value)}
                            />
                        </div>
                        <Button
                            className="bg-accent text-darkPrimaryText mt-2 h-12 ml-2"
                            onClick={() => {
                                addFeedback(ftback, service?.id)
                                setftback('')
                            }}
                        >
                            Add Your
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    )
}
