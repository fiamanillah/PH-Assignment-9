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
    FaLightbulb,
    FaLinkedin,
    FaGraduationCap,
    FaGithub,
    FaBookOpen,
    FaDatabase,
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
        {
            title: 'Stay Curious',
            description:
                'Adopt a mindset of lifelong learning and stay curious about your industry and emerging technologies to remain competitive.',
            icon: <FaLightbulb />,
        },
    ]

    const resources = [
        {
            name: 'LinkedIn Learning',
            description: 'Offers a wide range of professional development courses.',
            url: 'https://www.linkedin.com/learning',
            icon: <FaLinkedin />,
        },
        {
            name: 'Coursera',
            description: 'Provides university-level courses in various industries.',
            url: 'https://www.coursera.org',
            icon: <FaGraduationCap />,
        },
        {
            name: 'GitHub',
            description: 'Showcase your coding projects and collaborate with others.',
            url: 'https://github.com',
            icon: <FaGithub />,
        },
        {
            name: 'Indeed Career Guide',
            description: 'Articles and guides to help you navigate your career path.',
            url: 'https://www.indeed.com/career-advice',
            icon: <FaBookOpen />,
        },
        {
            name: 'Kaggle',
            description: 'A platform for data science projects and competitions.',
            url: 'https://www.kaggle.com',
            icon: <FaDatabase />,
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

            <div
                className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6"
                id="career-resources"
            >
                <div className="mx-auto max-w-screen-sm mb-8">
                    <h2 className="mb-4 text-3xl tracking-tight font-extrabold">
                        Career Resources
                    </h2>
                    <p className="font-light sm:text-xl">
                        Explore these platforms and tools to further your career growth.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {resources.map((resource, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-center items-start p-6 bg-lightCard rounded-lg shadow-md dark:bg-darkCard border border-gray-200 dark:border-gray-700 hover:shadow-lg transform hover:-translate-y-1 transition-all"
                        >
                            <div className="text-4xl text-primary-500 mb-4">
                                <span>{resource.icon}</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{resource.name}</h3>
                            <p className="text-sm font-light text-gray-600 dark:text-gray-400 mb-4">
                                {resource.description}
                            </p>
                            <a
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-500 font-medium"
                            >
                                Visit Website →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
