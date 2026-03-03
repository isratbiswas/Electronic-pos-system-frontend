import { Menu, ShoppingBag, LayoutDashboard, User, LogIn } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getCookie } from "@/services/auth/tokenHandlers";
import LogoutButton from "./LogoutButton";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetHeader,
} from "../ui/sheet";
import { getUserInfo } from "@/services/auth/getUserInfo";
import { getDefaultDashboardRoute } from "@/lib/auth-utils";

const Navbar = async () => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const accessToken = await getCookie("accessToken");
  const userInfo = accessToken ? await getUserInfo() : null;
  const dashboardRoute = userInfo
    ? getDefaultDashboardRoute(userInfo.data.role)
    : "/";

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4">
      {/* Floating Container with Glassmorphism */}
      <div className="mx-auto max-w-7xl rounded-full border border-white/20 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
        <div className="flex h-14 items-center justify-between px-6 lg:px-8">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-lg text-white transition-transform group-hover:scale-110">
              <ShoppingBag size={18} />
            </div>
            <span className="text-lg font-bold tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                Electro
              </span>
              <span className="text-slate-600 dark:text-slate-400">Shop</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors rounded-full hover:bg-slate-100/50"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {userInfo && (
              <Link href={dashboardRoute} className="hidden md:flex">
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2 rounded-full text-slate-600"
                >
                  <LayoutDashboard size={16} />
                  Dashboard
                </Button>
              </Link>
            )}

            <div className="h-6 w-px bg-slate-200 hidden md:block" />

            {accessToken ? (
              <div className="flex items-center gap-2">
                <LogoutButton />
              </div>
            ) : (
              <Link href="/login">
                <Button
                  size="sm"
                  className="rounded-full px-5 bg-indigo-600 hover:bg-indigo-700 shadow-sm"
                >
                  <LogIn className="mr-2" size={16} />
                  Login
                </Button>
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="icon" variant="ghost" className="rounded-full">
                    <Menu size={20} />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="rounded-l-3xl border-none"
                >
                  <div className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="text-lg font-semibold px-4 py-3 rounded-2xl hover:bg-slate-50 transition"
                      >
                        {item.label}
                      </Link>
                    ))}

                    <div className="my-2 border-t border-slate-100" />

                    {userInfo && (
                      <Link
                        href={dashboardRoute}
                        className="flex items-center gap-3 text-lg font-semibold px-4 py-3 rounded-2xl text-indigo-600 bg-indigo-50"
                      >
                        <LayoutDashboard size={20} />
                        Dashboard
                      </Link>
                    )}

                    <div className="mt-4">
                      {accessToken ? (
                        <LogoutButton />
                      ) : (
                        <Link href="/login" className="w-full">
                          <Button className="w-full rounded-2xl h-12 text-lg">
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
        </div>
      </div>
    </header>
  );
};

export default Navbar;
