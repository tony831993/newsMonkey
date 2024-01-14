import React from 'react'

const Spinner = () => {
    return (
        <>
            <div className='text-center my-3'>
                <div className="spinner-grow text-success me-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-danger me-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-warning me-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default Spinner