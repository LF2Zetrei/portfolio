import Link from 'next/link';

const Button = ({
  href,
  backgroundColor = '#0070f3',
  width = '140px',
  height = '40px',
  text = 'Click me',
  color = '#fff',
  borderSideLine = "black",
  borderSideSize = "2px",
  borderTBLine = "black",
  borderTBSize = "2px",
}) => {
  const style = (borderSideLine, borderSideSize, borderTBSize, borderTBLine) => ({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor,
    width,
    height,
    borderRadius: '9999px',
    borderLeft: `${borderSideSize} solid ${borderSideLine}`,
    borderRight: `${borderSideSize} solid ${borderSideLine}`,
    borderTop: `${borderTBSize} solid ${borderTBLine}`,
    borderBottom: `${borderTBSize} solid ${borderTBLine}`,
    color,
    textDecoration: 'none',
    cursor: 'pointer',
    userSelect: 'none',
    fontWeight: '500',
  });

  return (
    <Link href={href} style={style(borderSideLine, borderSideSize, borderTBSize, borderTBLine)}>
        {text}
    </Link>
  );
};

export default Button;