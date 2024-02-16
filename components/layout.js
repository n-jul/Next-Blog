import Head from 'next/head'
import React from 'react'
import Footer from './footer'
import Navbar from './navbar'

const Layout = ({ children }) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Head>
                <title>Next Blog</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className='container mx-auto flex-1 min-h-screen'>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout