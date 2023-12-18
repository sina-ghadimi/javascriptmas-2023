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

document.addEventListener('submit', function (e) {
  e.preventDefault();
  const imageDescription = document.getElementById('user-input').value;
  dialogModal.close();
  generateImage(imageDescription);
});

async function generateImage(imageToGenerate) {
  const response = await openai.images.generate({
    model: 'dall-e-2',
    prompt: imageToGenerate,
    size: '256x256',
  });
  generateAltText(response.data[0].url);
}

async function generateAltText(imageUrl) {
  const messages = [
    {
      role: 'system',
      content: 'You are an image alt text generator',
    },
    {
      role: 'user',
      content: `give me only an alt text for this image description ${imageUrl}`,
    },
  ];

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: messages,
  });

  const altText = response.choices[0].message.content;

  renderImage(imageUrl, altText);
}

function renderImage(imageUrl, altText) {
  console.log(altText);
  const imageContainer = document.getElementById('image-container');
  imageContainer.innerHTML = '';
  const image = document.createElement('img');
  image.src = imageUrl;
  image.alt = altText;
  imageContainer.appendChild(image);
}
