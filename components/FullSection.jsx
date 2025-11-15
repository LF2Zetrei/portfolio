export default function FullSection({
  height = "h-[500px]",
  children,
  bgColor = "bg-white",
  bgImage = null,
}) {
  return (
    <section className={"w-full flex relative " + height}>
      <div
        className={
          bgColor +
          " w-full flex justify-center items-center " +
          (bgImage ? "bg-cover bg-center" : "")
        }
        style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
      >
        {children}
      </div>
    </section>
  );
}