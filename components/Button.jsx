import Link from 'next/link';

const Button = ({
  href,
  backgroundColor = '#0070f3',
  width = 'auto',        // ← 'auto' par défaut au lieu de '140px'
  height = 'auto',       // ← 'auto' par défaut au lieu de '40px'
  text = 'Click me',
  color = '#fff',
  borderSideLine = "black",
  borderSideSize = "2px",
  borderTBLine = "black",
  borderTBSize = "2px",
}) => {
  return (
    <Link
      href={href}
      style={{
        backgroundColor,
        color,
        borderLeft: `${borderSideSize} solid ${borderSideLine}`,
        borderRight: `${borderSideSize} solid ${borderSideLine}`,
        borderTop: `${borderTBSize} solid ${borderTBLine}`,
        borderBottom: `${borderTBSize} solid ${borderTBLine}`,
        width,
        height,
      }}
      className="inline-flex justify-center items-center rounded-full
                 px-5 py-2
                 min-w-[100px] max-w-full
                 text-sm md:text-base
                 font-medium no-underline cursor-pointer select-none
                 transition-opacity hover:opacity-80
                 whitespace-nowrap"
    >
      {text}
    </Link>
  );
};

export default Button;