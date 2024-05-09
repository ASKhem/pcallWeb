export default function buildPcLayout({ children }) {
  return (
    <>
        <section className ="min-h-screen pt-10 bg-gradient-to-bl from-zinc-100 via-zinc-300 to-zinc-500 flex items-start justify-center">
            <div className ="w-11/12 min-h-full p-10">
                {children}
            </div>
            
        </section>
    </>
  );
}