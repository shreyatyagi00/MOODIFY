import { useEffect, useRef, useState } from "react";
import { detect, init } from "../utils/utils";

export default function FaceExpression({ setMood }) {

  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const streamRef = useRef(null);

  const [expression, setExpression] = useState("Detecting...");

  useEffect(() => {

    init({ landmarkerRef, videoRef, streamRef });

    return () => {

      if (landmarkerRef.current) {
        landmarkerRef.current.close();
      }

      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject
          .getTracks()
          .forEach((track) => track.stop());
      }

    };

  }, []);

  async function handleClick() {

    const detectedExpression = detect({
      landmarkerRef,
      videoRef,
      setExpression
    });

    console.log("Detected:", detectedExpression);

    setMood(detectedExpression.toLowerCase());

  }

  return (

    <div className="camera">

      <video
        ref={videoRef}
        className="camera__video"
        playsInline
      />

      <h2 className="camera__mood">{expression}</h2>

      <button
        className="camera__btn"
        onClick={handleClick}
      >
        Detect expression
      </button>

    </div>

  );

}