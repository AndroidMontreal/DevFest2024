// session data
export const sessions2024Data = [
  {
    title: 'The Hitchhiker\'s Guide to MLOps',
    uuid: '08c71152-c552-42e7-b094-f510ff44e9d7',
    description: `This talk is your roadmap to mastering the three pillars of modern MLOps: Docker for containerizing model's code, Kubeflow for orchestrating pipelines, and Vertex AI for organizing. Whether you're looking to scale your models in production, this guide provides practical insights to make it happen.`,
    startTime: '2024-11-09T16:00:00',
    endTime: '2024-11-09T16:45:00',
    room: 'Room 3',
  },
  {
    title: 'Create a Digital ID with Identity Credentials API',
    uuid: '08c71152-c552-42e7-b094-f510ff44e9d6',
    description: `As digital identities become increasingly vital, the need for secure, efficient ways to store and manage personal credentials is paramount. In this session, we’ll explore how to implement digital IDs using the Identity Credentials API within Android applications. This talk will cover the API’s core features, including secure credential storage, user authentication, and data encryption, providing a comprehensive guide for developers to integrate digital identities into their apps. 
 

 Attendees will learn how to leverage Android’s Identity Credentials API to create scalable, secure, and user-friendly solutions for verifying identity, complete with real-world examples and best practices for deployment. Whether you’re building apps for government, healthcare, or personal use, this talk will equip you with the tools to modernize identity management.`,
    startTime: '2024-11-09T15:00:00',
    endTime: '2024-11-09T15:45:00',
    room: 'Room 3',
  },
  {
    title: 'RAG vs AI model tuning vs long context window and when to use each',
    uuid: '08c71152-c552-42e7-b094-f510ff44e9d5',
    description: `We will go through several topics during the presentation. Most of the topics will be discussed on a high level with some code samples. I will share my experience working with some cases using model training, tests and POC with a long context window and RAG.
 

 Here are the main subjects covered in the talk:
 * Introduction and basics about foundation LLMs
 * Fine tuning for foundation LLMs
 * Long context window, tokens and difference between structured and non-structured information
 * RAG workflow, difference in performance and comparison with long context window
 * Mixed approach including different techniques
 

 This presentation is designed for both newcomers to AI and those with experience in AI projects or applications.`,
    startTime: '2024-11-09T16:00:00',
    endTime: '2024-11-09T16:45:00',
    room: 'Room 2',
  },
  {
    title: 'Flutter multiplatform login',
    uuid: '08c71152-c552-42e7-b094-f510ff44e9d4',
    description: `Login flow are usually thought out as separate integrations between mobile Oauth2 integrations and browser based redirect integrations for login. Ory Kratos published in 2024 their new single sign-in on flow using either the native mobile or a new web flow for single page application. 
 So we decided at Pvotal to create a library and cross platform implementation to completely offload this problem for login systems leveraging Flutter. It handles OpenID with google and consent, passkey, password or recovery key. 
 We want to provide in this presentation the base bloc structure and key considerations to allow other developers to get inspired by this method to integrate similarly with their authentication providers. We want to also present the routes post-authentication to change one user's configurations dynamically depending on what was configured in their profile leveraging the UI node system of Ory Kratos.`,
    startTime: '2024-11-09T16:00:00',
    endTime: '2024-11-09T16:45:00',
    room: 'Room 1',
  },
  {
    title: 'Unleash the Power of a Multi-LLM and Image Generation: Build Your Own Secured AI Platform with Google Cloud Vertex AI',
    uuid: '08c71152-c552-42e7-b094-f510ff44e9d3',
    description: `In today's AI-driven world, organizations face the challenge of harnessing the power of Large Language Models (LLMs) while maintaining data privacy and avoiding dependency on a single provider. This talk presents a comprehensive solution: creating your own multi-LLM, image generation service using Google Cloud Platform.
 

 Key points covered:
 

  - **Discovering Google Vertex AI**: Get hands-on Google Vertext AI solution suits to benefits of using a diverse range of LLMs, AI Services and learn how to combine their strengths to achieve superior results.
 

  - **Building Your Own AI Sanctuary**: Learn how to integrate multiple LLMs and image generation models through a unified API, ensuring your data remains under your control and avoiding vendor lock-in.
 

  - **Knowledge-Based Solutions (RAG) on Steroids**: Explore how to build powerful knowledge bases that generate insightful responses and visually compelling explanations, leveraging the combined capabilities of LLMs.
 

  - **Agentic-Centric Solutions**: The Future of AI Interaction: Create AI agents that understand and respond to complex prompts, generating both text and images to fulfill user requests, from creative storytelling to research assistance.`,
    startTime: '2024-11-09T15:00:00',
    endTime: '2024-11-09T15:45:00',
    room: 'Room 2',
  },
  {
    title: 'Parsing Inline Strings Across Platforms: Building a Small Cross-Platform Library',
    uuid: '08c71152-c552-42e7-b094-f510ff44e9d2',
    description: `Formatting complex string representations in mobile applications often results in code that is error-prone and difficult to maintain. Encapsulating this logic into a Domain Specific Language (DSL) can simplify your codebase, but building a DSL and its parser can be intimidating.
 

 This talk demystifies the process by introducing the fundamental concepts of constructing a small parser, using a practical use case to illustrate each step. Attendees will learn about building a lexer, parser construction, Abstract Syntax Tree (AST) generation, and error handling. The parsing logic is implemented within a Kotlin Multiplatform Library to accommodate platform-specific rendering, ensure consistency, and avoid code duplication across platforms.`,
    startTime: '2024-11-09T14:00:00',
    endTime: '2024-11-09T14:45:00',
    room: 'Room 3',
  },
  {
    title: 'Boosting Your Mobile App: Small Details, Big Impact',
    uuid: '08c71152-c552-42e7-b094-f510ff44e9d1',
    description: `Want to take your mobile app to the next level? We'll explore the small but powerful details that elevate apps from good to great. Through real-world examples and code, we'll cover animations, gestures, dialogs, useful native APIs, seamless keyboard interactions, and smooth authentication flows. Whether you're after quick wins or advanced techniques, this session will give you practical tips to enhance your app’s user experience.`,
    startTime: '2024-11-09T15:00:00',
    endTime: '2024-11-09T15:45:00',
    room: 'Room 1',
  },
  {
    title: 'Building an ML-powered Android Livestreaming App',
    uuid: '08c71152-c552-42e7-b094-f510ff44e9d0',
    description: `This presentation explores the application of computer vision and machine learning models for real-time video and audio processing. We’ll demonstrate how this technology can enable the creation of a whole new category of live-streaming applications.


Developing a video conferencing application has historically been fairly complex. We will start with a brief overview of the Livekit open-source APIs, showcasing how to build a simple and intuitive video streaming Android application.


Next, we will explore integrating various ML-powered agents into the experience. We will also illustrate how to use reactive programming techniques to create easily understandable and modifiable multi-stage processing pipelines.


Looking forward to exploring this exciting and innovative topic with you!
`,
    startTime: '2024-11-09T10:00:00',
    endTime: '2024-11-09T10:45:00',
    room: 'Room 1',
  },
  {
    title: 'The AI Power Team: Why Generative and Predictive Need Each Other',
    uuid: '08c71152-c552-42e7-b094-f510ff44e9cf',
    description: `Want to take your mobile app to the next level? We'll explore the small but powerful details that elevate apps from good to great. Through real-world examples and code, we'll cover animations, gestures, dialogs, useful native APIs, seamless keyboard interactions, and smooth authentication flows. Whether you're after quick wins or advanced techniques, this session will give you practical tips to enhance your app’s user experience.`,
    startTime: '2024-11-09T11:00:00',
    endTime: '2024-11-09T11:45:00',
    room: 'Room 2',
  },
  {
    title: 'Design Your Own App Using Figma',
    uuid: '08c71152-c552-42e7-b094-f510ff44e9ce',
    description: `In this workshop, we'll design an app that you can customize and make your own!

All you need for this workshop is:

- A laptop and charger
- A free Figma account
- Lots of enthusiasm to learn

(Because of the limited time, we'll only be designing a few screens and not the entire app)`,
    startTime: '2024-11-09T14:00:00',
    endTime: '2024-11-09T14:45:00',
    room: 'Room 1',
  },
  {
    title: 'Scaling AI on a Budget: A Startup\'s GPU Optimization Journey',
    uuid: '08c71152-c552-42e7-b094-f510ff44e9cd',
    description: `Designstripe, led by serial entrepreneur François Arbour, revolutionizes AI-powered design. Designstripe’s CTO Shannon Lal reveals how they slashed cloud costs by 30% and boosted scaling speed by 25% for GPU-intensive features. Learn GCP optimizations applicable to startups and developers alike.`,
    startTime: '2024-11-09T14:00:00',
    endTime: '2024-11-09T14:45:00',
    room: 'Room 2',
  },
  {
    title: 'Enhancing Community Resilience: From Concept to MVP with Flutter and GenAI',
    uuid: '08c71152-c552-42e7-b094-f510ff44e9cc',
    description: `Embark on a journey from concept to MVP, revolutionizing emergency preparedness. Learn how to create a cross-platform app using cutting-edge technologies, integrating AI for personalized safety recommendations. Ideal for developers seeking to make a social impact through innovative mobile solutions.`,
    startTime: '2024-11-09T11:00:00',
    endTime: '2024-11-09T11:45:00',
    room: 'Room 1',
  },
  {
    title: 'Advanced Pregnancy Risk Assessment Using AI Model Chain',
    uuid: '08c71152-c552-42e7-b094-f510ff44e9cb',
    description: `In this session, I will explore the innovative integration of ML Model and the Gemini Large Language Model (LLM) to develop a cutting-edge predictive model aimed at enhancing pregnancy risk management. This model is designed to not only assess the severity of pregnancy-related risks but also to translate these findings into regional languages, thereby making healthcare services more accessible and accurate for diverse populations.

I will begin by providing a comprehensive overview of the model’s architecture, detailing how robust machine learning algorithms are combined with the advanced natural language processing capabilities of the Gemini LLM. This integration allows for precise risk assessment and effective communication of complex medical information in a way that is easily understandable by patients and healthcare providers alike.

Attendees will gain valuable insights into the practical application of this model in real-world scenarios. I will present case studies and examples demonstrating how the model has been used to predict and manage pregnancy risks, ultimately improving patient outcomes. Additionally, I will discuss the challenges faced during the development and deployment of the model, and how these were overcome.

Furthermore, I will highlight the benefits of combining machine learning with natural language processing in the healthcare sector. This includes improved accuracy in risk assessment, enhanced patient communication, and the potential for broader implementation across various healthcare settings. By the end of the session, attendees will have a thorough understanding of how this innovative approach can transform pregnancy risk management and contribute to better healthcare outcomes overall.`,
    startTime: '2024-11-09T10:00:00',
    endTime: '2024-11-09T10:45:00',
    room: 'Room 3',
  },
  {
    title: 'Build your own chatbot with Gemini',
    uuid: '789c0123-d456-f789-0123-456789abcdef',
    description: `Devs will gain hands-on experience through step-by-step instructions on building a sample chatbot, from initial setup, deployment on GCP, and a basic UI. The talk also addresses important considerations like authentication, session management, and integration with other Google Cloud services.`,
    startTime: '2024-11-09T11:00:00',
    endTime: '2024-11-09T11:45:00',
    room: 'Room 3',
  },
  {
    title: 'Security in AI and Security with AI - 2 sides of the same AI shiny coin',
    uuid: '5108babc-bf35-44d5-a9ba-de08badfa80a',
    description: `Imagine a world where your AI models are not just smart but also secure, and your security tools are supercharged with AI’s predictive power.

In this talk, we’ll dive into the two sides of the AI security coin:

Security in AI: We’ll explore how to protect your AI models in GCP from attacks, biases, and data breaches, ensuring they’re both robust and reliable.
Security with AI: Discover how GCP’s security tools leverage AI to detect threats, prevent attacks, and respond to incidents faster than ever before.

If you’re building or using AI in the cloud, this talk is your key to unlocking a future where AI innovation and security go hand-in-hand.`,
    startTime: '2024-11-09T10:00:00',
    endTime: '2024-11-09T10:45:00',
    room: 'Room 2',
  },
];
