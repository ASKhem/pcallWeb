export default function buildPcLayout({ children }) {
  return (
    <>
        <section className ="w-full min-h-screen pt-8 bg-gradient-to-bl from-zinc-100 via-zinc-300 to-zinc-500 flex items-start justify-center">
            <div className ="w-full min-h-full">
                {children}
            </div>
        </section>
    </>
  );
}