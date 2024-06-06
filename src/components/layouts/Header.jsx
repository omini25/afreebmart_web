import {Fragment, useEffect, useState} from 'react'
import {
    Dialog,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    Transition,
    TransitionChild,
} from '@headlessui/react'
import {
    Bars3Icon,
    HeartIcon,
    MagnifyingGlassIcon,
    ShoppingCartIcon, UserIcon,
    XMarkIcon
} from '@heroicons/react/24/outline'
import axios from "axios";
import {server} from "../../server.js";


export const Header = () => {
    const [categories, setCategories] = useState([]);
    const mainShopCategories = categories.filter(category => category.shop === 'Main Shop');
    const bulkShopCategories = categories.filter(category => category.shop === 'Bulk Shop');

    useEffect(() => {
        axios.get(`${server}/categories`)
            .then(response => {
                setCategories(response.data.categories);
                // console.log(categories.map(index => index));
            })
            .catch(error => console.error('Error:', error));
    }, []);

    const navigation = {
        categories: [
            {
                id: 'women',
                name: 'Main Shop',
                featured: [
                    {
                        name: 'New Arrivals',
                        href: '#',
                        imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                        imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                    },
                    {
                        name: 'Basic Tees',
                        href: '#',
                        imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                        imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                    },
                ],
                sections: [
                    {
                        id: 'clothing',
                        name: 'Clothing',
                        items: [
                            { name: 'Tops', href: '#' },
                            { name: 'Dresses', href: '#' },
                            { name: 'Pants', href: '#' },
                            { name: 'Denim', href: '#' },
                            { name: 'Sweaters', href: '#' },
                            { name: 'T-Shirts', href: '#' },
                            { name: 'Jackets', href: '#' },
                            { name: 'Activewear', href: '#' },
                            { name: 'Browse All', href: '#' },
                        ],
                    },
                    {
                        id: 'accessories',
                        name: 'Accessories',
                        items: [
                            { name: 'Watches', href: '#' },
                            { name: 'Wallets', href: '#' },
                            { name: 'Bags', href: '#' },
                            { name: 'Sunglasses', href: '#' },
                            { name: 'Hats', href: '#' },
                            { name: 'Belts', href: '#' },
                        ],
                    },
                    {
                        id: 'brands',
                        name: 'Brands',
                        items: [
                            { name: 'Full Nelson', href: '#' },
                            { name: 'My Way', href: '#' },
                            { name: 'Re-Arranged', href: '#' },
                            { name: 'Counterfeit', href: '#' },
                            { name: 'Significant Other', href: '#' },
                        ],
                    },
                ],
            },
            {
                id: 'men',
                name: 'Bulk Shop',
                featured: [
                    {
                        name: 'New Arrivals',
                        href: '#',
                        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                        imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
                    },
                    {
                        name: 'Artwork Tees',
                        href: '#',
                        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
                        imageAlt:
                            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
                    },
                ],
                sections: [
                    {
                        id: 'clothing',
                        name: 'About Bulks',
                        items: [
                            { name: 'Tops', href: '#' },
                            { name: 'Pants', href: '#' },
                            { name: 'Sweaters', href: '#' },
                            { name: 'T-Shirts', href: '#' },
                            { name: 'Jackets', href: '#' },
                            { name: 'Activewear', href: '#' },
                            { name: 'Browse All', href: '#' },
                        ],
                    },
                    {
                        id: 'accessories',
                        name: 'Groups',
                        items: [
                            { name: 'Watches', href: '#' },
                            { name: 'Wallets', href: '#' },
                            { name: 'Bags', href: '#' },
                            { name: 'Sunglasses', href: '#' },
                            { name: 'Hats', href: '#' },
                            { name: 'Belts', href: '#' },
                        ],
                    },
                    {
                        id: 'brands',
                        name: 'Brands',
                        items: [
                            { name: 'Re-Arranged', href: '#' },
                            { name: 'Counterfeit', href: '#' },
                            { name: 'Full Nelson', href: '#' },
                            { name: 'My Way', href: '#' },
                        ],
                    },
                ],
            },
        ],
        pages: [
            { name: 'Vendors', href: '#' },
            { name: 'Become a Vendor', href: '#' },
        ],
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const [open, setOpen] = useState(false)


    return (
        <>

            <div className="bg-white">
                {/* Mobile menu */}
                <Transition show={open}>
                    <Dialog className="relative z-40 lg:hidden" onClose={setOpen}>
                        <TransitionChild
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25"/>
                        </TransitionChild>

                        <div className="fixed inset-0 z-40 flex">
                            <TransitionChild
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <DialogPanel
                                    className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                    <div className="flex px-4 pb-2 pt-5">
                                        <button
                                            type="button"
                                            className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                            onClick={() => setOpen(false)}
                                        >
                                            <span className="absolute -inset-0.5"/>
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                        </button>
                                    </div>

                                    {/* Links */}
                                    <TabGroup className="mt-2">
                                        <div className="border-b border-gray-200">
                                            <TabList className="-mb-px flex space-x-8 px-4">
                                                {navigation.categories.map((category) => (
                                                    <Tab
                                                        key={category.name}
                                                        className={({selected}) =>
                                                            classNames(
                                                                selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                                                                'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                                                            )
                                                        }
                                                    >
                                                        {category.name}
                                                    </Tab>
                                                ))}
                                            </TabList>
                                        </div>
                                        <TabPanels as={Fragment}>
                                            {navigation.categories.map((category) => (
                                                <TabPanel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                                                    <div className="grid grid-cols-2 gap-x-4">
                                                        {category.featured.map((item) => (
                                                            <div key={item.name} className="group relative text-sm">
                                                                <div
                                                                    className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                                    <img src={item.imageSrc} alt={item.imageAlt}
                                                                         className="object-cover object-center"/>
                                                                </div>
                                                                <a href={item.href}
                                                                   className="mt-6 block font-medium text-gray-900">
                                                                    <span className="absolute inset-0 z-10"
                                                                          aria-hidden="true"/>
                                                                    {item.name}
                                                                </a>
                                                                <p aria-hidden="true" className="mt-1">
                                                                    Shop now
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    {category.sections.map((section) => (
                                                        <div key={section.name}>
                                                            <p id={`${category.id}-${section.id}-heading-mobile`}
                                                               className="font-medium text-gray-900">
                                                                {section.name}
                                                            </p>
                                                            <ul
                                                                role="list"
                                                                aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                                className="mt-6 flex flex-col space-y-6"
                                                            >
                                                                {section.items.map((item) => (
                                                                    <li key={item.name} className="flow-root">
                                                                        <a href={item.href}
                                                                           className="-m-2 block p-2 text-gray-500">
                                                                            {item.name}
                                                                        </a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </TabPanel>
                                            ))}
                                        </TabPanels>
                                    </TabGroup>

                                    <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                        {navigation.pages.map((page) => (
                                            <div key={page.name} className="flow-root">
                                                <a href={page.href}
                                                   className="-m-2 block p-2 font-medium text-gray-900">
                                                    {page.name}
                                                </a>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                        <div className="flex">
                                            <a href="#" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                                                <span className="sr-only">Account</span>
                                                <UserIcon className="h-6 w-6" aria-hidden="true"/>
                                            </a>
                                        </div>
                                    </div>


                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </Dialog>
                </Transition>

                <header className={`bg-white sticky top-0 z-50 ${open ? 'hidden' : ''}`}>
                    <p className="flex h-10 items-center justify-center bg-primary px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                        Get free delivery on orders over $100
                    </p>

                    <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="border-b border-gray-200">
                            <div className="flex h-16 items-center">
                                <button
                                    type="button"
                                    className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                                    onClick={() => setOpen(true)}
                                >
                                    <span className="absolute -inset-0.5"/>
                                    <span className="sr-only">Open menu</span>
                                    <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                                </button>

                                {/* Logo */}
                                <div className="ml-4 flex lg:ml-0">
                                    <a href="/">
                                        <span className="sr-only">Afreebmart</span>
                                        <img src="https://afreebmart.com/backend/images/logo/afreemart-logo.png"
                                             alt="Afreebmart Logo" style={{width: '240px', height: '50px'}}/>
                                    </a>
                                </div>

                                {/* Flyout menus */}
                                <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                                    <div className="flex h-full space-x-8">
                                        {/* Fixed menus */}
                                        <Popover className="flex">
                                            <PopoverButton className='relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'>
                                                Main Shop
                                            </PopoverButton>
                                            <PopoverPanel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                                {/* Categories for Main Shop */}
                                                {mainShopCategories.map((category) => (
                                                    <div key={category.category_name}>
                                                        <p id={`${category.category_name}-heading`}
                                                           className="font-medium text-gray-900">
                                                            {category.category_name}
                                                        </p>
                                                        <ul
                                                            role="list"
                                                            aria-labelledby={`${category.name}-heading`}
                                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                        >
                                                            {category.sub_categories.split(',').map((subCategory) => (
                                                                <li key={subCategory}
                                                                    className="flex">
                                                                    <a href="#"
                                                                       className="hover:text-gray-800">
                                                                        {subCategory}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </PopoverPanel>
                                        </Popover>

                                        <Popover className="flex">
                                            <PopoverButton className='relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'>
                                                Bulk Shop
                                            </PopoverButton>
                                            <PopoverPanel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                                {/* Categories for Bulk Shop */}
                                                {categories.map((category) => (
                                                    // Check if the category belongs to Bulk Shop
                                                    category.shop === 'Bulk Shop' && (
                                                        <div key={category.name}>
                                                            <p id={`${category.name}-heading`}
                                                               className="font-medium text-gray-900">
                                                                {category.category_name}
                                                            </p>
                                                            <ul
                                                                role="list"
                                                                aria-labelledby={`${category.name}-heading`}
                                                                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                            >
                                                                {category.sub_categories.split(',').map((subCategory) => (
                                                                    <li key={subCategory}
                                                                        className="flex">
                                                                        <a href="#"
                                                                           className="hover:text-gray-800">
                                                                            {subCategory}
                                                                        </a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )
                                                ))}
                                            </PopoverPanel>
                                        </Popover>
                                    </div>
                                </PopoverGroup>

                                <div className="ml-auto flex items-center">

                                    {/* Search */}
                                    <div className="flex lg:ml-6">
                                        <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">Search</span>
                                            <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true"/>
                                        </a>
                                    </div>

                                    {/* Wishlist */}
                                    <div className="relative ml-4 flow-root lg:ml-6">
                                        <a href="#" className="group -m-2 flex items-center p-2">
                                            <HeartIcon
                                                className="h-7 w-7 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                                aria-hidden="true"
                                            />
                                            <div
                                                className="absolute top-0 right-0 inline-block bg-red-500 text-white text-xs px-1 rounded-full">
                                                <span>0</span>
                                                <span className="sr-only">items in wishlist, view wishlist</span>
                                            </div>
                                        </a>
                                    </div>

                                    {/* Cart */}
                                    <div className="relative ml-4 flow-root lg:ml-6">
                                        <a href="#" className="group -m-2 flex items-center p-2">
                                            <ShoppingCartIcon
                                                className="h-7 w-7 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                                aria-hidden="true"
                                            />
                                            <div
                                                className="absolute top-0 right-0 inline-block bg-red-500 text-white text-xs px-1 rounded-full">
                                                <span>0</span>
                                                <span className="sr-only">items in cart, view cart</span>
                                            </div>
                                        </a>
                                    </div>

                                    {/* Account */}
                                    <div className="flex ml-4 lg:ml-6">
                                        <a href="#" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">Account</span>
                                            <UserIcon className="h-7 w-7" aria-hidden="true"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>

        </>
    )
}