import React from "react"

/**
 * Simple component to fix the height of the iframe.
 */
const Layout: React.FC<React.PropsWithChildren<{ height?: number }>> = ({
  children,
  height = 600,
}) => {
  return <div style={{ height }}>{children}</div>
}

export default Layout
