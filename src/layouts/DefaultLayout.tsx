import styles from "@/styles/Layouts/layouts.module.scss"

export default function DefaultLayout({ children }) {
  return (
    <div className={styles["ai-default-layout"]}>
      <h1>Default Layout</h1>
      <main>{children}</main>
    </div>
  )
}
