import { Link, Head } from "@inertiajs/react";
export default function Welcome({ auth, laravelVersion, phpVersion }) {
  const handleImageError = () => {
    document.getElementById("screenshot-container")?.classList.add("!hidden");
    document.getElementById("docs-card")?.classList.add("!row-span-1");
    document.getElementById("docs-card-content")?.classList.add("!flex-row");
    document.getElementById("background")?.classList.add("!hidden");
  };
  return (
    <>
      <Head title="Home" />
      <div className="h-[80px] w-full flex items-center justify-between px-8 selection:bg-[#FF2D20] selection:text-white">
        <div className="text-[24px] hover:text-black/70 focus:outline-none">
          <Link href="/"> Book </Link>
        </div>
        <nav className="text-[20px]">
          {auth.user ? (
            <Link
              href={route("dashboard")}
              className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
            >
              Dashboard
            </Link>
          ) : (
            <section className="flex">
              <Link
                href={route("login")}
                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
              >
                Log in
              </Link>
              <Link
                href={route("register")}
                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
              >
                Register
              </Link>
            </section>
          )}
        </nav>
      </div>
    </>
  );
}
