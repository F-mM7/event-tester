import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pointerHistory, setPointerHistory] = useState<string[]>([]);
  const [mouseHistory, setMouseHistory] = useState<string[]>([]);
  const [touchHistory, setTouchHistory] = useState<string[]>([]);

  const addPointerHistory = (event: string) => {
    setPointerHistory((prev) => [...prev.slice(-19), event]);
  };
  const addMouseHistory = (event: string) => {
    setMouseHistory((prev) => [...prev.slice(-19), event]);
  };
  const addTouchHistory = (event: string) => {
    setTouchHistory((prev) => [...prev.slice(-19), event]);
  };

  useEffect(() => {
    const events = ["pointerdown", "pointerup", "pointermove"];
    const handler = (event: Event) => {
      addPointerHistory(event.type);
    };

    events.forEach((eventName) => {
      window.addEventListener(eventName, handler);
    });

    return () => {
      events.forEach((eventName) => {
        window.removeEventListener(eventName, handler);
      });
    };
  }, []);

  useEffect(() => {
    const events = ["mousedown", "mouseup", "mousemove"];
    const handler = (event: Event) => {
      addMouseHistory(event.type);
    };
    events.forEach((eventName) => {
      window.addEventListener(eventName, handler);
    });
    return () => {
      events.forEach((eventName) => {
        window.removeEventListener(eventName, handler);
      });
    };
  }, []);
  useEffect(() => {
    const events = ["touchstart", "touchend", "touchmove"];
    const handler = (event: Event) => {
      addTouchHistory(event.type);
    };
    events.forEach((eventName) => {
      window.addEventListener(eventName, handler);
    });
    return () => {
      events.forEach((eventName) => {
        window.removeEventListener(eventName, handler);
      });
    };
  }, []);

  return (
    <>
      <div style={{ display: "inline-block", margin: "10px" }}>
        {pointerHistory.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
      <div style={{ display: "inline-block", margin: "10px" }}>
        {mouseHistory.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
      <div style={{ display: "inline-block", margin: "10px" }}>
        {touchHistory.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
    </>
  );
}

export default App;
