import { adminClient, inferAdditionalFields } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react"
import { auth } from "./auth";

export const authClient = createAuthClient({
    plugins: [
        adminClient(),
        inferAdditionalFields<typeof auth>()
    ],
});
export const { signIn, signUp, useSession } = authClient;
export type Session = typeof authClient.$Infer.Session
