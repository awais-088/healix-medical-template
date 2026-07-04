import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section
          style={{
            height: "200vh",
            paddingTop: "150px",
            textAlign: "center",
          }}
        >
          <h1>Healix Medical Template</h1>
        </section>
      </main>
    </>
  );
}
