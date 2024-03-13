import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import logo from "../../../assets/logo.png";
import profileImg from "../../../assets/profile.png";
import flag1 from "../../../assets/flag1.png";
import flag2 from "../../../assets/flag2.png";
import flag3 from "../../../assets/flag3.png";

import { RiArrowDownSFill } from "react-icons/ri";
import { RiArrowUpSFill } from "react-icons/ri";
import { MdOutlineFavorite } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const location = useLocation();
  const [isVenue, setIsVenue] = useState(false);
  const [isEntertain, setIsEntertain] = useState(false);
  const [isRental, setIsRental] = useState(false);
  const [isService, setIsService] = useState(false);
  const [isProfile, setIsProfile] = useState(false);

  const [isLang, setIsLang] = useState(false);

  const handleFocusVenue = () => {
    setIsVenue(!isVenue);
    setIsEntertain(false);
    setIsRental(false);
    setIsService(false);
    setIsLang(false);
    setIsProfile(false);
  };

  const handleFocusEntertain = () => {
    setIsVenue(false);
    setIsEntertain(!isEntertain);
    setIsRental(false);
    setIsService(false);
    setIsLang(false);
    setIsProfile(false);
  };
  const handleFocusRental = () => {
    setIsVenue(false);
    setIsEntertain(false);
    setIsRental(!isRental);
    setIsService(false);
    setIsLang(false);
    setIsProfile(false);
  };
  const handleFocusService = () => {
    setIsVenue(false);
    setIsEntertain(false);
    setIsRental(false);
    setIsService(!isService);
    setIsLang(false);
    setIsProfile(false);
  };
  const handleFocusProfile = () => {
    setIsVenue(false);
    setIsEntertain(false);
    setIsRental(false);
    setIsService(false);
    setIsLang(false);
    setIsProfile(!isProfile);
  };
  const handleFocusLang = () => {
    setIsVenue(false);
    setIsEntertain(false);
    setIsRental(false);
    setIsService(false);
    setIsLang(!isLang);
    setIsProfile(false);
  };

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return location.pathname=='/' || location.pathname=='/userRegister' || location.pathname==='/myannouncementss' || location.pathname=='/ProfessionalRegister' || location.pathname=='/userForgotpass' || location.pathname=='/ProfessionalDashboard' || location.pathname=='/myaccount' || location.pathname=='/Venues' || location.pathname=='/Entertainment' || location.pathname=='/Rental' || location.pathname=='/Services' || location.pathname=='/myannouncements' ? (<></>) : ( 
    <header className=" font-pop">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between  lg:px-8 lg:py-3 p-3"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/index" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src={logo} alt="logo-image" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex justify-center items-center">
          <Popover className="relative">
            <Popover.Button
              className={`flex items-center text-[#1A2736]   px-4 text-lg`}
              onClick={handleFocusVenue}
              tabIndex="0" // Make the button focusable
            >
              Venues
              {isVenue ? (
                <RiArrowUpSFill className="h-5 w-5 flex-none " />
              ) : (
                <RiArrowDownSFill
                  className={`h-5 w-5 flex-none 
                  }`}
                />
              )}
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className="absolute -left-8 top-full z-50 mt-3 w-[18rem] max-w-[18rem] overflow-hidden 
               bg-white shadow-lg"
              >
                <div className="p-4">
                  <ul className="grid  gap-2">
                    <li className="   ">
                      <span>Castles</span>
                    </li>
                    <li className="    ">
                      <span>Party Rooms</span>
                    </li>
                    <li className="  ">
                      <span>Bars</span>
                    </li>
                    <li className="  ">
                      <span>Hotels & Restaurants</span>
                    </li>
                    <li className="  ">
                      <span>Hotels & Restaurants</span>
                    </li>
                    <li className="  ">
                      <span>Conferences & Meeting Rooms</span>
                    </li>
                    <li className="  ">
                      <span>Open Air Spaces</span>
                    </li>
                    <li className="  ">
                      <span>Night Clubs</span>
                    </li>
                  </ul>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button
              className={`flex items-center text-[#1A2736]   px-4 text-lg`}
              onClick={handleFocusEntertain}
              tabIndex="0" // Make the button focusable
            >
              Entertainments
              {isEntertain ? (
                <RiArrowUpSFill className="h-5 w-5 flex-none " />
              ) : (
                <RiArrowDownSFill
                  className={`h-5 w-5 flex-none 
                  }`}
                />
              )}
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-[18rem] max-w-[18rem] overflow-hidden  bg-white shadow-lg">
                <div className="p-4">
                  <ul className="grid  gap-2">
                    <li className="   ">
                      <span>DJ</span>
                    </li>
                    <li className="    ">
                      <span>Singers</span>
                    </li>
                    <li className="  ">
                      <span>Magicians</span>
                    </li>
                    <li className="  ">
                      <span>Live Music Bands</span>
                    </li>
                    <li className="  ">
                      <span>Cover Bands</span>
                    </li>
                  </ul>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button
              className={`flex items-center gap-x-1 text-[#1A2736]   px-4 text-lg`}
              onClick={handleFocusRental}
              tabIndex="0" // Make the button focusable
            >
              Rental
              {isRental ? (
                <RiArrowUpSFill className="h-5 w-5 flex-none " />
              ) : (
                <RiArrowDownSFill
                  className={`h-5 w-5 flex-none 
                  }`}
                />
              )}
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-[18rem] max-w-[18rem] overflow-hidden  bg-white shadow-lg">
                <div className="p-4">
                  <ul className="grid  gap-2"></ul>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button
              className={`flex items-center gap-x-1 text-[#1A2736]   px-4 text-lg`}
              onClick={handleFocusService}
              tabIndex="0" // Make the button focusable
            >
              Services
              {isService ? (
                <RiArrowUpSFill className="h-5 w-5 flex-none " />
              ) : (
                <RiArrowDownSFill
                  className={`h-5 w-5 flex-none 
                  }`}
                />
              )}
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-[18rem] max-w-[18rem] overflow-hidden  bg-white shadow-lg">
                <div className="p-4">
                  <ul className="grid  gap-2"></ul>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link to={`/caseStudies`} className="text-[#1A2736]   px-4 text-lg">
            Blog
          </Link>

          <Popover className="relative">
            <Popover.Button
              className={`flex items-center gap-x-1 text-[#1A2736]   px-4 text-lg`}
              onFocus={handleFocusProfile}
              tabIndex="0" // Make the button focusable
            >
              <img
                src={profileImg}
                alt="Profile-image"
                className="2xl:w-[50px] 2xl:h-[50px] w-[30px] h-[30px]"
              />
              {isProfile ? (
                <RiArrowUpSFill className="h-5 w-5 flex-none " />
              ) : (
                <RiArrowDownSFill
                  className={`h-5 w-5 flex-none 
                  }`}
                />
              )}
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-[18rem] max-w-[18rem] overflow-hidden  bg-white shadow-lg ">
                <div className="p-4">
                  <ul className="grid  gap-2">
                    <li className="flex gap-2 justify-center items-center">
                      {" "}
                      <img
                        src={profileImg}
                        alt="Profile-image"
                        className="w-[20px] h-[20px]"
                      />
                      <span>My Profile</span>{" "}
                    </li>
                    <li className="flex gap-2 justify-center items-center">
                      {" "}
                      <MdOutlineFavorite /> <span>Favourites</span>{" "}
                    </li>
                    <li className="flex gap-2 justify-center items-center">
                      {" "}
                      <span>
                        <FiLogOut />
                      </span>{" "}
                      <span>Logout</span>{" "}
                    </li>
                  </ul>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button
              className={`flex items-center gap-x-1 text-[#1A2736]   px-4 text-lg`}
              onClick={handleFocusLang}
              tabIndex="0" // Make the button focusable
            >
              Lang
              {isLang ? (
                <RiArrowUpSFill className="h-5 w-5 flex-none " />
              ) : (
                <RiArrowDownSFill
                  className={`h-5 w-5 flex-none 
                  }`}
                />
              )}
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-[18rem] max-w-[18rem] overflow-hidden  bg-white shadow-lg">
                <div className="p-4">
                  <ul className="grid  gap-2">
                    <li className="flex gap-2">
                      {" "}
                      <img src={flag2} alt="flagImages" /> <span>EN</span>{" "}
                    </li>
                    <li className="flex gap-2">
                      {" "}
                      <img src={flag3} alt="flagImages" /> <span>DE</span>{" "}
                    </li>
                    <li className="flex gap-2">
                      {" "}
                      <img src={flag1} alt="flagImages" /> <span>FR</span>{" "}
                    </li>
                  </ul>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className=" fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black  sm:max-w-sm  ">
          <div className="flex items-center justify-between  p-3">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={logo}
                alt="mediafy-image1"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-2 flow-root">
            <div className="-my-6 divide-y ">
              <div className=" py-3 p-3 ">
                <div className="pb-3">
                  <ul className="flex flex-row gap-2">
                    <li className="flex justify-center items-center gap-1 border-white pr-2 border-r">
                      {" "}
                      <img
                        src={flag2}
                        alt="flagImages"
                        className="w-[16px] h-[16px]"
                      />{" "}
                      <span className="text-white">EN</span>{" "}
                    </li>
                    <li className="flex justify-center items-center gap-1 border-white pr-2 border-r">
                      {" "}
                      <img
                        src={flag3}
                        alt="flagImages"
                        className="w-[16px] h-[16px]"
                      />{" "}
                      <span className="text-white">DE</span>{" "}
                    </li>
                    <li className="flex justify-center items-center gap-1 ">
                      {" "}
                      <img
                        src={flag1}
                        alt="flagImages"
                        className="w-[16px] h-[16px]"
                      />{" "}
                      <span className="text-white">FR</span>{" "}
                    </li>
                  </ul>
                </div>
                <div className="border border-y-[#352c80]">
                  <Disclosure as="div" className="">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2  text-lg  text-white">
                          Venues
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className=" space-y-2 text-white">
                          <Disclosure.Button
                            as="a"
                            href="#"
                            className="block rounded-lg py- pl-5 pr-3 text-lg font-light"
                          >
                            Castles
                          </Disclosure.Button>
                          <Disclosure.Button
                            as="a"
                            href="#"
                            className="block rounded-lg py- pl-5 pr-3 text-lg font-light"
                          >
                            Party Rooms
                          </Disclosure.Button>
                          <Disclosure.Button
                            as="a"
                            href="#"
                            className="block rounded-lg py- pl-5 pr-3 text-lg font-light"
                          >
                            Bars
                          </Disclosure.Button>
                          <Disclosure.Button
                            as="a"
                            href="#"
                            className="block rounded-lg py- pl-5 pr-3 text-lg font-light"
                          >
                            Hotel & Restaurants
                          </Disclosure.Button>
                          <Disclosure.Button
                            as="a"
                            href="#"
                            className="block rounded-lg py- pl-5 pr-3 text-lg font-light"
                          >
                            Conference & Meeting Rooms
                          </Disclosure.Button>
                          <Disclosure.Button
                            as="a"
                            href="#"
                            className="block rounded-lg py- pl-5 pr-3 text-lg font-light"
                          >
                            Open Air Space
                          </Disclosure.Button>
                          <Disclosure.Button
                            as="a"
                            href="#"
                            className="block rounded-lg py- pl-5 pr-3 text-lg font-light"
                          >
                            Night Clubs
                          </Disclosure.Button>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <Disclosure as="div" className="">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2  text-lg text-white ">
                          Entertainment
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className=" space-y-2 text-white">
                          <Disclosure.Button
                            as="a"
                            href="#"
                            className="block rounded-lg py- pl-5 pr-3 text-lg font-light"
                          >
                            DJ
                          </Disclosure.Button>
                          <Disclosure.Button
                            as="a"
                            href="#"
                            className="block rounded-lg py- pl-5 pr-3 text-lg font-light"
                          >
                            Singers
                          </Disclosure.Button>
                          <Disclosure.Button
                            as="a"
                            href="#"
                            className="block rounded-lg py- pl-5 pr-3 text-lg font-light"
                          >
                            Megicians
                          </Disclosure.Button>
                          <Disclosure.Button
                            as="a"
                            href="#"
                            className="block rounded-lg py- pl-5 pr-3 text-lg font-light"
                          >
                            Live Music Bands
                          </Disclosure.Button>
                          <Disclosure.Button
                            as="a"
                            href="#"
                            className="block rounded-lg py- pl-5 pr-3 text-lg font-light"
                          >
                            Cover Bands
                          </Disclosure.Button>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <Disclosure as="div" className="">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2  text-lg text-white ">
                          Rental
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className=" space-y-2 text-white">
                          <Disclosure.Button
                            as="a"
                            href="#"
                            className="block rounded-lg py- pl-5 pr-3 text-lg font-light"
                          >
                            DJ
                          </Disclosure.Button>
                          <Disclosure.Button
                            as="a"
                            href="#"
                            className="block rounded-lg py- pl-5 pr-3 text-lg font-light"
                          >
                            Singers
                          </Disclosure.Button>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2  text-lg text-white ">
                          Services
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className=" space-y-2 text-white">
                          <Disclosure.Button
                            as="a"
                            href="#"
                            className="block rounded-lg py- pl-5 pr-3 text-lg font-light"
                          >
                            DJ
                          </Disclosure.Button>
                          <Disclosure.Button
                            as="a"
                            href="#"
                            className="block rounded-lg py- pl-5 pr-3 text-lg font-light"
                          >
                            Singers
                          </Disclosure.Button>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Link href="#" className=" text-white text-lg pb-3 block  ">
                    Blog
                  </Link>
                </div>
                <div>
                  <h2 className="text-white">Join Us On</h2>
                  <ul className="flex flex-row gap-2 mt-1">
                    <li className="">
                      <Link to="#">
                        <FaFacebookF style={{ color: "white" }} />
                      </Link>
                    </li>
                    <li className="">
                      <Link to="#">
                        <FaInstagram style={{ color: "white" }} />
                      </Link>
                    </li>
                    <li className=" ">
                      <Link to="#">
                        <FaLinkedinIn style={{ color: "white" }} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>)
  ;
}
