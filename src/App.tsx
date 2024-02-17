import { GlobalStyle } from "./styles/global";
import './styles/fontAwesomeIcons';
import { Dashboard } from "./components/dashboard";
import { Header } from "./components/header";


export const App = () => {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
};
