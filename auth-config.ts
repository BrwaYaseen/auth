import GithubProvider from "next-auth/providers/github";

import type { NextAuthConfig } from "next-auth";

export default {
  providers: [GithubProvider],
} satisfies NextAuthConfig;
