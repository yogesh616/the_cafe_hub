// hooks/useImagePreloader.js

import { useEffect, useState } from "react";

export default function useImagePreloader(images = []) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;

    const imagePromises = images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();

        img.src = src;

        img.onload = () => {
          loadedCount++;
          resolve();
        };

        img.onerror = () => {
          loadedCount++;
          resolve();
        };
      });
    });

    Promise.all(imagePromises).then(() => {
      setLoaded(true);
    });
  }, [images]);

  return loaded;
}