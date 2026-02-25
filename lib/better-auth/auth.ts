import { betterAuth } from "better-auth";
import {mongodbAdapter} from "better-auth/adapters/mongodb";
import { connectToDatabase} from "@/database/mongoose";
import { nextCookies} from "better-auth/next-js";

const authInstance:ReturnType<typeof betterAuth> | null = null;

export const auth = betterAuth({


});