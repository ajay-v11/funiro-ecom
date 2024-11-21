import {PageWrapper} from "@/components/pagewrapper"
import {Signin} from "@/components/sign-in"


export function Login() {
  return (
    <div>
      <PageWrapper
        title='Login'
        discription='Welcome back'
        imageSrc='./public/loginbg.jpg'
        altText='sdaf'>
        <Signin />
      </PageWrapper>
    </div>
  )
}
