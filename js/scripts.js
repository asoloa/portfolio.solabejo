function getOrdinalNumber(n) {
  let suffix = "th";
  if (n % 100 < 11 || n % 100 > 13) {
    switch (n % 10) {
      case 1: suffix = "st"; break;
      case 2: suffix = "nd"; break;
      case 3: suffix = "rd"; break;
    }
  }
  const result = `${n}${suffix}`;
  return result;
}
async function updateCounter() {
  try {
    const response = await fetch("https://wb45dixrw0.execute-api.us-east-2.amazonaws.com/default/asolo-cloud_view-counter");
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    document.getElementById("view-count").innerText = `Hello! You are the ${getOrdinalNumber(data)} visitor!`;
  } catch (error) {
    console.error("Error in updateCounter:", error);
  }
}
updateCounter();