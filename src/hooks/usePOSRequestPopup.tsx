import { useDisclosure } from "@mantine/hooks";
import POSRequestPopup from "../components/ui/POSRequestPopup";


export const usePOSRequestPopup = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const POSRequestModal = () => (
    <POSRequestPopup opened={opened} onClose={close} />
  );

  return {
    openPOSRequest: open,
    closePOSRequest: close,
    POSRequestModal,
    isOpened: opened,
  };
};
