## Moodify – AI-Powered Music Recommendation App

Moodify is a full-stack web application that detects a user’s mood in real-time using facial expressions and recommends songs accordingly. It combines Computer Vision with a modern web stack to deliver a personalized music experience.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Live Demo

🔗 https://moodify-fs.vercel.app

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Features

* User Authentication (Login/Register)
* Real-time face detection using webcam
* AI-based mood detection (Happy, Sad, Angry, Neutral)
* Mood-based song recommendations
* Save and manage favorite songs
* Fast and responsive UI

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 🤖 AI Mood Detection

Moodify uses MediaPipe Face Landmarker to analyze facial expressions in real-time.

### 🧠 How it works:

* Captures live video using the user's webcam
* Detects facial landmarks and blendshapes
* Extracts key facial signals:

  * Smile (mouthSmileLeft, mouthSmileRight)
  * Frown (mouthFrownLeft, mouthFrownRight)
  * Eyebrow movement (browDown, browUp)
* Applies heuristic thresholds to classify emotions:

  * 😊 Happy
  * 😢 Sad
  * 😠 Angry
  * 😐 Neutral

The detected mood is then used to fetch and recommend relevant songs.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Tech Stack

## Frontend:

* React.js
* Axios
* SCSS

## Backend:

* Node.js
* Express.js
* MongoDB
* JWT Authentication

## AI / Computer Vision:

* MediaPipe Face Landmarker
* Real-time face landmark detection
* Blendshape-based emotion classification

## Deployment:

* Frontend: Vercel
* Backend: Render

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 
