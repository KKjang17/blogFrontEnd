import React, { useState } from 'react'

const EditIntroForm = ({adminMode}) => {
    const [blurb, setBlurb] = useState('')

    const handleSubmit = async event => {
        event.preventDefault()
        try {
            const body = { blurb }
            // eslint-disable-next-line no-unused-vars
            const response = await fetch(
                'https://blog-express-server.herokuapp.com/',
                {
                    method: "PUT",
                    headers: { "Content-Type" : "application/json" },
                    body: JSON.stringify(body)
                }
            )
        }
        catch (err) {
            console.error(err.message)
        }
    }
    if (adminMode) {
        return (
        <form onSubmit={handleSubmit}>
            <textarea cols="50" rows="5" value={blurb} onChange={({ target}) => setBlurb(target.value)}>Change the blurb</textarea>
            <button type="submit">Change Blurb</button>
        </form>
        )
    }
    else 
        return (
            <div></div>
        )
    
}

export default EditIntroForm