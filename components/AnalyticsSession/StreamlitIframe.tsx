import React from 'react'
import Iframe from 'react-iframe'

function StreamlitIframe() {
    return (
        <>
            <Iframe url="http://localhost:8502"
                width="1280px"
                height="720px"
                id=""
                className=""
                display="block"
                position="relative" />
        </>
    )
}

export default StreamlitIframe