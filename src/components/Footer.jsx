export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div>
          <h3 className="font-semibold text-lg">
           The Cafe
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Fresh food, great coffee, and memorable moments.
          </p>
        </div>

        <div className="text-sm text-zinc-500 dark:text-zinc-400 text-center md:text-right">
          <p>
            © {new Date().getFullYear()} The Cafe. All rights reserved.
          </p>

          <p className="mt-1">
            Made with ❤️ by Yogesh Saini
          </p>
        </div>

      </div>
    </footer>
  );
}