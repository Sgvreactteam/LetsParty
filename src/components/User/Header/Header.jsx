import React, { Fragment, useState, useRef, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Sidebar } from "flowbite-react";
import logo from "../../../assets/logo.png";
import profileImg from "../../../assets/profile.svg";
import favourtie from "../../../assets/favourites.svg";
import logout from "../../../assets/logoutIcon.svg";
import flag1 from "../../../assets/flag1.png";
import flag2 from "../../../assets/flag2.png";
import flag3 from "../../../assets/flag3.png";
import { RiArrowDownSFill } from "react-icons/ri";
import { RiArrowUpSFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { t } from 'i18next';
import { useTranslation } from "react-i18next";
import Modaal from './Modaal'
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const data = [
    {
      category: "Venue",
      subcategory: [
        { href: "", label: t('castles') },
        { href: "", label: t('partyRooms') },
  
        { href: "", label: t('bars') },
        { href: "", label: t('hotelsRes') },
        { href: "", label: t('confMeet') },
        { href: "", label: t('openAir') },
        { href: "", label: t('nightClubs') },
      ],
    },
    {
      category: t('entertainment'),
      subcategory: [
        { href: "", label: "DJ" },
        { href: "", label: t('singers') },
  
        { href: "", label: t('magicians') },
        { href: "", label: t('liveMusic') },
        { href: "", label: t('coverBands') },
      ],
    },
    {
      category: t('rental'),
      subcategory: [
        { href: "/filter", label: t('audioSound') },
        { href: "/filter", label: t('lighting') },
  
        { href: "/filter", label: t('screens') },
        { href: "/filter", label: t('tents') },
        { href: "/filter", label: t('fotoboxes') },
        { href: "/filter", label: t('bouncyCastle') },
        { href: "/filter", label: t('furniture') },
        { href: "/filter", label: t('heating') },
        { href: "/filter", label: t('cars') },
      ],
    },
    {
      category: t('services'),
      subcategory: [
        { href: "/filter", label: t('decorators') },
        { href: "/filter", label: t('evePlanner') },
  
        { href: "/filter", label: t('photographers') },
        { href: "/filter", label: t('catering') },
        { href: "/filter", label: t('bakeries') },
        { href: "/filter", label: t('foodTrucks') },
        { href: "/filter", label: t('wine') },
        { href: "/filter", label: t('other') },
        { href: "/filter", label: t('staff') },
        { href: "/filter", label: t('security') },
        { href: "/filter", label: t('buses') },
      ],
    },
  ];

  const profile = [
    {
      image: profileImg,
      subcategory: [
        {
          id: 1,
          href: "/profile",
          image: profileImg,
          label: "My Profile",
        },
        {
          id: 2,
          image: favourtie,
          href: "/fav",
          label: "Favourites",
        },
        {
          id: 3,
          image: logout,
          href: "/",
          label: "Log Out",
        },
      ],
    },
  ];
  const { i18n } = useTranslation();
    const handleEnglish = () => {
      
        i18n.changeLanguage("en");
    }
    const handleGerman = () => {
        i18n.changeLanguage("gr");
    }
    const handleFrench = () => {
        i18n.changeLanguage("fr");
    }
  const language = [
    {
      flag: flag1,
      lang: "EN",
      subcategory: [

        { id: 2, flag: flag2, lang: "DE", func: handleGerman },
        { id: 3, flag: flag3, lang: "FR", func: handleFrench },
        { id: 1, flag: flag1, lang: "EN", func: handleEnglish },

      ],
    },
  ];

  const [openMenu, setOpenMenu] = useState(null);
  const active = true;
  const menuRef = useRef(null);
  
  
  const handleMenufirst = (category) => {
    setOpenMenu(null ?? category);
  };

  
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [hamburger, setHamburger] = useState(false);
  const showSidebar = () => {
    setHamburger(!hamburger);
  };

  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal open/close
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleMenuItemClick = (category) => {
    

    console.log("click")
    setIsModalOpen(true);
    setSelectedCategory(category);
  };

  

  return  (  
    <div className="border-b border-[#A2A2A2]">
      <header className="mx-auto flex max-w-7xl items-center justify-between ">
        <div className="flex flex-1">
          <Link to="/landingPage" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src={logo} alt="logo-image" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <Bars3Icon
              className="h-6 w-6"
              aria-hidden="true"
              onClick={showSidebar}
            />
          </button>
        </div>
        <div className="hidden lg:flex justify-center items-center">
          <div className="flex gap-2">
            {data.map(({ category, subcategory }) => (
              <Menu
                as="div"
                className="relative inline-block text-left"
                key={category}
              >
                <div ref={menuRef}>
                  <Menu.Button
                    className="inline-flex w-full justify-center items-center font-pop gap-x-1.5  bg-white px-3 py-2 text-lg  text-[#1A2737] shadow-sm "
                    onClick={() =>
                      handleMenufirst(category)
                    }
                  >
                    {category}
                    {openMenu === category ? (
                      <RiArrowUpSFill
                        className="-mr-1 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <RiArrowDownSFill
                        className="-mr-1 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    )}
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  show={openMenu === category}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-50  w-56 origin-top-right  bg-white shadow-lg ">
                    <div className="py-1">
                      {subcategory.map(({ label, href }) => (
                        <Menu.Item >
                            {href==="/filter"? (
                            <Link
                              to="/filter"
                              onClick={() => {console.log("click")}}
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-lg font-pop"
                              )}
                            >
                              {label}
                            </Link>): (
                              <Link

                              onMouseDown={() => {
                                console.log("sdggsfsdf");
                                handleMenuItemClick(category);
                              }}
                              onKeyDown={() => {
                                console.log("sdggsfsdf");
                                handleMenuItemClick(category);
                              }}
                              onTouchStart={() => {
                                console.log("sdggsfsdf");
                                handleMenuItemClick(category);
                              }}
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-lg font-pop"
                              )}
                            >
                              {label}
                            </Link>
                            )}

                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            ))}
          </div>
          <Modaal
            isModalOpen={isModalOpen}
            setIsModalOpen={() => setIsModalOpen(!isModalOpen)}
            category={selectedCategory}
          />

          <Link to={`#`} className="text-[#1A2736]   px-4 text-lg">
            Blog
          </Link>

          {profile.map(({ image, subcategory }) => (
            <Menu
              as="div"
              className="relative inline-block text-left z-100"
              key={image}
            >
              <div ref={menuRef}>
                <Menu.Button
                  className="inline-flex w-full justify-center items-center font-pop gap-x-1.5  bg-white px-3 py-2 text-lg  text-[#1A2737] shadow-sm "
                  onClick={() =>
                    setOpenMenu((prevOpenMenu) =>
                      prevOpenMenu === image ? null : image
                    )
                  }
                >
                  <img
                    src={image}
                    alt=""
                    className="2xl:w-[50px] 2xl:h-[50px] w-[30px] h-[30px]"
                  />
                  {openMenu === image ? (
                      <RiArrowUpSFill
                        className="-mr-1 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                  ) : (
                    <RiArrowDownSFill
                      className="-mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  )}
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                show={openMenu === image}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0  w-40 origin-top-right z-50 bg-white shadow-lg ">
                  <div className="py-1">
                    {subcategory.map(({ id, image, label, href }) => (
                      <Menu.Item key={id}>
                        {({ active }) => (
                          <Link to={href} >
                            <div className="flex flex-row pl-4 items-start py-2 gap-2 text-lg font-pop">
                              <img
                                src={image}
                                alt=""
                                className=" w-[25px] h-[25px]"
                              />{" "}
                              {label}
                            </div>
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          ))}

          {language.map(({ flag,lang, subcategory, index }) => (
            <Menu
              as="div"
              className="relative inline-block text-left"
              key={index}
            >
              <div ref={menuRef}>
                <Menu.Button
                  className="inline-flex w-full justify-center items-center font-pop gap-x-1.5  bg-white px-3 py-2 text-lg  text-[#1A2737] shadow-sm "
                  onClick={() =>
                    setOpenMenu((prevOpenMenu) =>
                      prevOpenMenu === flag ? null : flag
                    )
                  }
                >
                  <img src={flag} alt="" className=" w-[20px] h-[15px]" />
                  {lang}
                  {openMenu === flag ? (
                    <RiArrowUpSFill
                      className="-mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <RiArrowDownSFill
                      className="-mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  )}
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                show={openMenu === flag}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10  w-40 origin-top-right  bg-white shadow-lg ">
                  <div className="py-1">
                    {subcategory.map(({ id, flag, lang }) => (
                      <Menu.Item key={id}>
                        {() => (

                            <div  className="flex flex-row pl-4 items-center gap-2 text-lg font-pop">
                              <img
                                src={flag}
                                alt=""
                                className=" w-[20px] h-[15px]"
                              />{" "}
                              {lang}
                            </div>

                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          ))}
        </div>
      </header>
      <div className="lg:hidden visible  z-50 fixed h-[100vh] top-0 bg-black right-0">
        {hamburger && (
          <Sidebar
            className=" w-[250px] z-50 mt-4"
            aria-label="Sidebar with multi-level dropdown example"
          >
            <div className="flex items-center justify-between  p-3">
              <Link href="#" className="-m-1.5 p-1.5">
                <img
                  className="h-8 w-auto"
                  src={logo}
                  alt="mediafy-image1"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </Link>
              <button
                className="absolute right-4 top-5 lg:"
                onClick={showSidebar}
              >
                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>

            {language.map(({ func, subcategory, index }) => (
              <div className="flex gap-2" key={index}>
              {subcategory.map(({ id, flag, lang }) => (
                <div
                onClick={func}
                  className="flex flex-row gap-1 justify-center items-center"
                  key={id}
                >
                  <img src={flag} alt="" className="w-5 h-3" />
                  <span className="text-white">{lang}</span>
                </div>
              ))}
            </div>
            ))}

            <Sidebar.Items>
              <Sidebar.ItemGroup className="border-t-0 ">
                {data.map((category, index) => (
                  <Sidebar.Collapse
                    label={category.category}
                    key={index}
                    className="text-lg font-pop text-white"
                  >
                    {category.subcategory.map((sub, i) => (
                      <Sidebar.Item
                        className=" flex justify-start rounded-none text-white text-lg font-pop"
                        href={sub.href}
                        key={i}
                      >
                        {" "}
                        {sub.label}{" "}
                      </Sidebar.Item>
                    ))}
                  </Sidebar.Collapse>
                ))}
              </Sidebar.ItemGroup>
            </Sidebar.Items>
            <Link to={`#`} className="text-white   p-2 text-lg font-pop ">
              Blog
            </Link>

            <div>
              <h2 className="text-white text-lg font-pop p-2">Join Us On</h2>
              <ul className="flex flex-row gap-2 mt-1 p-2">
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
          </Sidebar>
        )}
      </div>
    </div>
  );
}