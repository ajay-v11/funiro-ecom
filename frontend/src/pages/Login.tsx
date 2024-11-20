import {PageWrapper} from "@/components/pagewrapper"
import {Signin} from "@/components/sign-in"
import {Card} from "@/components/ui/card"

export function Login() {
  return (
    <div>
      <PageWrapper
        title='Login'
        discription='Welcome back'
        imageSrc='dsaf'
        altText='sdaf'>
        <Signin />
      </PageWrapper>
    </div>
  )
}
