import {ReactNode} from "react"
import {Header} from "../components/Header"

interface LayoutPropType {
  children: ReactNode
}

export function Layout({children}: LayoutPropType) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}
