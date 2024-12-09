"use client";

import { Microscope, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Microscope className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">META Research</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Leading-edge research in electromagnetic metamaterials and quantum science.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#research"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary focus:text-primary focus:outline-none"
                >
                  Research Areas
                </Link>
              </li>
              <li>
                <Link
                  href="#publications"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary focus:text-primary focus:outline-none"
                >
                  Publications
                </Link>
              </li>
              <li>
                <Link
                  href="#team"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary focus:text-primary focus:outline-none"
                >
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Mail className="h-4 w-4" />
                <span>contact@meta-research.edu</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+32 (0)16 32 11 11</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>KU Leuven, Belgium</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social media icons/links here */}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} META Research Group. All rights reserved.</p>
        </div>
    </footer>
  );
}
