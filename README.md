# GammaPhysics

An interactive physics education platform featuring comprehensive notes, simulations, and definitions for university-level physics students.

## Deployment to Vercel

### Prerequisites

- A Vercel account (sign up at [vercel.com](https://vercel.com))
- EmailJS account for the contact form functionality

### Environment Variables

Set up the following environment variables in your Vercel project settings:

- `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
- `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key

### Deployment Steps

1. **Connect your repository to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "Add New" → "Project"
   - Connect to your Git provider and select the GammaPhysics repository
   - Vercel will automatically detect that this is a Vite project

2. **Configure project settings**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Set environment variables**
   - Add the environment variables listed above in the Vercel project settings

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your application

### Continuous Deployment

Once set up, Vercel will automatically deploy changes when you push to your repository.

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

- `/src` - Source code
  - `/components` - React components
  - `/pages` - Page components
  - `/data` - Physics content and definitions
  - `/simulations` - Interactive physics simulations
- `/public` - Static assets and content
- `/api` - Serverless functions for Vercel
