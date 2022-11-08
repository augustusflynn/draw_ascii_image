import { useEffect, useState } from "react";

function App() {
  const [arrText, setArrText] = useState([])

  useEffect(() => {
    fetch(window.location.href + "1.txt")
      .then(res => res.text())
      .then((text) => {
        setArrText(text.split("\n").map((_text, index) => ({ text: _text, delay: index * 600 })))
      });
  }, [])

  useEffect(() => {
    function animate(i) {
      let sectionEl = document.getElementById("fade-in-" + i)
      sectionEl.classList.add("fade-in-text")
      setTimeout(() => {
        sectionEl.classList.remove("fade-in-text", "opacity-0")
        sectionEl.classList.add("opacity-1")
        animate(i + 1)
      }, 500)
    }
    if (arrText.length > 0) {
      animate(0)
    }
  }, [arrText])

  return (
    <div id="picture">
      {
        arrText.map((val, i) => {
          return (
            <section
              key={"fade-in-" + i}
              id={"fade-in-" + i}
              className="opacity-0"
            >
              <pre
                key={val.text}
                style={{
                  fontSize: 12
                }}
              >{val.text}</pre>
            </section>
          )
        })
      }
    </div>
  );
}

export default App;
