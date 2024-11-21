import {PageWrapper} from "@/components/pagewrapper"

import {SignupForm} from "@/components/signupform"

export function Signup() {
  return (
    <div>
      <PageWrapper
        title='Signup'
        discription='Register to get started'
        imageSrc='./public/loginbg.jpg'
        altText='sdaf'>
        <SignupForm />
      </PageWrapper>
    </div>
  )
}
