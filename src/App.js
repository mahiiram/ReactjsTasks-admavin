import "./App.css";
import BucketTransfer from "./components/BucketTransfer/BucketTransfer";
import InfinteScroll from "./components/InfiniteScroll/InfiniteScroll";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SplitBox from "./components/SplitBox/SplitBox";
import HitIt from "./components/HitIt/HitIt";
import NestedComponents from "./components/NestedComponents/NestedComponents";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
                <Route path="/" element={<BucketTransfer />} />
                <Route path="/infiniteScroll" element={<InfinteScroll />} />
                <Route path="/splitBox" element={<SplitBox />} />
                <Route path="/hitIt" element={<HitIt />} />
                <Route
                  path="/nestedComponents"
                  element={<NestedComponents />}
                />
              </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
