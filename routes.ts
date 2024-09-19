// Public routes that don't require authentication
export const publicRoutes = ["/", "/auth/new-verification"];

// Authentication routes that handle user login, registration, etc.
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

// Prefix for API authentication routes
export const apiAuthPrefix = "/api/auth";

// Default redirect path after successful login
export const DEFAULT_LOGIN_REDIRECT = "/settings";
