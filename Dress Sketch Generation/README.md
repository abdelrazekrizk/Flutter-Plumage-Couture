# Dress Sketch Generation with Extracted Colors
This Jupyter Notebook helps you create a dress sketch using the dominant colors extracted from an image.

## What this notebook does:
**Prompts an image generation model:** You'll provide a text description of the dress you want, including details about the colors you'd like to use.<br>
**Generates a dress sketch:** the notebook uses a pre-trained image generation model from Vertex AI to create a sketch of your dress.<br>

## Prerequisites:

- Python 3.12
- A Google Cloud project with the Vertex AI API enabled
- The google-cloud-aiplatform library installed
- Vertex AI API Generative AI image model `Imagen 2 (v.006, default)`

**Additional Information:**<br>
This notebook uses the Vertex AI SDK for Python.

## Running the notebook:

**Set up your Google Cloud project:**<br>
Follow the instructions in the notebook's<br>
(Set up your Cloud Project) to enable the Vertex AI API

**Update the prompt :**
- Replace the placeholder text with a description of your desired dress, including details about the colors you want to use based on the extracted colors<br>
(which you can get from app -> Dress Sketch Generation with Extracted Colors ).<br>
- Execute the notebook cells sequentially. - handle authentication (typically hidden) and might require additional setup depending on your environment.

**View the results:**<br>
The notebook will generate and save several image files representing your dress sketch. You can choose between two methods to display the generated images.

**Note:**

You'll need to replace the placeholder prompt with your own description.<br>
Update the ``project_id`` variable in the notebook with your ``actual project ID.``<br>
Choose one of the cells to display the generated images.<br>

**Future improvements:**

This notebook provides a starting point for generating dress sketches based on color palettes.

Implement the functionality to extract dominant colors from an image.<br>
Allow users to specify the extracted colors directly in the prompt.<br>

With further development, it can be extended to incorporate color extraction and offer more customization options.

Feel free to experiment with different prompts to generate unique dress sketches.


## Recource:
* set up a project guide. [link here!](https://cloud.google.com/vertex-ai/docs/start/cloud-environment)
* Set up Application Default Credentials Local development environment.[link here!](https://cloud.google.com/docs/authentication/provide-credentials-adc#google-idp)
* Image Generation with Imagen on Vertex AI [link here!](https://github.com/GoogleCloudPlatform/generative-ai/blob/main/vision/getting-started/image_generation.ipynb)
* Prompt and image attribute guide. [link here!](https://cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide?_ga=2.128324367.-2094800479.1701746552&_gac=1.219926379.1701161688.CjwKCAiAvJarBhA1EiwAGgZl0LFQUFOFZUxfNPlzjB4T00PDiLeCIEYfY-coLbX9eUfHKr_i8VbtSBoCEJQQAvD_BwE#get-started)