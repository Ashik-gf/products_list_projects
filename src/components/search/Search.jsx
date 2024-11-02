import React, { useState } from 'react';

const Search = () => {
    const [search, setSearch] = useState('');
    const handelChange = (e) => {
        setSearch(e.target.value)
        console.log(search);
    }
    return (
        < div className="flex gap-2 items-center" >
            < div
                className="flex flex-1 items-center px-3.5 py-2 text-gray-400 group hover:ring-1 hover:ring-gray-300 focus-within:!ring-2 ring-inset focus-within:!ring-teal-500 rounded-md" >
                <svg className="mr-2 h-5 w-5 stroke-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" trokelinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                    </path>
                </svg>
                <input
                    className="block w-full appearance-none bg-transparent text-base text-gray-700 placeholder:text-gray-400 focus:outline-none placeholder:text-sm sm:text-sm sm:leading-6"
                    placeholder="Find anything..." aria-label="Search components" id="headlessui-combobox-input-:r5n:"
                    role="combobox" type="text" aria-expanded="false" aria-autocomplete="list"

                    style={{ caretColor: 'rgb(107, 114, 128)' }}
                    value={search}
                    onChange={handelChange}
                />
            </div >

            {/* <!-- Cart --> */}
            < div className="flow-root" >
                <a href="#" className="group -m-2 flex items-center p-2">
                    <svg className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" fill="none"
                        viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" trokelinejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                </a>
            </div >
        </div >
    )
}

export default Search