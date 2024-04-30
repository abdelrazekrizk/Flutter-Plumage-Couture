# Dress Sketch Generation with Extracted Colors
This Jupyter Notebook helps you create a dress sketch using the dominant colors extracted from an image.

## What this notebook does:
**Prompts an image generation model:** You'll provide a text description of the dress you want, including details about the colors you'd like to use.
**Generates a dress sketch:** the notebook uses a pre-trained image generation model from Vertex AI to create a sketch of your dress.

## Prerequisites:

- Python 3.x
- A Google Cloud project with the Vertex AI API enabled
- The google-cloud-aiplatform library installed

- Additional Information:
This notebook uses the Vertex AI SDK for Python.

## Running the notebook:

**Set up your Google Cloud project:**
Follow the instructions in the notebook's
(Set up your Cloud Project) to enable the Vertex AI API

**Update the prompt :**
- Replace the placeholder text in cell 16 with a description of your desired dress, including details about the colors you want to use based on the extracted colors (which will be implemented later).
- Execute the notebook cells sequentially. - handle authentication (typically hidden) and might require additional setup depending on your environment.

**View the results:**
The notebook will generate and save several image files representing your dress sketch. You can choose between two methods to display the generated images.

**Note:**

You'll need to replace the placeholder prompt with your own description.
Update the ``project_id`` variable in Cell 16 with your ``actual project ID.``
Choose one of the cells to display the generated images.

**Future improvements:**

This notebook provides a starting point for generating dress sketches based on color palettes.

Implement the functionality to extract dominant colors from an image.
Allow users to specify the extracted colors directly in the prompt.

With further development, it can be extended to incorporate color extraction and offer more customization options.

Feel free to experiment with different prompts to generate unique dress sketches.
