# Flutter Plumage Couture - Dress Sketch Generator

Welcome to `Flutter Plumage Couture`, the innovative app that transforms the breathtaking colors of natural birds animales fish and sight into stunning clothes designs.<br> Our app is perfect for fashion designers, enthusiasts, and anyone looking to infuse the natural beauty of avian hues into

Flutter Plumage Couture application, a dress sketch generator that leverages the power of Google's Generative AI technology.

- See Flutter Plumage Couture in action!<br>
[Watch the video demo here!](https://youtu.be/6RIwCgo-6iM?t=18)

This app isn't just about creating dress sketches; it's about igniting your design inspiration. <br>
![Flutter Plumage Couture Screenshot](./Dress%20Sketch/output_image_0%20(26).png)

## What it does:
Flutter Plumage Couture allows you to create a dress sketch based on:

**Text description:** Describe the dress style and desired colors using the text input field.<br>
**Image upload:** Upload an image, and the app will extract the dominant colors to inspire the sketch's color palette.

## How to use it:
**Open the app:** Launch the Flutter Plumage Couture application in a web browser.<br>
**Enter a prompt:** Enter a text description in the text input field.<br>
**Upload an image:** Click "Choose File" and select an image that represents the colors you want in the dress sketch.<br>
**Generate sketch:**  Click the `"Generate Dress Sketching"` button. The app will process your request and display the generated dress sketch description in the output area.<br>
**View results:** The app will generate a textual description of a dress sketch based on your input.<br>

## Requirements:
- Web App:
1. A web browser with JavaScript enabled.
2. An internet connection.
3. A Google account.

- Notebook:
1. Programming knowledge (Python).
2. A Google Cloud project with Vertex AI API enabled.

## Technologies Used:
**Web App:**
- HTML
- CSS
- JavaScript
- Google Generative AI API `gemini-1.5-pro-vision` model: (for generated dress sketch description)<br>
Generate text from image(s) and text prompts (multimodal).

**Notebook:**
- Python
- Jupyter Notebook
- Vertex AI API `Imagen on Vertex AI` model: (for sketch Image Generation)<br>
Generate image(s) from text prompts


## Technical details:
The app utilizes Google's Generative AI service with the `"gemini-pro-vision"` model to generate the dress sketch descriptions.<br>
The user's API key is required to access the Generative AI service. <br>
Update the `"YOUR_API_KEY"` placeholder in the code with your actual API key.<br>
Update the Google Cloud project `"project_id"` and enable the `Vertex AI API` and `Google's Generative AI API`.

**Note:**

Currently, the app generates a textual description of the dress sketch, not a visual image.<br>
Uploading an image and providing a text description can be done together in the same request. <br>
After the image is uploaded, the app prioritizes the text description for style details.<br>
for visual image take the the text description for style details and add to Notebook and update your prompt<br>

## Recource:
* Get started with the Gemini API in web apps. [link here!](https://ai.google.dev/gemini-api/docs/get-started/web#initialize-model)


## Conclusion:
We hope Flutter Plumage Couture empowers you to bring your dress design ideas to life! Explore the app, <br> use your creativity and design unique dress sketches, and experiment with the notebook to create unique and inspiring visual image of dress sketches.

``Get started!``