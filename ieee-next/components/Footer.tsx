import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronRight, MapPin, Mail } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { NAV_LINKS } from '@/Data';
import EEC_IEEE from '../public/EEC_IEEE.png';

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-950 text-gray-400 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 mb-14">
            <div>
              <div className="font-black text-2xl text-white mb-3">
                < Image alt={`student branch logo`} src={EEC_IEEE} className="w-45" />
              </div>
              <p className="text-sm leading-relaxed mb-5">
                IEEE Everest Engineering College Student Branch — advancing technology and professional excellence at EEC, Sanepa, Lalitpur.
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: FaFacebook, label: "Facebook" },
                  { Icon: FaInstagram, label: "Instagram" },
                  { Icon: FaLinkedin, label: "LinkedIn" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-9 h-9 bg-gray-800 hover:bg-[#00629B] rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm hover:text-[#4db8ff] transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#4db8ff] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm leading-relaxed">
                    Everest Engineering College
                    <br />
                    Sanepa-02, Lalitpur, Nepal
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#4db8ff] flex-shrink-0" aria-hidden="true" />
                  <a
                    href="mailto:ieee.eec.studentchapter@gmail.com"
                    className="text-sm hover:text-[#4db8ff] transition-colors break-all"
                  >
                    ieee.eec.studentchapter@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
            <span>© {new Date().getFullYear()} IEEE EEC Student Branch. All rights reserved.</span>
            <span>Developed by IEEE EEC Student Branch Webmaster Team</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer