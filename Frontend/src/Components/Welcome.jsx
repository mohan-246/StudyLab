import React from 'react'
import { useUser,UserButton } from '@clerk/clerk-react';
import ChatContainer from './ChatContainer';
import { Header } from './Header';

export const Welcome = () => {
    const { isLoaded, isSignedIn, user } = useUser();
    const userName=user.firstName
    if (!isLoaded || !isSignedIn) {
      return null;
    }
    
    return (
      <div className=" h-screen">
        {" "}
       
        <ChatContainer userName={userName}/>
      </div>
    );
}
