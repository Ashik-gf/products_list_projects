import React, { useState } from 'react';
import useCategories from '../../Hooks/useProductsCategories';
import Search from '../search/Search';

const ProductsActionsHeader = ({ onSort, onSelected }) => {
    const [open, setOpen] = useState(false);
    const [openFilter, setOpenFilter] = useState(false);
    const { categories, loading, error, } = useCategories();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [unChecked, setUnchecked] = useState(false)

    const handelSort = (e) => {
        const value = e.target.value
        onSort(value)
        setOpen(false)
    }

    const handelChecked = (value) => {
        // Toggle selection and call onSelected with appropriate value
        setSelectedCategory(value === selectedCategory ? null : value);
        onSelected(value === selectedCategory ? null : value);
    };
    return (
        <div className="mt-10">
            <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                {/* <!-- Sort & Filter--> */}
                <div className="w-full">
                    {/* <!-- Sort Start --> */}
                    <div className="relative inline-block text-left">
                        <div>
                            <button
                                onClick={() => setOpen(!open)}

                                type="button"
                                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
                                id="menu-button" aria-expanded="true" aria-haspopup="true">
                                Sort
                                <svg className={`-mr-1 h-5 w-5 text-gray-400 transition-all duration-1000 ${open && "rotate-180 transition-all duration-1000"}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        {/* <!-- Sort Options --> */}
                        {
                            open && <div
                                className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                <div className="py-1" role="none">
                                    <button
                                        value={'asc'}
                                        onClick={handelSort}
                                        className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                                        role="menuitem" tabIndex="-1" id="menu-item-0">Low to High</button>
                                    <button
                                        value={'desc'}
                                        onClick={handelSort}
                                        className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                                        role="menuitem" tabIndex="-1" id="menu-item-0">High to Low</button>
                                </div>
                            </div>
                        }
                    </div>

                    {/* <!-- Filter Start --> */}
                    <div className="relative inline-block text-left">
                        <div>
                            <button
                                type="button"
                                onClick={() => setOpenFilter(!openFilter)}
                                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
                                id="filter-button" aria-expanded="false" aria-haspopup="true">
                                Filter

                                <svg className={`${openFilter ? " rotate-180 transition-all duration-700" : "transition-all duration-700"} -mr-1 h-5 w-5 text-gray-400`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        {/* <!-- Filter options --> */}
                        {
                            openFilter && <div
                                className={` transition-all duration-1000 absolute z-40 mt-2 w-[750px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                                role="menu" aria-orientation="vertical" aria-labelledby="filter-button" tabIndex="-1"
                                id="filter-dropdown">
                                <div className="py-1 w-full grid grid-cols-2" role="none">
                                    {
                                        categories.map((category) => <label key={category}
                                            className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700">
                                            <input checked={selectedCategory === category} value={category} onChange={() => handelChecked(category)} type="checkbox" className="form-checkbox h-4 w-4" id="filter-option-1" />
                                            <span className="ml-2">{category}</span>
                                        </label>)
                                    }

                                </div>
                            </div>
                        }

                    </div>
                    {/* <!-- Filter End --> */}
                </div>
                <Search />
            </div>
        </div>
    )
}

export default ProductsActionsHeader