import styles from "@/styles/Layouts/layouts.module.scss"

export default function AppLayout({ children }) {
  return (
    <main>
      <div className={styles["ai-layout-app"]}>
        <div className={styles["ai-layout-app-sidenav"]}>
          <ul>
            <li className={"active"}>Home</li>
            <li>Tasks</li>
            <li>Collaborators</li>
          </ul>
        </div>
        <div className={styles["ai-layout-app-body"]}>
          {children}
        </div>
      </div>
    </main>

  )
}
