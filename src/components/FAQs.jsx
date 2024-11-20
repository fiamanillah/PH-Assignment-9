import Section from '../layouts/Section'
import {
    FaBriefcase,
    FaCalendarAlt,
    FaLaptop,
    FaRedo,
    FaExchangeAlt,
    FaQuestionCircle,
} from 'react-icons/fa'

export default function FAQs() {
    const faqs = [
        {
            question: 'What services do you offer?',
            answer: 'We offer career coaching, resume writing, interview preparation, job search strategies, career change counseling, and salary negotiation advice.',
            icon: <FaBriefcase />,
        },
        {
            question: 'How can I book a session?',
            answer: "You can book a session by clicking the 'Learn More' button under the desired service and following the booking instructions.",
            icon: <FaCalendarAlt />,
        },
        {
            question: 'Are the sessions conducted online or offline?',
            answer: 'We offer both online and offline sessions. The mode of each service is mentioned in its description.',
            icon: <FaLaptop />,
        },
        {
            question: 'Can I reschedule or cancel a session?',
            answer: 'Yes, you can reschedule or cancel a session, but please do so at least 24 hours before the scheduled time.',
            icon: <FaRedo />,
        },
        {
            question: 'Do you provide services for career change guidance?',
            answer: 'Yes, our career change counseling services are tailored to help you transition into a new career path successfully.',
            icon: <FaExchangeAlt />,
        },
        {
            question: 'What is your refund policy?',
            answer: 'Refunds are available for cancellations made at least 48 hours before the scheduled session. Refunds may take 5-7 business days to process.',
            icon: <FaQuestionCircle />,
        },
    ]

    return (
        <Section>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-6" id="faqs">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-extrabold">Frequently Asked Questions</h2>
                    <p>Have questions? We’ve got answers.</p>
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-lightCard dark:bg-darkCard p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                        >
                            <div className="flex items-center mb-4">
                                <div className="text-2xl text-primary-500 mr-3">
                                    <span>{faq.icon}</span>
                                </div>
                                <h3 className="text-lg font-semibold">{faq.question}</h3>
                            </div>
                            <hr className="border-gray-300 dark:border-gray-600" />
                            <p className="mb-4">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
