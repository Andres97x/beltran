export type ModalProps = React.PropsWithChildren<{
  close: () => void;
  className?: string;
  forceOpen?: boolean;
}>;
