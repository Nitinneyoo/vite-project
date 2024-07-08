import pic3 from '../images/pic3.jpg'
export const Home = () => {
    return (
        <div className="flex flex-col">
            <div>
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
                                        <p className="text-base">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iure doloremque magnam assumenda delectus iusto perspiciatis reiciendis, consectetur quasi sunt!
                                        </p>
                                    </div>
                                </div>
                                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                    <p className="leading-relaxed text-lg mb-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eveniet optio perferendis explicabo, non voluptatibus cum maiores sit dignissimos nostrum cupiditate et rem, nisi ratione accusamus autem amet numquam totam similique iusto aperiam voluptates. Ex porro obcaecati dolorum sed numquam saepe maiores delectus. Odio, eum aut repellat, aliquam eos eius laudantium sunt autem ratione necessitatibus, odit labore natus? Facilis, obcaecati exercitationem modi expedita corporis nesciunt maiores quaerat totam quasi ullam! Non obcaecati voluptate aspernatur quidem iusto architecto. Beatae, excepturi deserunt corporis natus cumque obcaecati ipsa similique, voluptas nisi repudiandae quos tenetur! Tempore nobis assumenda sapiente odit repellendus animi quae eveniet.
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
