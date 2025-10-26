import Header from "../components/Header";
import Meals from "../components/Meals";
import { useStore } from "../store";
import { useEffect } from "react";

const Main = () => {
  const { setCurrentPage } = useStore();
  useEffect(() => setCurrentPage("home"), []);

  return (
    <div>
      <Header />
      <Meals />
    </div>
  );
};
export default Main;
