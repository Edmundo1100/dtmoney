import { GlobalStyle } from "./styles/global";
import './styles/fontAwesomeIcons';
import { Dashboard } from "./components/dashboard";
import { Header } from "./components/header";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/newTransactionModal";

Modal.setAppElement('#root');

export const App = () => {

  const [isNewTransactionModalOpen, setnewTransactionModal] = useState(false);
  function handleOpenNewTransactionModal() {
    setnewTransactionModal(true);
  }
  function handleCloseNewTransactionModal() {
    setnewTransactionModal(false);
  }
  
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle />
    </>
  );
};
