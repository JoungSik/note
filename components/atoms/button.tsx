export enum COLORS {
  primary = 'btn-primary',
  secondary = 'btn-secondary',
  success = 'btn-success',
  danger = 'btn-danger',
  warning = 'btn-warning',
  info = 'btn-info',
  light = 'btn-light',
  dark = 'btn-dark',
  link = 'btn-link',
}

type ButtonProps = {
  text: string;
  color: COLORS;
  type: 'submit' | 'reset' | 'button' | undefined;
  onClick?: () => void;
};

export const Button = (props: ButtonProps) => {
  return (
    <button className={`btn ${props.color}`} type={props.type} onClick={props.onClick}>{props.text}</button>
  );
}
