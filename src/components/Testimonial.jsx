import Section from '../layouts/Section'

export default function Testimonial() {
    return (
        <Section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6" id='testimonials'>
                <div className="mx-auto max-w-screen-sm">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold">Testimonials</h2>
                    <p className="mb-8 font-light lg:mb-16 sm:text-xl">
                        Hear from individuals who have taken their careers to the next level with
                        our expert counseling services.
                    </p>
                </div>
                <div className="grid mb-8 lg:mb-12 lg:grid-cols-2 rounded-2xl overflow-hidden border-2 border-lightCardSecondary dark:border-darkCardSecondary">
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-lightCard border-b border-gray-200 md:p-12 lg:border-r dark:bg-darkCard dark:border-gray-700">
                        <blockquote className="mx-auto mb-8 max-w-2xl">
                            <h3 className="text-lg font-semibold">
                                Life-changing advice and guidance
                            </h3>
                            <p className="my-4">
                                The counseling sessions were tailored to my career needs, helping me
                                gain clarity and confidence. Thanks to their expert advice, I landed
                                my dream job!
                            </p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img
                                className="w-9 h-9 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                                alt="profile picture"
                            />
                            <div className="space-y-0.5 font-medium text-left">
                                <div>Sara Lee</div>
                                <div className="text-sm font-light">Software Developer</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-lightCard border-b border-gray-200 md:p-12 dark:bg-darkCard dark:border-gray-700">
                        <blockquote className="mx-auto mb-8 max-w-2xl">
                            <h3 className="text-lg font-semibold">A roadmap to success</h3>
                            <p className="my-4">
                                The step-by-step guidance provided by the team helped me switch
                                careers seamlessly. The resume-building session was particularly
                                impactful.
                            </p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img
                                className="w-9 h-9 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                                alt="profile picture"
                            />
                            <div className="space-y-0.5 font-medium text-left">
                                <div>Michael Johnson</div>
                                <div className="text-sm font-light">Product Manager</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-lightCard border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-darkCard dark:border-gray-700">
                        <blockquote className="mx-auto mb-8 max-w-2xl">
                            <h3 className="text-lg font-semibold">Unlocking my potential</h3>
                            <p className="my-4">
                                I learned so much about my strengths and how to showcase them. The
                                interview preparation tips were invaluable!
                            </p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img
                                className="w-9 h-9 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                alt="profile picture"
                            />
                            <div className="space-y-0.5 font-medium text-left">
                                <div>Priya Sharma</div>
                                <div className="text-sm font-light">Data Analyst</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-lightCard border-gray-200 md:p-12 dark:bg-darkCard dark:border-gray-700">
                        <blockquote className="mx-auto mb-8 max-w-2xl">
                            <h3 className="text-lg font-semibold">A supportive team</h3>
                            <p className="my-4">
                                The team was always available for support, helping me identify the
                                best options for my career path. Highly recommend their services!
                            </p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img
                                className="w-9 h-9 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                                alt="profile picture"
                            />
                            <div className="space-y-0.5 font-medium text-left">
                                <div>Ahmed Khan</div>
                                <div className="text-sm font-light">Marketing Specialist</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </Section>
    )
}
