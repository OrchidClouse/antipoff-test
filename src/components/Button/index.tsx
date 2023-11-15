import styles from "./Button.module.scss";

interface IButtonProps {
  children?: React.ReactNode;
  title?: string; 
  type?: "primary" | "default" | "delete";
  disabled?: boolean;
  size?: "small" | "default" | "large";
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

export const Button: React.FC<IButtonProps> = ({
  children,
  title = '',
  type = "default",
  disabled = false,
  size = "default",
  onClick = () => {},
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[type]} ${styles[size]} ${className}`}
      disabled={disabled}
    >
      {children || title}
    </button>
  );
};
