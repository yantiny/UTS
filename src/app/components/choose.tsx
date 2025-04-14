export default function choose() {
    return (
        <section className="py-16 px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="md:flex md:items-start md:justify-between">
                    {/* Judul di kiri */}
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 md:mb-0 text-left md:w-1/3">
                        Why <br /> Choosing Us
                    </h2>

                    {/* Konten di kanan */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:w-2/3">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Luxury facilities</h3>
                            <p className="text-gray-600 mt-2">
                                The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.
                            </p>
                            <a href="#" className="text-orange-500 mt-4 inline-flex items-center">
                                More Info <span className="ml-2">→</span>
                            </a>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Affordable Price</h3>
                            <p className="text-gray-600 mt-2">
                                You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.
                            </p>
                            <a href="#" className="text-orange-500 mt-4 inline-flex items-center">
                                More Info <span className="ml-2">→</span>
                            </a>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Many Choices</h3>
                            <p className="text-gray-600 mt-2">
                                We provide many unique workspace choices so that you can choose the workspace to your liking.
                            </p>
                            <a href="#" className="text-orange-500 mt-4 inline-flex items-center">
                                More Info <span className="ml-2">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
