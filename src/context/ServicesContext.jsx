import { createContext, useState, useEffect, useContext } from 'react'

const ServicesContext = createContext()

const ServicesProvider = ({ children }) => {
    const [services, setServices] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch('/services.json')
                if (!response.ok) {
                    throw new Error('Failed to fetch services data')
                }
                const data = await response.json()
                setServices(data)
            } catch (error) {
                setError(error.message)
                console.error('Error fetching the services data:', error)
            }
        }

        fetchServices()
    }, [])

    function addFeedback(feedback, serviceID) {
        const service = services.find(serv => serv.id === serviceID)

        if (!service) {
            console.error('Service not found')
            return
        }

        const updatedService = {
            ...service,
            feedbacks: [...(service.feedbacks || []), feedback],
        }

        const updatedServices = services.map(serv =>
            serv.id === serviceID ? updatedService : serv
        )

        setServices(updatedServices)
    }

    return (
        <ServicesContext.Provider value={{ services, error, addFeedback }}>
            {children}
        </ServicesContext.Provider>
    )
}

const useServices = () => {
    const context = useContext(ServicesContext)

    if (!context) {
        throw new Error('useServices must be used within a ServicesProvider')
    }

    return context
}

export { ServicesContext, ServicesProvider, useServices }
