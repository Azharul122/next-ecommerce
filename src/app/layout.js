"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AuthProvider from "./Components/Auth/Providers/AuthProvider";
import { GlobalProviders } from "./Context/Providers/GlobalProviders";


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <AuthProvider>
          <GlobalProviders>
            <Header></Header>
            {children}
            <Footer></Footer>
          </GlobalProviders>
        </AuthProvider>

      </body>
    </html>
  );
}
