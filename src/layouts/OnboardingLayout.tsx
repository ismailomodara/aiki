import AiFooter from "@/components/Onboarding/AiFooter";
import { useRouter } from 'next/router';

import styles from "@/styles/Layouts/layouts.module.scss"

import Link from "next/link";

const views = {
  login: {
    title: "Welcome!",
    description: "Please login to continue",
    cta: {
      text: "Don't have an account?",
      label: "Get one",
      route: "register"
    }
  },
  register: {
    title: "Hello!",
    description: "Let's create your account.",
    cta: {
      text: "Already have an account?",
      label: "Login",
      route: "login"
    }
  },
  "forgot-password": {
    title: "Forgot Password",
    description: "Provide email to recover your account",
    cta: {
      text: "Back to",
      label: "Login",
      route: "login"
    }
  },
  "reset-password": {
    title: "Reset Password",
    description: "Enter your new password"
  },
  "verify-token": {
    title: "Verify Token",
    description: "Please provide OTP sent to your email"
  }
}
export default function OnboardingLayout({ children }) {
  const { pathname } = useRouter();
  const route = pathname.split('onboarding/')[1];

  const view = views[route]

  return (
    <main>
      <div className={styles["ai-layout-onboarding"]}>
        <div className={styles["ai-layout-onboarding-body"]}>
          <h1>Aiki</h1>
        </div>
        <div className={styles["ai-layout-onboarding-content"]}>
          <div className={styles["ai-layout-onboarding-content-heading"]}>
            <h2>{ view.title }</h2>
            <p>{ view.description }</p>
          </div>
          <div className={styles["ai-layout-onboarding-content-form"]}>
            {children}
          </div>
          {
            view.cta && <div className={styles["ai-layout-onboarding-content-tagline"]}>
                  <p>{view.cta.text} <Link href={view.cta.route} >{view.cta.label}</Link></p>
              </div>
          }
          <AiFooter theme="light" />
        </div>
      </div>
    </main>
  )
}
