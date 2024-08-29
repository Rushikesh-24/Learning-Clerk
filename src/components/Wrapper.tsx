'use client'
import React from "react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import { ClerkProvider, useAuth } from "@clerk/nextjs";


const Wrapper = ({ children }: { children: React.ReactNode }) => {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string);
  return (
    <div>
      <ClerkProvider
        publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      >
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
          {children}
        </ConvexProviderWithClerk>
      </ClerkProvider>
    </div>
  );
};

export default Wrapper;
