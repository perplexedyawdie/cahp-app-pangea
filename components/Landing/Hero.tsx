'use client'
import React from 'react'
import NavBar from '../NavBar'
import HeroLogo from './HeroLogo'
import Features from './Features'
import MainFooter from '../MainFooter'
import { useAuth } from "@pangeacyber/react-auth";
import { useRouter } from 'next/router'

function Hero() {
    const router = useRouter()
    const {
        authenticated,
        loading,
        error,
        user,
        client,
        login,
        logout,
        getToken,
      } = useAuth();
    function handleGetStarted(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        if (authenticated) {
            router.push('/analytics-session')
        } else {
            login()
        }
    }

    return (
        <>
            <NavBar />
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-5xl text-3xl mb-4 font-bold text-gray-900"> <span>Analytics</span> 
                        <br className="hidden lg:inline-block" /> for Healthcare Providers
                        </h1>
                        <p className="mb-8 leading-relaxed">Empowering Healthcare Providers with One-Click Predictive Analytics</p>
                        <div className="flex justify-center space-x-8">
                            <button onClick={handleGetStarted} className="btn text-white btn-primary rounded text-lg">Get Started</button>
                            <button className="btn rounded text-lg">Learn More</button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <HeroLogo />
                    </div>
                </div>
            </section>
            <Features />
            <MainFooter />
        </>
    )
}

export default Hero