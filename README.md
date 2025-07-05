<div align="center">
  <br />
    <a href="https://github.com/duwaragie/interview_platform" target="_blank">
      <img src="https://github.com/user-attachments/assets/1c0131c7-9f2d-4e3b-b47c-9679e76d8f9a" alt="PrepWise Banner">
    </a>
  <br />
  
  <div>
    <img src="https://img.shields.io/badge/-Next.JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=black" alt="next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Vapi-white?style=for-the-badge&color=5dfeca" alt="vapi" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Firebase-black?style=for-the-badge&logoColor=white&logo=firebase&color=DD2C00" alt="firebase" />
  </div>

  <h3 align="center">PrepWise: AI-Powered Mock Interview Platform</h3>

   <div align="center">
     A comprehensive job interview preparation platform that helps candidates practice with AI-powered voice interviews tailored to specific roles and experience levels.
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Environment Variables](#environment-variables)
6. 🚀 [Usage](#usage)
7. 📁 [Project Structure](#project-structure)

## <a name="introduction">🤖 Introduction</a>

PrepWise is an innovative AI-powered mock interview platform built with Next.js and Firebase. The application leverages Vapi's voice AI technology and Google Gemini to create realistic interview scenarios. Users can generate customized interviews based on their target role (frontend, backend, fullstack, etc.), experience level (junior, mid-level, senior), and preferred tech stack, then participate in voice-based mock interviews with detailed AI feedback.

## <a name="tech-stack">⚙️ Tech Stack</a>

- **Frontend:** Next.js 15.3.4, React 19, TypeScript
- **Styling:** Tailwind CSS 4, CSS
- **Authentication:** Firebase Auth
- **Database:** Firebase Firestore
- **AI Voice:** Vapi AI Voice Agents
- **AI Text:** Google Gemini (via @ai-sdk/google)
- **UI Components:** Radix UI, Lucide React
- **Form Handling:** React Hook Form, Zod validation
- **Date Handling:** Day.js
- **Notifications:** Sonner

## <a name="features">🔋 Features</a>

👉 **User Authentication**: Complete sign-up and sign-in system using Firebase Authentication with email/password.

👉 **Interview Generation**: Create customized mock interviews by specifying:
   - Job role (Frontend, Backend, Fullstack, etc.)
   - Experience level (Junior, Mid-level, Senior)
   - Tech stack focus
   - Number of questions
   - Interview type (Technical, Behavioral, Mixed)

👉 **AI Voice Interviews**: Conduct realistic voice-based interviews with Vapi AI agents that ask generated questions.

👉 **Intelligent Feedback**: Receive comprehensive AI-generated feedback with:
   - Overall interview score (0-100)
   - Category-wise breakdown (Communication, Technical Knowledge, Problem-Solving, etc.)
   - Detailed strengths and areas for improvement
   - Final assessment and recommendations

👉 **Interview Management**: 
   - View all generated interviews in a dashboard
   - Retake interviews multiple times
   - Track interview history and progress

👉 **Responsive Design**: Fully responsive interface that works seamlessly across desktop and mobile devices.

👉 **Real-time Transcription**: Live transcription of interview conversations for better feedback analysis.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (v18 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/duwaragie/interview_platform.git
cd interview_platform
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
# Vapi AI Configuration
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_web_token
NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_vapi_workflow_id

# Google Gemini AI
GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_api_key

# Application URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Firebase Client Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id

# Firebase Admin Configuration
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
FIREBASE_PRIVATE_KEY=your_firebase_private_key
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="environment-variables">🕸️ Environment Variables</a>

To run this project, you will need to add the following environment variables to your `.env.local` file:

### Required Services Setup:

1. **Firebase Setup:**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication and Firestore Database
   - Get your configuration keys from Project Settings

2. **Vapi AI Setup:**
   - Sign up at [Vapi.ai](https://vapi.ai/)
   - Create a new assistant and get your web token
   - Set up a workflow for interview generation

3. **Google AI Setup:**
   - Get API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Enable Gemini API access

## <a name="usage">🚀 Usage</a>

1. **Sign Up/Sign In**: Create an account or log in to access the platform
2. **Generate Interview**: Click "Create New Interview" and specify your preferences
3. **Start Interview**: Join the generated interview and speak with the AI interviewer
4. **Review Feedback**: After completing the interview, view detailed AI feedback
5. **Track Progress**: Monitor your interview history and improvement over time

## <a name="project-structure">📁 Project Structure</a>

```
interview_platform/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   └── vapi/                 # Vapi integration endpoints
│   ├── (auth)/                   # Authentication pages
│   ├── (root)/                   # Main application pages
│   └── globals.css               # Global styles
├── components/                   # Reusable UI components
│   ├── ui/                       # Base UI components
│   ├── Agent.tsx                 # AI interview agent component
│   ├── AuthForm.tsx              # Authentication forms
│   └── FormField.tsx             # Form input components
├── constants/                    # Application constants
├── firebase/                     # Firebase configuration
│   ├── admin.ts                  # Admin SDK setup
│   └── client.ts                 # Client SDK setup
├── lib/                          # Utility libraries
│   ├── actions/                  # Server actions
│   ├── utils.ts                  # Helper functions
│   └── vapi.sdk.ts               # Vapi SDK integration
├── types/                        # TypeScript type definitions
└── public/                       # Static assets
```

---

**Built with ❤️ by [duwaragie](https://github.com/duwaragie)**

Ready to ace your next interview? Start practicing with PrepWise today! 🚀
