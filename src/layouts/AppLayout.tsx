import styles from "@/styles/Layouts/layouts.module.scss"

export default function AppLayout({ children }) {
  return (
    <main>
      <div className={styles["ai-layout-app"]}>
        {children}
      </div>
    </main>

  )
}
