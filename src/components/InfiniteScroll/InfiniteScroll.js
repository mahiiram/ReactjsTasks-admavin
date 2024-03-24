import axios from "axios";
import { useEffect, useState } from "react";
import "./infiniteScroll.css";

const InfiniteScroll = () => {
  const [count, setCount] = useState(1);
  const [images, setImages] = useState({
    apiUrl: `https://picsum.photos/v2/list?page=${89}&limit=10`,
    data: [],
    loading: false,
  });

  const getImages = async () => {
    setCount(count + 1);
    setImages((prevState) => ({
      ...prevState,
      loading: true,
    }));
    try {
      const imageData = await axios.get(images.apiUrl);
      setImages((prevState) => ({
        ...prevState,
        apiUrl: `https://picsum.photos/v2/list?page=${count}&limit=5`,
        loading: false,
        data: [...prevState.data, ...imageData.data],
      }));
    } catch (error) {
      setImages((prevState) => ({
        ...prevState,
        loading: false,
      }));
    }
  };
  useEffect(() => {
    getImages();
  }, []);

  const handleScroll = (event) => {
    if (
      window.innerHeight + event.target.scrollTop + 50 >=
      event.target.scrollHeight
    ) {
      if (images.apiUrl !== null && !images.loading) {
        getImages();
      }
    }
  };

  return (
    <>
      <h3 className="title"> Infinite Scroll</h3>
      <div className="image_container" onScroll={handleScroll}>
        <div>
          {images.data.map((imageData, index) => {
            return (
              <div key={index}>
                <img
                  src={imageData.download_url}
                  alt="image2"
                  className="card-img-top"
                />
              </div>
            );
          })}
          {images.loading && (
            <div className="text-center">
              <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default InfiniteScroll;