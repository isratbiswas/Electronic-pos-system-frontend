import { Menu, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getCookie } from "@/services/auth/tokenHandlers";
import LogoutButton from "./LogoutButton";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { getUserInfo } from "@/services/auth/getUserInfo";
import { getDefaultDashboardRoute } from "@/lib/auth-utils";
// import NavbarAuthButtons from "./NavbarAuthButtons";

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
    <header className="sticky top-6 z-50">
      {/* Floating Container */}
      <div className="relative mx-auto max-w-7xl rounded-full border  border-border/50 bg-background/70 backdrop-blur-xl shadow-lg">
        <div className="flex h-16 items-center justify-between px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center bg-indigo-600 rounded-xl text-white shadow">
              <ShoppingBag className="" size={18} />
            </div>
            <span className="text-xl font-bold tracking-wide">
              <span className="text-cyan-800">Electronic</span>
              <span className="ml-1 text-muted-foreground">Shop</span>
            </span>
          </Link>

          {/* Center Desktop Navigation */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  relative text-muted-foreground transition
                  hover:text-primary
                  after:absolute after:-bottom-1 after:left-0
                  after:h-[2px] after:w-0
                  after:bg-primary after:transition-all
                  hover:after:w-full
                "
              >
                {item.label}
              </Link>
            ))}

            {userInfo && (
              <Link
                href={dashboardRoute}
                className="
                  relative text-muted-foreground transition
                  hover:text-primary
                  after:absolute after:-bottom-1 after:left-0
                  after:h-[2px] after:w-0
                  after:bg-primary after:transition-all
                  hover:after:w-full
                "
              >
                Dashboard
              </Link>
            )}
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
                    bg-gradient-to-r from-teal-400 to-cyan-500
                    text-white font-semibold
                    shadow-md
                    hover:opacity-90
                    transition
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
                <Button size="icon" variant="outline" className="rounded-full">
                  <Menu />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[320px] p-6">
                <SheetTitle className="sr-only">Navigation</SheetTitle>

                <div className="mt-10 flex flex-col gap-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-lg font-medium text-muted-foreground hover:text-primary transition"
                    >
                      {item.label}
                    </Link>
                  ))}

                  {userInfo && (
                    <Link
                      href={dashboardRoute}
                      className="text-lg font-medium text-muted-foreground hover:text-primary transition"
                    >
                      Dashboard
                    </Link>
                  )}

                  <div className="mt-6 border-t pt-6">
                    {accessToken ? (
                      <LogoutButton />
                    ) : (
                      <Link href="/login">
                        <Button className="w-full rounded-full">Login</Button>
                      </Link>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
