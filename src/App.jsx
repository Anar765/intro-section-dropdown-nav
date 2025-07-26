import Header from "./components/Header";
import Main from "./components/Main";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Analytics />
    </>
  )
}

export default App
