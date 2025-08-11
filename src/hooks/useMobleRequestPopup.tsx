import MobileReqestPopup from "../components/ui/MobileRequestPopup";
import { useDisclosure } from "@mantine/hooks";

export const usePOSRequestPopup = () => {

    const [opened, { open, close }] = useDisclosure(false);

    const MobileRequestModal = () => (
        <MobileReqestPopup opened={opened} onClose={close} />
    );

    return {
        openMobileRequest: open,
        closeMobleRequest: close,
        MobileRequestModal,
        isOpened: opened,
    };
}