interface ColorClassPlates {
  blue: string;
  purple: string;
  green: string;
  red: string;
  yellow: string;
  lightblue: string;
  gray: string;
}

const ColorClassPlates: ColorClassPlates = {
  blue: 'bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800',
  purple:
    'bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 active:bg-purple-800',
  green:
    'bg-green-500 hover:bg-green-600 focus:bg-green-600 active:bg-green-700',
  red: 'bg-red-600 hover:bg-red-700 focus:bg-red-700 active:bg-red-800',
  yellow:
    'bg-yellow-500 hover:bg-yellow-600 focus:bg-yellow-600 active:bg-yellow-700',
  lightblue:
    'bg-blue-400 hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-600',
  gray: 'bg-gray-800 hover:bg-gray-900 focus:bg-gray-900 active:bg-gray-900',
};

type ButtonProps = {
  onClick?: () => void;
  text: string;
  color?: keyof ColorClassPlates;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  text,
  color,
  onClick,
  className,
}: ButtonProps) => {
  const colorTheme = ColorClassPlates[color || 'blue'];
  const colorThemeClass = `${colorTheme} inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out`;
  return (
    <button
      onClick={onClick}
      type='button'
      className={colorThemeClass + ` ${className || ''}`}
    >
      {text}
    </button>
  );
};
