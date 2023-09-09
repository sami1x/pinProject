import NextAuth from "next-auth"
import type { NextAuthOptions } from 'next-auth'

import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import async from '../../../page';


export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                if (
                    credentials?.username === "admin@example.com" &&
                    credentials.password === "admin"
                ) {
                    return {
                        id: "1",
                        email: "admin@example.com",
                    };
                }
                return null;
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        })
    ],
    callbacks: {
        async signIn({ account, profile, credentials }) {
            if (account != null) {
                if (account.provider === "google") {

                    if (profile != undefined) {
                        // return profile;
                        console.log(profile);

                        const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/addgoogleuser`;
                        const userData = {
                            username: profile.name,
                            email: profile.email,
                            google_id: profile.sub,
                            profile_image: profile.image
                        };

                        await fetch(apiUrl, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(userData)
                        });



                    }
                    return true;
                    //   return profile.email_verified && profile.email.endsWith("@example.com")
                }

            }
            return true; // Do different verification for other providers that don't have `email_verified`
        }
        // },
        // async session({session,token,user}) {

        //     console.log("checking session: " , token)
        //     session.user!.name=token.name;
        //     session.user!.email=token.email;

        //   return session;
        // }
    }


};


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

//print hello world
