import { routes } from '@/constants/route';
import useAuth from '@/hooks/useAuth';
import { Button, ButtonProps, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';

export default function AlertSignIn({
  passPath,
  callback,
  ...prop
}: ButtonProps & { passPath?: string; callback?: () => void }) {
  const navigate = useNavigate();
  const { authenticated } = useAuth();
  const [opened, { open, close }] = useDisclosure(false);

  const handleSinglePage = () => {
    if (authenticated) {
      if (passPath) {
        navigate(passPath);
      } else if (callback) {
        callback();
      }
    } else {
      open();
    }
  };
  return (
    <>
      <Button {...prop} onClick={handleSinglePage} />
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        <p className="text-2xl font-bold">Please sign in first !</p>
        <div className="flex gap-4 mt-5 justify-end">
          <Button onClick={() => navigate(routes.signIn)}>Sign in Now</Button>
          <Button
            variant="outline"
            classNames={{ label: 'font-bold' }}
            onClick={close}
          >
            Later
          </Button>
        </div>
      </Modal>
    </>
  );
}
