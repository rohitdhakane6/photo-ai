/**
 * An array of routes that are public
 * This does not require authentication
 * @type {string[]}
 */
export const publicRoutes: string[] = ["/"];


/**
 * An array of routes that are admin protected
 * This requires authentication and the user to be an admin
 * @type {string[]}
 */
export const adminProtectedRoutes: string[] = ["/admin"];