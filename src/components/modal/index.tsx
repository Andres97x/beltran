import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import classNames from '@/utils/tools/classnames';
import { ModalProps } from './types';

const Modal = (props: ModalProps) => {
  const { close, className, forceOpen = false, children } = props;

  const dialogProps = {
    defaultOpen: true,
    ...(forceOpen ? { open: true } : { onOpenChange: close }),
  };

  return (
    <Dialog {...dialogProps}>
      <DialogContent
        className={classNames(
          'p-0 w-full sm:w-11/12 max-w-4xl overflow-auto max-h-[90vh]',
          className
        )}
      >
        <div style={{ display: 'none' }}>
          <DialogHeader>
            <DialogTitle />
            <DialogDescription />
          </DialogHeader>
        </div>
        {children}
      </DialogContent>
    </Dialog>
  );
};

Modal.displayName = 'Modal';

export default Modal;
