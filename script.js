const promptInput = document.getElementById("prompt");
const generateBtn = document.getElementById("generateBtn");
const output = document.getElementById("output");

generateBtn.addEventListener("click", () => {
  const prompt = promptInput.value.trim();

  if (!prompt) {
    output.textContent = "// Please describe the code you want first.";
    return;
  }

  // For now, just echo the prompt so we see it working
  output.textContent = `// You asked for:\n// ${prompt}\n\n// Later this will be real generated code.`;
});
