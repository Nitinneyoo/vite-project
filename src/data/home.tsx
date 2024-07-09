import { TextRevealCardPreview } from '../components/Animated';
import pic3 from '../images/pic3.jpg'
export const Home = () => {
    return (
        <div className="flex flex-col">
            <div>
                <TextRevealCardPreview />
                <h1 className='text-5xl font-bold text-center text-white'>About Us</h1>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-14 mx-auto flex flex-col">
                        <div className="lg:w-full mx-auto">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img
                                    alt="content"
                                    className="object-cover object-center h-full w-full rounded-md"
                                    src={pic3}
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row mt-10">
                                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                    <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-10 h-10"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                            <circle cx={12} cy={7} r={4} />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col items-center text-center justify-center">
                                        <h2 className="font-medium title-font mt-4 text-white-600 text-lg">
                                            Ajayab Lal Singh
                                        </h2>
                                        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                                        <p className="text-xl text-white">
                                            Ajayab Lal Singh, the visionary founder of Model Middle School Baghedi, established the institution with a commitment to fostering academic excellence and holistic development. His dedication to quality education has transformed the school into a nurturing environment that prepares students for success and responsible citizenship.
                                        </p>
                                    </div>
                                </div>
                                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                    <p className="leading-relaxed text-xl mb-4">
                                        Welcome to Model Middle School Baghedi, a vibrant educational institution dedicated to nurturing young minds from Class 1 to Class 10. Our school is committed to providing a holistic learning experience that balances academic excellence with the development of essential life skills. At Model Middle School Baghedi, we believe in fostering a supportive and inclusive environment where every student is encouraged to reach their full potential.

                                        Our curriculum is designed to cater to the diverse learning needs of our students, ensuring that they receive a well-rounded education. We emphasize critical thinking, creativity, and problem-solving, preparing our students to thrive in an ever-changing world. Our experienced and dedicated faculty members are passionate about teaching and are committed to guiding students on their educational journey.

                                        In addition to our strong academic program, we offer a wide range of extracurricular activities, including sports, arts, and various clubs, allowing students to explore their interests and talents. Our state-of-the-art facilities, including modern classrooms, science labs, and sports complexes, provide a conducive environment for learning and personal growth.

                                        At Model Middle School Baghedi, we are not just shaping students academically but also instilling values of integrity, respect, and social responsibility. Join us in our mission to create future leaders who are well-equipped to make a positive impact on society.

                                    </p>
                                    <a className="text-indigo-500 inline-flex items-center">
                                        Learn More
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}
