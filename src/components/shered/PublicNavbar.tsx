import { Menu, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getCookie } from "@/services/auth/tokenHandlers";
import LogoutButton from "./LogoutButton";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const Navbar = async () => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const accessToken = await getCookie("accessToken");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-purple-600 text-white shadow-md">
            <ShoppingBag size={18} />
          </div>
          <span className="text-lg font-bold tracking-wide">
            Electronic<span className="text-primary">Shop</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative text-muted-foreground transition hover:text-primary
              after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0
              after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-3">
          {accessToken ? (
            <LogoutButton />
          ) : (
            <Link href="/login">
             <Button
              className="
             rounded-full px-6
             bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
              text-white font-semibold
             shadow-lg shadow-purple-500/30
            hover:opacity-90 transition
        "
           >
  Login
</Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full"
              >
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[320px] p-6">
              <SheetTitle className="sr-only">Navigation</SheetTitle>

              <div className="flex flex-col gap-6 mt-10">
                {navItems.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium text-muted-foreground hover:text-primary transition"
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="mt-6 border-t pt-6">
                  {accessToken ? (
                    <LogoutButton />
                  ) : (
                    <Link href="/login">
                      <Button className="w-full rounded-full">
                        Login
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
