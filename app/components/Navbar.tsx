import ThemeToggleBtn from "./ThemeToggleBtn";

export default function NavBar() {
    return(
        <header className="px-5 py-3 bg-white dark:bg-red-300 shadow-sm">
            <nav>
                <ThemeToggleBtn />
            </nav>
        </header>
    )
}