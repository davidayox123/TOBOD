# TOBOD Website Deployment Guide

## 🚀 Quick Deployment to Vercel

### Step 1: Prepare Your Repository
1. Ensure all code is committed to your Git repository
2. Push the latest changes to GitHub/GitLab/Bitbucket

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with your Git provider
3. Click "New Project"
4. Import your TOBOD repository
5. Configure project settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

### Step 3: Deploy
1. Click "Deploy"
2. Wait for build to complete (~2-3 minutes)
3. Your site will be live at `https://your-project-name.vercel.app`

### Step 4: Custom Domain Setup
1. In Vercel dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add your custom domain: `tobod.org` and `www.tobod.org`
4. Update your domain's DNS settings:
   - **A Record**: Point to `76.76.19.61`
   - **CNAME**: Point `www` to `cname.vercel-dns.com`

## 📧 Email Setup

### Current Setup
- Temporary email: `ayodelem900@gmail.com`
- Future email: `info@tobod.org`

### To Set Up Professional Email
1. Use email hosting service (Google Workspace, Microsoft 365, or domain provider)
2. Configure MX records for your domain
3. Update contact forms to use new email address

## 🔧 Post-Deployment Tasks

### 1. Replace Placeholder Content
- [ ] Add real factory images to `/public/images/`
- [ ] Add factory tour videos to `/public/videos/`
- [ ] Update company information if needed

### 2. Set Up Form Handling
- [ ] Configure email backend for contact form
- [ ] Set up quote request processing
- [ ] Add form submission notifications

### 3. Analytics & Monitoring
- [ ] Add Google Analytics
- [ ] Set up search console
- [ ] Monitor site performance

### 4. SEO Optimization
- [ ] Submit sitemap to search engines
- [ ] Optimize meta descriptions
- [ ] Add structured data markup

## 🌐 Environment Variables

For production, you may need these environment variables:

```bash
# Email Service (when implemented)
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=info@tobod.org
SMTP_PASS=your-email-password

# Analytics (optional)
GOOGLE_ANALYTICS_ID=GA-XXXXXXXXX
```

Add these in Vercel Dashboard → Settings → Environment Variables

## 📱 Testing Checklist

Before going live, test:
- [ ] All navigation links work
- [ ] Contact form submits (currently shows success message)
- [ ] Quote form submits (currently shows success message)
- [ ] Mobile responsiveness on all pages
- [ ] Page loading speeds
- [ ] All placeholder content displays correctly
- [ ] SEO meta tags are present

## 🔄 Future Updates

To update your live site:
1. Make changes to your code
2. Commit and push to your repository
3. Vercel automatically deploys the changes
4. Updates are live within 2-3 minutes

## 📞 Support

If you need help with deployment:
- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)

---

Your TOBOD website is now ready for professional deployment! 🎉
