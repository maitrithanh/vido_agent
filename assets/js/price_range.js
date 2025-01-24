function updateRange() {
  const minInput = document.getElementById("rangeMin");
  const maxInput = document.getElementById("rangeMax");
  const minValueShow = document.getElementById("minValue");
  const maxValueShow = document.getElementById("maxValue");

  let minValue = parseInt(minInput.value);
  let maxValue = parseInt(maxInput.value);

  // Đảm bảo min không vượt quá max
  if (minValue >= maxValue) {
    minInput.value = maxValue - 1;
    minValue = maxValue - 1;
  }

  // Đảm bảo max không nhỏ hơn min
  if (maxValue <= minValue) {
    maxInput.value = minValue + 1;
    maxValue = minValue + 1;
  }

  minValueShow.textContent = `${minValue} USD`;
  maxValueShow.textContent = `${maxValue} USD`;
}
