import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            <>
                {/* <div className="spinner-grow" style={{ width: '3rem', height: '3rem' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div> */}
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
}

export default Spinner