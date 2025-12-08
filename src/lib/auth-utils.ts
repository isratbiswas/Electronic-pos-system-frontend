

export type  UserRole ="ADMIN" | "MANAGER" | "CASHIER" ;

export type  RouteConfig = {
    exact: string[],
    patterns: RegExp[],
}

export const authRoutes = ["/login", "/register"]

export const commonProtectedRoutes : RouteConfig ={
    exact : ['/my-profile'],
    patterns: [],
}

export const managerProtectedRoutes: RouteConfig = {
    exact : ['/my-profile'],
    patterns: []
}
export const adminProtectedRoutes: RouteConfig = {
  patterns   : [/^\/admin/],
     exact: []
}
export const cashierProtectedRoutes: RouteConfig = {
     patterns   : [/^\/dashboard/],
     exact: []
}

export const isAuthRoute = (pathname: string) =>{
    return authRoutes.some((route:string) => route === pathname)
}

export const isRouteMatches = (pathname: string, routes: RouteConfig) : boolean =>{
    if(routes.exact.includes(pathname)){
        return true
    }

    return routes.patterns.some((pattern: RegExp) => pattern.test(pathname ))
}

export const getRouteOwner = (pathname: string) : "ADMIN" | "MANAGER" | "CASHIER" | null => {
    if(isRouteMatches(pathname, adminProtectedRoutes)) {
        return "ADMIN"
    }
    if(isRouteMatches(pathname, managerProtectedRoutes)) {
        return "MANAGER"
    }
    if(isRouteMatches(pathname, cashierProtectedRoutes)) {
        return "CASHIER"
    }
    return null
}

export const getDefaultDashboardRoute = (role:UserRole): string =>{
    if(role === "ADMIN"){
        return "/admin/dashboard"
    }
    if(role === "MANAGER"){
        return "/manager/dashboard"
    }
    if(role === "CASHIER"){
        return "/dashboard"
    }
    return "/"
}

export const isValidRedirectForRole = (redirectPath: string, role: UserRole):boolean =>{
    const routeOwner= getRouteOwner(redirectPath);
    if(routeOwner === role){
        return true;
    }
    return false
}
