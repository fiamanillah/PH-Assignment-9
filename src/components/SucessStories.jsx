import Section from '../layouts/Section'

export default function SuccessStories() {
    const stories = [
        {
            name: 'Emily Davis',
            role: 'Data Scientist',
            story: 'After attending the career coaching sessions, I successfully transitioned from a junior developer to a data scientist at a leading tech company.',
            image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
        },
        {
            name: 'James Walker',
            role: 'Marketing Manager',
            story: 'The resume writing service helped me land interviews with top companies, and the interview preparation tips were spot-on!',
            image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png',
        },
        {
            name: 'Sophia Martinez',
            role: 'UX Designer',
            story: 'I received personalized guidance for career change counseling, which made my transition to UX design smooth and rewarding.',
            image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png',
        },
    ]

    return (
        <Section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold">Success Stories</h2>
                    <p className="mb-8 font-light lg:mb-16 sm:text-xl">
                        See how our services have transformed careers and lives.
                    </p>
                </div>
                <div className="grid gap-8 lg:grid-cols-3">
                    {stories.map((story, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-center items-center p-6 bg-lightCard border border-gray-200 rounded-lg shadow-md dark:bg-darkCard dark:border-gray-700"
                        >
                            <img
                                className="w-16 h-16 mb-4 rounded-full"
                                src={story.image}
                                alt={`${story.name}'s photo`}
                            />
                            <h3 className="mb-2 text-lg font-semibold">{story.name}</h3>
                            <p className="text-sm text-gray-500 mb-4">{story.role}</p>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                {story.story}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
