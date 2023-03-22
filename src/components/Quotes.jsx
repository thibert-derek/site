import React from 'react'
const Quotes = () => {
  return (
    <div name="quotes" className="w-full h-full md:mt-0">
         <div className="flex flex-col justify-center items-center w-full h-screen">
            <div className="max-w-[1920px]">
                <div className="sm:text-left pb-8">
                    <h1 className ="text-4xl sm:text-5xl border-b-4 font-bold text-[#00FFBF]">Quotes</h1>
                </div>
            </div>
            <div>
                <div className = "text-3xl px-20">
                    <p>Prices are negotiable (Canadian dollars)</p>
                </div>
            </div>
            <div>
                <div>
                    <table className='md:mx-2 md:my-4 items-center justify-center text-center border-2'>
                        <thead>
                            <tr>
                                <th className='border-b-2'></th>
                                <th className='px-4 text-2xl border-b-2'>Basic Package</th>
                                <th className='px-4 text-2xl border-b-2'>Standard Package</th>
                                <th className='px-4 text-2xl border-b-2'>Premium Package</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b-2">
                                <td className='px-4 text-left text-xl'>Cost</td>
                                <td className='px-4 text-xl'>$40.00</td>
                                <td className='px-4 text-xl'>$60.00</td>
                                <td className='px-4 text-xl'>$80.00</td>
                            </tr>
                            <tr className="border-b-2">
                                <td className='px-4 text-left text-xl'>Number of Pages</td>
                                <td className='px-4 text-xl'>1</td>
                                <td className='px-4 text-xl'>3</td>
                                <td className='px-4 text-xl'>7</td>
                            </tr>
                            <tr className="border-b-2">
                                <td className='px-4 text-left text-xl'>Responsive Design</td>
                                <td className='px-4 text-xl'>Yes</td>
                                <td className='px-4 text-xl'>Yes</td>
                                <td className='px-4 text-xl'>Yes</td>
                            </tr>
                            <tr className="border-b-2">
                                <td className='px-4 text-left text-xl'>Include Source Code</td>
                                <td className='px-4 text-xl'>Yes</td>
                                <td className='px-4 text-xl'>Yes</td>
                                <td className='px-4 text-xl'>Yes</td>
                            </tr>
                            <tr className="border-b-2">
                                <td className='px-4 text-left text-xl'>Design Customizations</td>
                                <td className='px-4 text-xl'>Yes</td>
                                <td className='px-4 text-xl'>Yes</td>
                                <td className='px-4 text-xl'>Yes</td>
                            </tr>
                            <tr className="border-b-2">
                                <td className='px-4 text-left text-xl'>Number of Revisions</td>
                                <td className='px-4 text-xl'>2</td>
                                <td className='px-4 text-xl'>4</td>
                                <td className='px-4 text-xl'>6</td>
                            </tr>
                            <tr className="border-b-2">
                                <td className='px-4 text-left text-xl'>*Time of Delivery</td>
                                <td className='px-4 text-xl'>3 Days</td>
                                <td className='px-4 text-xl'>7 Days</td>
                                <td className='px-4 text-xl'>10 Days</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="mx-2">* - Extra charge if sooner delivery time is demanded.</p>
                    {/* <ul className="py-10 grid grid-cols-1 justify-center items-center align-center sm:grid-cols-4">
                        <li className="my-3 text-2xl sm:text-2xl">
                                <h4>Package</h4>
                                <h3>Responsive Design</h3>
                        </li>
                        <li className="my-3 text-xl">
                            <div>
                                <h4>Basic Package</h4>
                            </div>
                        </li>
                        <li className="my-3 text-xl">
                        <div>
                                <h4>Standard Package</h4>
                            </div>
                        </li>
                        <li className="my-3 text-xl">
                        <div>
                                <h4>Premium Package</h4>
                            </div>
                        </li>
                    </ul> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quotes