"use client";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMenu2,
} from "@tabler/icons-react";
import {
  MobileNav,
  MobileNavHeader,
  NavBody,
  NavItems,
  Navbar as ResizableNavbar,
} from "@/components/ui/resizable-navbar";
import { RESUME_URL, navItems, profile, socials } from "@/lib/constants";

import { AnimatePresence, motion } from "motion/react";
import { CurvedMenu } from "@/components/curved-menu/curved-menu";
import { Download } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { useState } from "react";

const socialLinks = [
  { href: socials.github, label: "GitHub", Icon: IconBrandGithub },
  { href: socials.linkedin, label: "LinkedIn", Icon: IconBrandLinkedin },
];

function Logo() {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center px-2 py-1 text-sm font-display font-semibold tracking-tight text-foreground"
    >
      {profile.name}
    </a>
  );
}

function SocialIcons() {
  return (
    <>
      {socialLinks.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <Icon className="size-5" />
        </a>
      ))}
    </>
  );
}

export function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const items = [...navItems];

  return (
    <>
      <ResizableNavbar className="fixed top-4">
        {/* Desktop */}
        <NavBody>
          <Logo />
          <NavItems items={items} />
          <div className="relative z-20 flex items-center gap-1">
            <SocialIcons />
            <a
              href={RESUME_URL}
              download
              aria-label="Download resume"
              title="Download resume"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Download className="size-5" />
            </a>
            <div className="mx-1 h-5 w-px bg-border" />
            <ModeToggle />
          </div>
        </NavBody>

        {/* Mobile */}
        <MobileNav>
          <MobileNavHeader>
            <Logo />
            <div className="flex items-center gap-2">
              <ModeToggle />
              <button
                type="button"
                onClick={() => setIsActive(true)}
                aria-label="Open menu"
                aria-expanded={isActive}
                className="flex items-center justify-center rounded-md p-1 text-foreground"
              >
                <IconMenu2 className="size-6" />
              </button>
            </div>
          </MobileNavHeader>
        </MobileNav>
      </ResizableNavbar>

      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            key="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsActive(false)}
            className="fixed inset-0 z-[55] bg-black/40 lg:hidden"
          />
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isActive && <CurvedMenu onNavigate={() => setIsActive(false)} />}
      </AnimatePresence>
    </>
  );
}
