const toggleButton = document.getElementById("theme-toggle");
const root = document.documentElement;

toggleButton.addEventListener("change", () => {
  root.classList.toggle("light-mode");

  const styles = getComputedStyle(root);
  const hslRegex = /hsl\((\d+), (\d+)%, (\d+)%\)/;

  for (let i = 0; i < styles.length; i++) {
    const variableName = styles[i];
    const value = styles.getPropertyValue(variableName);

    if (hslRegex.test(value)) {
      const [, h, s, l] = value.match(hslRegex);
      const invertedLightness = 100 - parseInt(l);
      root.style.setProperty(
        variableName,
        `hsl(${h}, ${s}%, ${invertedLightness}%)`
      );
    }
  }
});
