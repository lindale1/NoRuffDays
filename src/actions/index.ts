// index.ts used for authentication and authorization
'use server'

import { signIn, signOut } from "../auth";

// Signs out user
export async function doLogout() {
    await signOut({ redirectTo: "/"});
} // doLogout

// Calls for credentials to login user
export async function doCredentialLogin(formData: FormData): Promise<any> {
    // Get email and password
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
        const response = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });
        return response;
    } catch (err: any) {
        throw err;
    } // try-catch
} // doCredentialLogin