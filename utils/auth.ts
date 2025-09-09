import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import { PrismaClient, Prisma } from "../app/generated/prisma";
import { createAuthMiddleware } from "better-auth/api";
import { userAc } from "better-auth/plugins/admin/access";
import { admin } from "better-auth/plugins";

const prisma = new PrismaClient();

export const auth = betterAuth({
    user: {
        additionalFields: {
            ptAPIKey: {
                type: "string",
                required: false,
                input: false
            },
        }
    },
    database: prismaAdapter(prisma, {
        provider: "sqlite", // or "mysql", "postgresql", ...etc
    }),
    emailAndPassword: {
        enabled: true,
    },
    databaseHooks: {
        user: {
            create: {
                before: async (user) => ({
                    data: {
                        ...user,
                        ptAPIKey: Math.random().toString(36).slice(2, 18),
                    }

                })
            }
        },
        session: {
            create: {
                before: async (session, context) => {
                    console.log(JSON.stringify(context, null, 2));

                    return {
                        data: {
                            ...session,

                        }
                    }
                },
            }
        }
    },
    plugins: [
        admin()
    ]
});

type Session = typeof auth.$Infer.Session
