# Deploy Checklist

## 1) Environment Variables
- [ ] NEXT_PUBLIC_APP_URL
- [ ] Firebase client keys (NEXT_PUBLIC_*)
- [ ] Firebase admin service account: FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY
- [ ] GOOGLE_GENERATIVE_AI_API_KEY
- [ ] NEXT_PUBLIC_VAPI_WEB_TOKEN (and optionally VAPI_API_KEY, VAPI_ASSISTANT_ID)
- [ ] Any auth provider keys if used (Clerk/NextAuth)

## 2) Firebase Setup
- [ ] Create a Firebase project
- [ ] Enable Authentication (Email/Password or OAuth as needed)
- [ ] Create Firestore database (in Production mode)
- [ ] Create a Service Account key and paste creds into `.env`

## 3) Local Run
```bash
npm install
npm run dev
```

## 4) Deploy (Vercel recommended)
- [ ] Push to GitHub
- [ ] Import to Vercel
- [ ] Add the environment variables
- [ ] Deploy
