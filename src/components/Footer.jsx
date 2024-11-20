import { Link } from 'react-router-dom'
import Section from '../layouts/Section'

function Footer() {
    return (
        <Section className={'bg-lightCard dark:bg-darkCard'}>
            <div className="flex flex-col justify-center text-center items-center max-w-screen-xl py-5 px-[2%] mx-auto">
                <div className="flex w-full justify-center text-center items-center mobile-lg:flex-col mobile-lg:justify-center py-5 mobile-lg:gap-5">
                    <div className="mobile-lg:text-center mobile-lg:w-full mobile-lg:flex mobile-lg:flex-col items-center mobile-lg:items-center">
                        <Link
                            to={'/'}
                            className="flex justify-center items-center text-2xl font-semibold no-underline text-accent hover:text-accent uppercase"
                        >
                            <img
                                className="w-8 h-8 mr-2"
                                src="/CareerCraftLogo_Accent.svg"
                                alt="logo"
                            />
                            Career Craft
                        </Link>
                        <span>Build up your career with our expert consult.</span>
                    </div>
                    {/* <div className="flex flex-col items-start mobile-lg:w-full mobile-lg:text-center mobile-lg:items-center">
                        <strong>Subscribe</strong>
                        <div className="flex items-center rounded-xl overflow-hidden">
                            <input className="py-2 px-4 outline-none" />{' '}
                            <button className="bg-accent py-2 px-4 text-darkPrimaryText">
                                Sunscribe
                            </button>
                        </div>
                    </div> */}
                </div>
                <hr className="w-full m-0 my-5" />

                <div className="flex justify-around w-full mobile-sm:flex-col mobile-sm:gap-5">
                    <div>
                        <h3>Services</h3>
                        <ul className="prose-li:list-none m-0 p-0">
                            <li>Career Coaching</li>
                            <li>Resume Writing</li>
                            <li>Salary Negotiation</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Company</h3>
                        <ul className="prose-li:list-none m-0 p-0">
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Legal</h3>
                        <ul className="prose-li:list-none m-0 p-0">
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                </div>
                <hr className="w-full m-0 my-5" />
                <span>@2024 Your Company All Rights Reserved.</span>
            </div>
        </Section>
    )
}

export default Footer
