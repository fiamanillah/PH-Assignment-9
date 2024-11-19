import { Link } from 'react-router-dom'
import Section from '../layouts/Section'


function Footer() {
    return (
        <Section>
            <div className="flex flex-col justify-center text-center items-center max-w-screen-xl py-5 px-[2%] mx-auto">
                <div className="flex w-full justify-between items-start">
                    <div>
                        <Link
                            to={'/'}
                            className="flex items-center text-2xl font-semibold no-underline text-accent hover:text-accent uppercase"
                        >
                            <img
                                className="w-8 h-8 mr-2"
                                src="/CareerCraftLogo_Accent.svg"
                                alt="logo"
                            />
                            Career Craft
                        </Link>
                        <p>Leading the way in cutting-edge technology and innovation.</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <strong>Subscribe</strong>
                        <div className="flex items-center">
                            <input /> <button className="bg-accent">Sunscribe</button>
                        </div>
                    </div>
                </div>
                <hr className="w-full m-0" />

                <div className="flex justify-around w-full">
                    <div>
                        <h3>Services</h3>
                        <ul className="prose-li:list-none m-0 p-0">
                            <li>Product Support</li>
                            <li>Order Tracking</li>
                            <li>Shipping & Delivery</li>
                            <li>Returns</li>
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
            </div>
        </Section>
    )
}

export default Footer
