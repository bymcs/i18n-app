import React from "react";
import Link from "next/link";
import { Menu, Earth } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "./language-switcher";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:px-6">
      <div className="flex h-14 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          {" "}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden" // md:hidden
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 py-6 pl-6">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <Link href="/" className="mb-4 flex items-center space-x-2 pl-6">
                <Earth className="h-6 w-6 mr-3" />
                <span className="font-bold">My i18n App</span>
              </Link>
              <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                <div className="flex flex-col space-y-3">
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <div className="hidden md:flex">
            {" "}
            <Link href="/" className="flex items-center space-x-2">
              <Earth className="h-6 w-6" />
              <span className="font-bold sm:inline-block">My i18n App</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-2 mr-2">
          {" "}
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
