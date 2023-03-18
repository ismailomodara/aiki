import styles from "@/styles/Layouts/layouts.module.scss"

export default function DefaultLayout({ children }) {
  return (
    <main>
      <div className={styles["ai-layout-default"]}>
        {children}
      </div>
    </main>
  )
}
