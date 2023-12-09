import OpenAI from 'openai';
const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey,
  dangerouslyAllowBrowser: true,
});

const dialogModal = document.getElementById('dialog-modal');
const imageEl = document.querySelector('.image');
const userInput = document.getElementById('user-input');
const buttonEl = document.querySelector('.btn-send');

dialogModal.show();

buttonEl.addEventListener('click', async function (e) {
  e.preventDefault();

  const text = userInput.value;
  let image;
  try {
    image = await openai.images.generate({
      model: 'dall-e-3',
      prompt: text,
    });
  } catch (error) {
    console.log('error getting image', error);
  } finally {
    if (image) {
      imageEl.src = image.data[0].url;
      dialogModal.close();
    }
  }
});
