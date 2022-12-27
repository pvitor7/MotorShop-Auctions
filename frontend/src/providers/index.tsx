import { UserProvider } from "./user";
import { VehicleProvider } from "./vehicles";
import { ModalUserProvider } from "./modal";
import { ToastContainer, toast } from "react-toastify";

const AppProvider = ({ children }: any) => {
  return (
    <ModalUserProvider>
      <UserProvider>
        <VehicleProvider>{children}</VehicleProvider>
      </UserProvider>
    </ModalUserProvider>
  );
};

export default AppProvider;
