import JoinForm from '@/components/JoinSession/JoinForm'
import MainFooter from '@/components/MainFooter'
import NavBar from '@/components/NavBar'
import React from 'react'

function JoinSession() {
    return (
        <>
            <div className="flex flex-row">
                <div className="hero place-items-start grid-flow-row grid-cols-1 auto-rows-min min-h-screen bg-base-300 overflow-hidden z-50">
                    <NavBar />
                    <div className="hero-content text-center relative w-full max-w-full row-span-1">
                        <div className="relative card-body justify-center items-center px-0 sm:px-4">
                            <div className="w-full flex justify-center items-center flex-col">
                                <h1 className="text-5xl font-semibold">Join a Session</h1>
                                <div className="divider"></div>
                                <JoinForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MainFooter />

        </>
    )
}

export default JoinSession