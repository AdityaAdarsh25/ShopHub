import { useAuth } from "@/context/AuthContext"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Link, useNavigate } from "react-router-dom"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ShoppingCart, User, LogOut, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const { isAuthenticated, logout, userSession } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const getInitials = (name: string) => {
    if (!name) return "U";
    const parts = name.split(" ").filter(Boolean);
    const initials = parts.map((n) => n[0]).join("").toUpperCase();
    return initials || "U";
  };

  const getFirstName = (nameOrEmail?: string) => {
    if (!nameOrEmail) return "User";
    // if contains space, treat as full name and return first part
    if (nameOrEmail.includes(" ")) return nameOrEmail.split(" ")[0];
    // if looks like an email, take the part before @ and split on dots
    if (nameOrEmail.includes("@")) {
      const local = nameOrEmail.split("@")[0];
      const first = local.split(/[._-]/)[0];
      return first.charAt(0).toUpperCase() + first.slice(1);
    }
    // fallback
    return nameOrEmail;
  };

  return (
    <div className="w-full border-b bg-white shadow-sm">
      <NavigationMenu className="max-w-none justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ShopHub
          </Link>
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" className="text-sm font-medium hover:text-blue-600 transition">
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button className="text-sm font-medium hover:text-blue-600 transition">
                Products
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium">Categories</NavigationMenuTrigger>
              <NavigationMenuContent className="w-48">
                <div className="p-4 space-y-2">
                  <button className="block px-3 py-2 rounded hover:bg-gray-100 w-full text-left">
                    Beauty & Personal Care
                  </button>
                  <button className="block px-3 py-2 rounded hover:bg-gray-100 w-full text-left">
                    Electronics
                  </button>
                  <button className="block px-3 py-2 rounded hover:bg-gray-100 w-full text-left">
                    Home Appliances
                  </button>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>

        <NavigationMenuList className="gap-4">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <ShoppingCart size={20} />
                Cart
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {isAuthenticated ? (
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="focus:outline-none mr-2">
                    <Avatar className="h-10 w-10 cursor-pointer hover:opacity-80 transition">
                      <AvatarImage src="" alt={userSession?.name || userSession?.email} />
                      <AvatarFallback className="bg-blue-600 text-white font-semibold">
                        {getInitials(userSession?.name || userSession?.email || "User")}
                      </AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel className="font-semibold">
                    {getFirstName(userSession?.name || userSession?.email)}
                  </DropdownMenuLabel>
                  <div className="text-xs text-gray-500 px-2 py-1">
                    {userSession?.email}
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                    <User size={16} />
                    My Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                    <ShoppingCart size={16} />
                    My Cart
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                    <ShoppingCart size={16} />
                    My Orders
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                    <Settings size={16} />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="flex items-center gap-2 cursor-pointer text-red-600 focus:bg-red-50"
                  >
                    <LogOut size={16} />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>
          ) : (
            <>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Button variant="outline" size="sm" onClick={() => navigate("/signin")}>
                    Sign In
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700" onClick={() => navigate("/signup")}>
                    Sign Up
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;