import React from 'react'
import { IoAnalyticsSharp, IoNotificationsOutline, IoPeopleOutline } from 'react-icons/io5'

function Features() {
    return (
        <>
            <section className="text-white body-font bg-primary py-24">
                <div className="container px-5 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-4xl text-3xl font-semibold title-font text-white mb-4">Raw Denim Heirloom Man Braid</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s font-medium">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
                        </div>
                    </div>
                </div>
                <div className="container px-5 mx-auto">
                    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-[#844e88] text-white glass flex-shrink-0">
                            <IoPeopleOutline className="text-6xl text-white" />
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-white text-2xl title-font font-semibold mb-2">Collaborative Decision Making</h2>
                            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>

                        </div>
                    </div>
                    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-white text-2xl title-font font-semibold mb-2">Predictive Analytics</h2>
                            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                        </div>
                        <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-[#844e88] text-white glass flex-shrink-0">
                            <IoAnalyticsSharp className="text-7xl text-white" />
                        </div>
                    </div>
                    <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-[#844e88] text-white glass flex-shrink-0">
                            <IoNotificationsOutline className="text-7xl text-white" />
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-white text-2xl title-font font-semibold mb-2">Notification System</h2>
                            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features