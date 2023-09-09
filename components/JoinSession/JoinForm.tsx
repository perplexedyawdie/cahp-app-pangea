import React from 'react'
import { AiOutlineLock } from 'react-icons/ai'
function JoinForm() {
    function handleJoinSession(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault()
    }

    return (
        <>
            <div className="mx-auto max-w-screen-xl px-0 py-8 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                    <p className="mx-auto max-w-md text-center text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
                        dolores deleniti inventore quaerat mollitia?
                    </p>
                    <form
                        onSubmit={handleJoinSession}
                        className="mb-0 space-y-4 rounded-lg p-4 sm:p-6 lg:p-8"
                    >
                        <div className="form-control w-full max-w-full">
                            <label className="label">
                                <span className="label-text">What is the session code?</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Code"
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <AiOutlineLock />
                                </span>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-block btn-primary text-sm font-medium text-white"
                        >
                            Join
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default JoinForm