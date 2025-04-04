import Modal from '../src/components/modal';
import useFormModalStore, { FormModalType } from '../src/store';
import FormClient from './FormClient';
import FormProvider from './FormProvider';

export default function FormModal() {
  const { show, formType } = useFormModalStore(state => state);
  const { close } = useFormModalStore(state => state.actions);

  if (!show) return;

  return (
    <Modal close={close}>
      {formType === FormModalType.CLIENT && <FormClient />}
      {formType === FormModalType.PROVIDER && <FormProvider />}
    </Modal>
  );
}
