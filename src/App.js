import { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [term, setTerm] = useState("");

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;
    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      });
  }, [term]);
  return (
    <>
      <div className="container mx-auto">
        {isLoading ? (
          <div className="text-4xl mx-auto text-center mt-32">
            Loading data, please wait...
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {images.map((image) => {
              return <ImageCard key={image.id} image={image} />;
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
