import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch(window.location.href + "1.txt")
      .then(res => res.text())
      .then((text) => {
        const containerEl = document.getElementById("picture");
        let arrText = text.split("\n")
        for (let i = 0; i < arrText.length; i++) {
          const newPreId = "pre" + i
          if (!document.getElementById(newPreId)) {
            let preEl = document.createElement("pre")
            preEl.id = "pre" + i
            preEl.textContent = arrText[i];
            preEl.style.setProperty('font-size', '12px')
            containerEl.appendChild(preEl);
          }
        }
      });
  }, [])

  return (
    <div id="picture">
    </div>
  );
}

export default App;
