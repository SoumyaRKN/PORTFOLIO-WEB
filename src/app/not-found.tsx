import Link from "next/link";

export default function NotFoundPage() {
    return (
        <section className="mx-auto flex w-full max-w-4xl flex-col items-start px-4 py-16 sm:px-6 lg:px-8">
            <p className="text-sm text-muted-foreground">404</p>
            <h1 className="mt-2 text-3xl font-semibold text-foreground">Page not found</h1>
            <p className="mt-2 text-muted-foreground">The requested page does not exist.</p>
            <Link href="/" className="mt-6 text-sm text-primary hover:underline">
                Return home
            </Link>
        </section>
    );
}
