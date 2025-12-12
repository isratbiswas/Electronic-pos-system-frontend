/* eslint-disable @typescript-eslint/no-explicit-any */

import { verifyAccessToken } from "@/lib/jwtHandler";
import { serverFetch } from "@/lib/server-fetch";
import { parse } from "cookie";
import { deleteCookie, getCookie, setCookie } from "./tokenHandlers";
import { IUser } from "@/types";
import { toast } from "sonner";

export async function getNewAccessToken() {
  try {
    const accessToken = await getCookie("accessToken");
    const refreshToken = await getCookie("refreshToken");

    //case-1: Both tokens are missing - user is logged out
    if (!accessToken && !refreshToken) {
      return {
        tokenRefreshed: false,
      };
    }

    //case -2 : Access token exist and need to verify
    if (accessToken) {
      const verifiedToken = await verifyAccessToken(accessToken);

      if (verifiedToken.success) {
        return {
          tokenRefreshed: false,
        };
      }

      //case - 3: refresh token is missing - user is logged out
      if (!refreshToken) {
        return {
          tokenRefreshed: false,
        };
      }

      let accessTokenObject: null | any = null;
      let refreshTokenObject: null | any = null;
      // API Call - serverFetch will skip getNewAccessToken for /auth/refresh-token endpoint

      const response = await serverFetch.post("/auth/refresh-token", {
        headers: {
          Cookie: `refreshToken = ${refreshToken}`,
        },
      });

      const result = await response.json();
      console.log("access token refreshed!!");

      const setCookieHeaders = response.headers.getSetCookie();
      if (setCookieHeaders && setCookieHeaders.length > 0) {
        setCookieHeaders.forEach((cookie: string) => {
          const parsedCookie = parse(cookie);
          if (parsedCookie["accessToken"]) {
            accessTokenObject = parsedCookie;
          }
          if (parsedCookie["refreshToken"]) {
            refreshTokenObject = parsedCookie;
          }
        });
      } else {
        throw new Error("No set-Cookie header found");
      }
      if (!accessTokenObject) {
        throw new Error("Tokens not found in cookies");
      }
      if (!refreshTokenObject) {
        throw new Error("Tokens not found in cookies");
      }

      await deleteCookie("accessToken");
      await setCookie("accessToken", accessTokenObject.accessToken, {
        secure: true,
        httpOnly: true,
        maxAge:
          parseInt(accessTokenObject["Max-Age"]) || 1000 * 60 * 60 * 24 * 30,
        path: accessTokenObject.Path || "/",
        sameSite: accessTokenObject["SameSite"] || "none",
      });

      await deleteCookie("refreshToken");
      await setCookie("refreshToken", refreshTokenObject.refreshToken, {
        secure: true,
        httpOnly: true,
        maxAge:
          parseInt(refreshTokenObject["Max-Age"]) || 1000 * 60 * 60 * 24 * 90,
        path: refreshTokenObject.Path || "/",
        sameSite: refreshTokenObject["SameSite"] || "none",
      });
      if (!result.success) {
        throw new Error(result.message || "Token refresh failed");
      }
      return {
        tokenRefreshed: true,
        success: true,
        message: "Token refreshed successfully",
      };
    }
  } catch (error: any) {
    return {
      tokenRefreshed: false,
      success: false,
      message: error?.message || "Something went wrong",
    };
  }
}

export const updateProfile = async (payload: Partial<IUser>) => {
  try {
    const response = await serverFetch.patch(`/user/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    console.log(result, "updated");
    return result;
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong"
      }`,
    };
  }
};
