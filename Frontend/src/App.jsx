import { useState } from "react";
import "./App.css";
import { Welcome } from "./Components/Welcome";
import { dark } from '@clerk/themes';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <>
      <ClerkProvider
      appearance={{
        baseTheme: dark
      }}
      publishableKey={clerkPubKey}
    >
        <SignedIn>
          <Welcome />
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </ClerkProvider>
    </>
  );
}

export default App;
