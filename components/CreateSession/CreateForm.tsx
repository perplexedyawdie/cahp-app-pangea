import React from 'react'
import Select from 'react-select'
import selectOptions from './selectData'

function CreateForm() {
    function handleCreateSession(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault()
        // throw new Error('Function not implemented.')
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
                        onSubmit={handleCreateSession}
                        className="mb-0 space-y-4 rounded-lg p-4 sm:p-6 lg:p-8"
                    >
                        {/* <p className="text-center text-lg font-medium">Session Details</p> */}

                        <div>
                            <div className="form-control w-full max-w-full">
                                <label className="label">
                                    <span className="label-text">What is your role?</span>
                                    
                                </label>
                                <Select
                                    placeholder=""
                                    className="w-full rounded-lg border-gray-200 text-sm shadow-sm"
                                    options={selectOptions.hcpOptions} />

                            </div>
                        </div>
                        <div>
                            <div className="form-control w-full max-w-full">
                                <label className="label">
                                    <span className="label-text">Who do you want to collaborate with?</span>
                                    
                                </label>
                                <Select
                                    placeholder=""
                                    className="w-full rounded-lg border-gray-200 text-sm shadow-sm"
                                    options={selectOptions.hcpOptions} />

                            </div>
                        </div>
                        <div>
                            <div className="form-control w-full max-w-full">
                                <label className="label">
                                    <span className="label-text">Which health condition will be the focus of the session?</span>
                                    
                                </label>
                                <Select
                                    placeholder=""
                                    className="w-full rounded-lg border-gray-200 text-sm shadow-sm"
                                    options={selectOptions.healthConditionOptions} />

                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-block btn-primary text-sm font-medium text-white"
                        >
                            Create
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default CreateForm