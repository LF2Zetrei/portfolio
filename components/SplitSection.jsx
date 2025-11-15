export default function SplitSection({
  height = "h-[500px]",
  left,
  right,
  leftBgColor = "bg-white",
  rightBgColor = "bg-white",
  leftBgImage = null,
  rightBgImage = null,
  showDivider = false,
  dividerColor = "bg-black",
  dividerWidth = "w-[2px]",
}) {
  return (
    <section className={"w-full flex relative " + height}>
      <div
        className={
          leftBgColor +
          " w-1/2 flex justify-center items-center " +
          (leftBgImage ? "bg-cover bg-center" : "")
        }
        style={leftBgImage ? { backgroundImage: `url(${leftBgImage})` } : {}}
      >
        {left}
      </div>
      <div
        className={
          rightBgColor +
          " w-1/2 flex justify-center items-center " +
          (rightBgImage ? "bg-cover bg-center" : "")
        }
        style={rightBgImage ? { backgroundImage: `url(${rightBgImage})` } : {}}
      >
        {right}
      </div>
      {showDivider && (
        <div
          className={
            "absolute top-0 h-full " +
            dividerWidth +
            " " +
            dividerColor +
            " left-1/2 transform -translate-x-1/2"
          }
        />
      )}
    </section>
  );
}