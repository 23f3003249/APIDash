import Link from "next/link";
import { NotFoundSpotlight } from "../motion/not-found/spotlight";

export function Navbar() {
    return (
        <header className="border-b-2 border-border bg-secondary-background">
            <nav
                aria-label="Main navigation"
                className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
            >
                <Link
                    href="/"
                    className="text-xl font-heading font-bold uppercase tracking-tight"
                >
                    API Dash
                </Link>
                <div className="flex items-center gap-2">
                    <Link href="/docs" className="hidden text-sm font-base sm:block">
                        <NotFoundSpotlight />
                        Documentation
                    </Link>

                </div>
            </nav>
        </header>
    );
}
