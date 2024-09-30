# Storify

1. So this project was based off an old idea I had when ChatGPT was really getting popular and I was experimenting with prompts and also Stable Diffusion, a generative art model. While I had already created concept designs for the UI beforehand, I never got around to actually programming/implementing it. The core concept is that this project takes a custom text input from a user and generates a fairy-tale-like story, aimed towards younger audiences. After reading it, you are tasked with answering 5 basic multiple-choice questions about the story for comprehension, and then using Stable Diffusion, a short "storybook" is created artificially by providing a series of images based on the story you just read (like a picture book).  

2. I utilized the Gemini API to feed a user prompt into a series of very specific custom-made prompts that generate a suitable story. Afterward, I used Gemini to create various multiple-choice comprehension questions. There is a short quiz section where after getting all the questions correct, it shows you a carousel of images that represent the story you just read. The front end is handled by React/Typescript and API calls are made using Python in the back end, specifically FastAPI. I also used the Stable Diffusion XL Model from HuggingFace to actually generate the images. It is mostly responsive web design and I included some basic animations with buttons and styling.

3. Included below is a video of the entire project/process. I was having a hard time figuring out how to deploy it live because the Stable Diffusion API utilizes my graphics card and I couldn't figure out how to utilize the graphics card of the machine running the program (aside from my own). 

https://github.com/user-attachments/assets/222652f4-d3a4-40c8-8b06-b29d29d3d74e

