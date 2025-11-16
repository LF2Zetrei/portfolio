import Link from 'next/link';

const Button = ({
  href,
  backgroundColor = '#0070f3',
  width = '120px',
  height = '40px',
  text = 'Click me',
  color = '#fff',
  borderLine = "black",
  borderSize = "2px",
}) => {
  const style = (borderLine, borderSize) => ({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor,
    width,
    height,
    borderRadius: '9999px',
    borderLeft: `${borderSize} solid ${borderLine}`,
    borderRight: `${borderSize} solid ${borderLine}`,
    color,
    textDecoration: 'none',
    cursor: 'pointer',
    userSelect: 'none',
    fontWeight: '500',
  });

  return (
    <Link href={href} style={style(borderLine, borderSize)}>
        {text}
    </Link>
  );
};

export default Button;