export default interface DialogProps {
  title?: string;
  body?: string;
  isOpen: boolean | null;
  component?: () => JSX.Element;
}
