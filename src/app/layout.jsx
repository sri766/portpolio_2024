import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import StarsCanvas from "../components/StarBackground";

const outfit = Outfit({ subsets: ["latin"], display: 'swap' });

export const metadata = {
  title: "Srisanth | Portfolio",
  description: "This is my portfolio website",
};

const client = new ApolloClient({
  uri: 'https://gql.hashnode.com/',
  cache: new InMemoryCache(),
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ApolloProvider client={client}>
          <Navbar />
          <StarsCanvas />
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}
