import OpenAI from "openai";
const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey,
  dangerouslyAllowBrowser: true,
});
const jokeText = document.getElementById("joke-display");

async function getJoke() {
  try {
    const stream = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "tell me a christmas joke" }],
    });
    return stream.choices[0].message.content;
  } catch (error) {
    console.log("error generating joke", error);
  }
}
document
  .getElementById("window-container")
  .addEventListener("click", async function () {
    const joke = await getJoke();
    if (joke) {
      jokeText.textContent = joke;
    }

    document.querySelector(".left-door").style =
      "animation: left-open 0.3s forwards";
    document.querySelector(".right-door").style =
      "animation: right-open 0.3s forwards";
    document.querySelector(".joke-display").style =
      "animation: display-joke 0.3s forwards";
  });
