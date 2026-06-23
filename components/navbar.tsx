"use client";

import { useState } from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMenu2,
} from "@tabler/icons-react";
import { Download } from "lucide-react";
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
} from "@/components/ui/resizable-navbar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { navItems, socials, RESUME_URL, profile } from "@/lib/constants";

const socialLinks = [
  { href: socials.github, label: "GitHub", Icon: IconBrandGithub },
  { href: socials.linkedin, label: "LinkedIn", Icon: IconBrandLinkedin },
];

function Logo() {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center px-2 py-1 text-base font-semibold tracking-tight text-foreground"
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
  const [open, setOpen] = useState(false);
  const items = [...navItems];

  return (
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
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                aria-label="Open menu"
                className="flex items-center justify-center rounded-md p-1 text-foreground"
              >
                <IconMenu2 className="size-6" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="border-border bg-background/70 backdrop-blur-xl"
              >
                <SheetHeader>
                  <SheetTitle>{profile.name}</SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col gap-1 px-4">
                  {items.map((item) => (
                    <a
                      key={item.link}
                      href={item.link}
                      onClick={() => setOpen(false)}
                      className="rounded-md px-2 py-2.5 text-base text-foreground/80 transition-colors hover:bg-muted/50 hover:text-foreground"
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>

                <div className="mt-auto flex flex-col gap-4 p-4">
                  <a
                    href={RESUME_URL}
                    download
                    className={buttonVariants({ variant: "outline" })}
                  >
                    <Download className="size-4" />
                    Download Resume
                  </a>
                  <div className="flex items-center gap-1">
                    <SocialIcons />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </MobileNavHeader>
      </MobileNav>
    </ResizableNavbar>
  );
}
