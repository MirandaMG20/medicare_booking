import React from 'react'

const formatDate = (date, config) => {

    const defaultOptions = { day: 'numeric', month: 'long', year: 'numeric' }
    const options = config ? config : defaultOptions

    return (
        new Date(date).toLocaleDateString('en-US', options)
    )
}

export default formatDate