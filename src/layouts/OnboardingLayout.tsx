import styles from "@/styles/Layouts/layouts.module.scss"

export default function OnboardingLayout({ children }) {
  return (
    <div className={styles["ai-onboarding-layout"]}>
      <h1>Onboarding Layout</h1>
      <main>{children}</main>
    </div>
  )
}
