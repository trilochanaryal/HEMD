"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { SearchDialog } from "./SearchDialog";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Contact", href: "contact" },
    { name: "Links", href: "links" },
    { name: "Members", href: "members" },
    { name: "Openings", href: "openings" },
    { name: "Publications", href: "publications" },
    { name: "Research", href: "research" },
  ];

  return (
    <>
      <nav className="fixed w-full z-50 bg-white text-gray-900 dark:bg-black dark:text-white border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={"hemd.webp"} alt="logo" width={40} height={40} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16"/>
              <span className="font-bold text-xl sm:hidden">HEMD</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Search and Theme Toggle */}
            <div className="hidden lg:flex items-center space-x-4">
              <SearchDialog />
              <ThemeToggle />
              <Button>Apply Now</Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              <SearchDialog />
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground p-2 rounded-md hover:bg-accent"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { height: "auto", opacity: 1 },
            closed: { height: 0, opacity: 0 },
          }}
          className="lg:hidden overflow-hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700"
        >
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-foreground/70 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full">Apply Now</Button>
            </div>
          </div>
        </motion.div>
      </nav>
      <div className="pt-20">
        {/* Main content goes here */}
      </div>
    </>
  );
};

export default Navbar;