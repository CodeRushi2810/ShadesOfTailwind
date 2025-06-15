import { useState } from 'react'
// import './ColorSelector.css'

function ColorSelector() {

    return (
        <>
            <div className='bg-white'>
                <div className="w-screen h-screen grid grid-cols-12 bg-white container mx-auto">
                    <div className='col-span-12 flex justify-center p-6'>
                        <h1 className='text-slate-700 text-6xl'>Create Palette</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ColorSelector