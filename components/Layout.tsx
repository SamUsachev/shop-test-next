import React from "react"
import Header from "./header"

interface LayoutInterface {
    children: React.ReactNode
}

const Layout: React.FC<LayoutInterface> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout