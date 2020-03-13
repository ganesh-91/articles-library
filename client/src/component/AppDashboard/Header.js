import React, { useState } from 'react'

const Header = ({ urlEnter }) => {
    const [url, setUrl] = useState('');

    const urlChanged = (e) => {
        // setUrl(e.target.value)
    }

    const enterKeyDown = (e) => {
        // if (e.key === 'Enter') {
        //     urlEnter(url, () => {
        //         setUrl("")
        //     })
        // }
    }

    return (
        <div className="d-flex align-items-center p-3 text-muted my-3 bg-white w-100 rounded shadow-sm">
            <div className="lh-100 w-100">
                <input type="text" className="form-control w-100" onKeyPress={enterKeyDown} onChange={urlChanged} placeholder="Url" value={url} />
            </div>
        </div>
    )
}

export default Header
