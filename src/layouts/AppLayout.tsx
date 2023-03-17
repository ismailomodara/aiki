import styles from "@/styles/Layouts/layouts.module.scss"

export default function AppLayout({ children }) {
  return (
    <>
      <div className={styles["ai-app-layout"]}>
        <h1>App Layout</h1>
        <main>{children}</main>
      </div>
    </>

  )
}
