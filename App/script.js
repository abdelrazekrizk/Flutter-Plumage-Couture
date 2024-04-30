document.getElementById('form').addEventListener('submit', async (event) => {
  event.preventDefault();
  await run();
});

async function run() {
  const prompt = document.getElementById("text-input").value.trim();
  const fileInputEl = document.querySelector("input[type=file]");
  const files = fileInputEl.files;

  if (!prompt && files.length === 0) {
    alert("Please enter text or upload an image.");
    return;
  }

  const imageParts = await Promise.all(
    [...files].map(fileToGenerativePart)
  );

  try {
    const result = await generateText(prompt, imageParts);
    displayOutput(result);
  } catch (error) {
    console.error(error);
    displayOutput("An error occurred. Please try again later.");
  }
}

async function generateText(prompt, imageParts) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
  const result = await model.generateContent([prompt, ...imageParts]);
  const response = await result.response;
  return await response.text();
}

function displayOutput(text) {
  document.getElementById('output').textContent = text;
}

async function fileToGenerativePart(file) {
  const base64EncodedDataPromise = new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(',')[1]);
    reader.readAsDataURL(file);
  });
  return {
    inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
  };
}
