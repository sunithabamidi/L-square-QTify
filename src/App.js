import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Section from "./components/Section/Section";
import { fetchTopAlbums, fetchNewAlbums } from "./api/api";
import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [TopAlbums, setTopAlbums] = useState([]);
  const [NewAlbums, setNewAlbums] = useState([]);

  const generateAlbumData = async () => {
    try {
      const data = await fetchTopAlbums();
      const data2 = await fetchNewAlbums();
      setTopAlbums(data);
      setNewAlbums(data2);
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
        <Section type="album" title="New Albums" data={NewAlbums} />
      </div>
    </>
  );
}

export default App;
