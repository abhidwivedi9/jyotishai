# 🔯 JyotishAI — Vedic Kundali + AI Career Oracle

A full-stack web app combining **authentic Vedic astrology** with **Claude AI career guidance**.  
Users enter birth details → get a shareable PDF report with kundali analysis + career advice.

**Live demo look:** Deep indigo sky, golden typography, animated stars, Sanskrit mantras + real career steps.

---

## 💰 Monetization Model

| Plan | Price | What You Offer |
|------|-------|----------------|
| Free sample | ₹0 | Basic rashi + 2 career paths |
| Full reading | ₹99 | Complete report + PDF |
| Premium | ₹299 | + WhatsApp follow-up chat |
| Business package | ₹999/month | HR team bulk readings |

10 readings/day × ₹99 = **~₹30,000/month** passive income.

---

## 🛠 Tech Stack

| Layer | Technology | Cost |
|-------|-----------|------|
| Frontend | Vanilla HTML/CSS/JS | Free |
| Backend | Node.js + Express | Free |
| AI | Claude Sonnet via Anthropic API | ~₹0.06/reading |
| Hosting | Render.com free tier | Free |
| Repo | GitHub free | Free |
| CI/CD | Jenkins (local VivoBook) | Free |
| Domain | Freenom / GitHub Pages | Free |
| PDF | Browser print API | Free |

**Total infrastructure cost: ₹0/month + ~₹6 per 100 readings**

---

## 🚀 Quick Start (Local on VivoBook 15)

### Prerequisites
- Node.js 18+ (download from nodejs.org)
- Anthropic API key (console.anthropic.com)
- Git

### 1. Clone & Install

```bash
git clone https://github.com/YOUR_USERNAME/jyotishai.git
cd jyotishai/backend
npm install
```

### 2. Set Environment Variables

```bash
cp .env.example .env
# Edit .env and add your ANTHROPIC_API_KEY
nano .env
```

### 3. Run Locally

```bash
npm start
# App running at http://localhost:3000
```

### 4. Open in Browser

Navigate to `http://localhost:3000` — fill in birth details and click **Reveal My Kundali**.

---

## 🌐 Free Deployment on Render.com

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial JyotishAI commit"
git remote add origin https://github.com/YOUR_USERNAME/jyotishai.git
git push -u origin main
```

### Step 2: Deploy on Render

1. Go to [render.com](https://render.com) → New → Web Service
2. Connect your GitHub repo
3. Settings:
   - **Build Command:** `cd backend && npm install`
   - **Start Command:** `cd backend && node server.js`
   - **Region:** Singapore (closest to India)
   - **Plan:** Free
4. Add Environment Variable: `ANTHROPIC_API_KEY` = your key
5. Click **Deploy** ✅

Your app will be live at: `https://jyotishai.onrender.com`

---

## 🔧 Jenkins CI/CD Setup (on VivoBook 15)

### Install Jenkins

```bash
# Install Java first
sudo apt update && sudo apt install openjdk-17-jdk -y

# Install Jenkins
wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb https://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt update && sudo apt install jenkins -y
sudo systemctl start jenkins

# Get initial password
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

### Configure Pipeline

1. Open Jenkins at `http://localhost:8080`
2. New Item → Pipeline → name it "jyotishai"
3. Pipeline script from SCM → Git → your repo URL
4. Add credential: `RENDER_DEPLOY_HOOK_URL` (from Render dashboard)
5. Build Triggers: GitHub webhook or poll every hour

### Cloudflare Tunnel (expose Jenkins to GitHub webhooks)

```bash
# Install cloudflared
wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
sudo dpkg -i cloudflared-linux-amd64.deb

# Create free tunnel
cloudflared tunnel --url http://localhost:8080
# You'll get a URL like: https://xyz.trycloudflare.com
# Add this as GitHub webhook URL
```

---

## 👨‍👩‍👧‍👦 Share with Family & Friends

### Beta Testing via WhatsApp

1. Deploy to Render → get your live URL
2. Send URL to family WhatsApp group
3. Ask them to test with their own birth details
4. Use GitHub Issues to collect feedback:
   - Go to github.com/YOUR_USERNAME/jyotishai/issues
   - Click "New Issue" — family members can report bugs or suggestions

### GitHub Collaboration

```bash
# Invite family/friends as collaborators
# GitHub → Settings → Collaborators → Add people

# Family members fork the repo and submit pull requests
# You review and merge
```

---

## 📁 Project Structure

```
jyotishai/
├── frontend/
│   └── index.html          # Complete single-file frontend
├── backend/
│   ├── server.js           # Express API server
│   ├── package.json        
│   └── .env.example        # Environment template
├── Jenkinsfile             # CI/CD pipeline
├── render.yaml             # Render deployment config
├── .gitignore
└── README.md
```

---

## 🔮 Feature Roadmap

### Phase 2 (Month 2-3)
- [ ] Razorpay payment integration (₹99/reading)
- [ ] WhatsApp delivery of PDF report
- [ ] Hindi language support
- [ ] Compatibility matching (Kundali Milan)

### Phase 3 (Month 4-6)
- [ ] Mobile app (React Native / PWA)
- [ ] Astrologer marketplace (humans + AI)
- [ ] Corporate HR bulk readings API
- [ ] Email/SMS follow-up sequences

### Phase 4 (Month 7-12)
- [ ] White-label for astrology businesses
- [ ] Subscription model (monthly forecast)
- [ ] YouTube integration (auto-generate reel scripts)

---

## 🛡 .gitignore

```
node_modules/
.env
*.log
dist/
.DS_Store
```

---

## 📞 Support

Built by a 10-year IT veteran from Dadri, UP.  
Questions? Open a GitHub Issue.

**License:** MIT — use, modify, sell freely.
