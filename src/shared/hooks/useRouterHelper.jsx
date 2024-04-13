"use client";

import { usePathname } from "next/navigation";
import { ROUTES } from "@/shared/routes/routes";

export const useRouterHelper = () => {
  const pathname = usePathname();

  const getCurrentRoute = () => {
    const currentRoute = ROUTES.find((route) => route.path === pathname);
    return currentRoute;
  };

  const isOnRoute = (route) => {
    return pathname === route;
  };

  const getRouteExcluding = (routeExclude) => {
    return ROUTES.filter((route) => route.name !== routeExclude);
  };

  const getOneRoute = (routeName) => {
    return ROUTES.find((route) => route.name === routeName);
  };

  return {
    getCurrentRoute,
    isOnRoute,
    getRouteExcluding,
    getOneRoute,
  };
};
