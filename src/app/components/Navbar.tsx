import Image from "next/image";
import Link from "next/link";
import LogoImg from '../../../public/images/logo.svg';
import menuIcon from '../../../public/images/icon-hamburger.svg';
import closeIcon from '../../../public/images/icon-close.svg';
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from 'motion/react';

const navLink: { label: string; href: string }[] = [
    {
        label: 'home',
        href: '/'
    },
    {
        label: 'shop',
        href: '#'
    },
    {
        label: 'about',
        href: '#'
    },
    {
        label: 'contact',
        href: '#'
    }
]

const linkStyle = 'relative before:absolute before:content-[""] before:h-[0.5px] before:w-0 before:bg-primaryColor before:left-1/2 before:-translate-x-1/2 before:top-5 before:transition-all before:duration-300 hover:before:w-1/2';
const activeLink = 'relative before:absolute before:content-[""] before:h-[0.5px] before:w-1/2 before:bg-primaryColor before:left-1/2 before:-translate-x-1/2 before:top-5';

export default function Navbar () {
    const pathName = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <>
            {/* Desktop */}
            <nav className="absolute top-0 left-0 w-full md:flex hidden items-center gap-14 h-28 px-10 text-primaryColor">
                {/* Logo */}
                <Image src={LogoImg} alt="Logo Img"/>
                <ul className="flex gap-8">
                {navLink.map(({label, href}) => (
                    <li key={label}>
                        <Link href={href} className={`${href === pathName && activeLink} ${linkStyle}`}>{label}</Link>
                    </li>
                ))}
                </ul>
            </nav>
            {/* Mobile */}
            <nav className="absolute top-0 left-0 w-full md:hidden flex items-center justify-between h-28 px-10 text-primaryColor">
                <button type="button" className="cursor-pointer">
                    <Image onClick={() => setIsMobileMenuOpen(true)} src={menuIcon} alt="menu Icon"/>
                </button>
                {/* Logo */}
                <div className="flex w-full items-center justify-center">
                    <Image src={LogoImg} alt="Logo Img"/>
                </div>
            </nav>
            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.nav 
                        key="mobile-menu"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-primaryColor w-full h-24 fixed top-0 left-0 z-20"
                    >
                        <ul className="flex justify-between items-center h-full gap-4 px-8">
                            <button type="button" className="cursor-pointer">
                                <Image onClick={() => setIsMobileMenuOpen(false)} src={closeIcon} alt="close Icon"/>
                            </button>
                            {navLink.map(({label, href}) => (
                                <li key={label}>
                                    <Link href={href} className={`${href === pathName && activeLink} ${linkStyle}`}>{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
            
            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        key="mobile-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-secondaryColor w-full h-full fixed top-0 left-0 z-10"
                    />
                )}
            </AnimatePresence>
        </>
    )
}