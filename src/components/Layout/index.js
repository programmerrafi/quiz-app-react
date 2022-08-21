import Navigation from "../Navigation";

function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main className="w-full h-full min-h-[92vh] font-Montserrat bg-neutral-100">
        <section className="container mx-auto py-5 md:py-10 ">
          {children}
        </section>
      </main>
    </>
  );
}

export default Layout;
