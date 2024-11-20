import { Helmet } from 'react-helmet-async'
import Section from '../layouts/Section'
import {
    FaUserEdit,
    FaHandshake,
    FaComments,
    FaBrain,
    FaBullseye,
    FaLaptopCode,
    FaBalanceScale,
    FaBriefcase,
} from 'react-icons/fa'

export default function CareerTips() {
    const tips = [
        {
            title: 'Tailor Your Resume',
            description:
                'Customize your resume for each job application to highlight relevant skills and experiences. Use clear formatting to make it easy to read.',
            icon: <FaUserEdit />,
        },
        {
            title: 'Master Networking',
            description:
                'Attend industry events, connect with professionals on LinkedIn, and always follow up after meetings to build lasting relationships.',
            icon: <FaHandshake />,
        },
        {
            title: 'Ace the Interview',
            description:
                'Prepare answers to common questions, research the company, and practice good body language during interviews.',
            icon: <FaComments />,
        },
        {
            title: 'Learn New Skills',
            description:
                'Keep up with industry trends by taking online courses or attending workshops to stay ahead in your field.',
            icon: <FaBrain />,
        },
        {
            title: 'Set Clear Goals',
            description:
                'Define short-term and long-term career goals to help guide your job search and professional development.',
            icon: <FaBullseye />,
        },
        {
            title: 'Use Online Resources',
            description:
                'Explore platforms like LinkedIn Learning, Coursera, and Udemy for free and paid courses that boost your career.',
            icon: <FaLaptopCode />,
        },
        {
            title: 'Maintain Work-Life Balance',
            description:
                'Prioritize mental health and avoid burnout by scheduling breaks and engaging in activities outside of work.',
            icon: <FaBalanceScale />,
        },
        {
            title: 'Build a Portfolio',
            description:
                'Showcase your skills with a portfolio website or a GitHub profile, especially for creative and technical roles.',
            icon: <FaBriefcase />,
        },
    ]

    return (
        <Section>
            <Helmet>
                <title>Career Craft | Career Tips</title>
            </Helmet>
            <div
                className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6"
                id="career-tips"
            >
                <div className="mx-auto max-w-screen-sm">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold">Career Tips</h2>
                    <p className="mb-8 font-light lg:mb-16 sm:text-xl">
                        Discover actionable tips to enhance your career and achieve your
                        professional goals.
                    </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {tips.map((tip, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-center items-start p-6 bg-lightCard rounded-lg shadow-md dark:bg-darkCard border border-gray-200 dark:border-gray-700 hover:shadow-lg transform hover:-translate-y-1 transition-all"
                        >
                            <div className="text-4xl text-primary-500 mb-4">
                                <span>{tip.icon}</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
                            <p className="text-sm font-light text-gray-600 dark:text-gray-400 text-left">
                                {tip.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
