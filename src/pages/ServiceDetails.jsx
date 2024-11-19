import { useParams, useNavigate } from 'react-router-dom'
import { useServices } from '../context/ServicesContext'
import { useEffect } from 'react'
import Section from '../layouts/Section'

export default function ServiceDetails() {
    const { serviceId } = useParams()
    const { services } = useServices()
    const navigate = useNavigate()

    const service = services?.find(service => service.id === Number(serviceId))

    useEffect(() => {
        if (services && !service) {
            navigate('/404', { replace: true })
        }
    }, [services, service, navigate])

    if (!services) {
        return <p>Loading...</p>
    }

    if (!service) {
        return null
    }

    return (
        <Section>
            <div>
                <h1>Service Details</h1>
                <h1>ID: {serviceId}</h1>
                <h1>Name: {service.serviceName}</h1>
            </div>
        </Section>
    )
}
