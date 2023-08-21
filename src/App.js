import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import CardComponent from "./components/CardComponent/CardComponent";
import Section from "./components/Section/Section";
import { fetchTopAlbums } from "./api/api";
import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [TopAlbums, setTopAlbums] = useState([]);
  const generateAlbumData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbums(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    generateAlbumData();
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <div className={styles.sectionWrapper}>
        <Section type="album" title="Top Albums" data={TopAlbums} />
        {/* <Section type="album" title="New Albums" data={TopAlbums} /> */}
      </div>
    </>
  );
}

export default App;
