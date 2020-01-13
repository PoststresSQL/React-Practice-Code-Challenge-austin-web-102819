import React from 'react'

const Modal = ({ id, className }) => {
    return (
        <div id={id} className={className}>
            <div>
                <h2 style={{
                    color: 'white',
                    flexBasis: '100%',
                    textAlign: 'center',
                }}>
                    Bruh, you ain't got enough monies
                </h2>
                <img src={'https://media.giphy.com/media/3o6UB5RrlQuMfZp82Y/giphy.gif'} alt={'J.Trevolto where ya monies at?'} />
            </div>
        </div>
    )
}

export default Modal;