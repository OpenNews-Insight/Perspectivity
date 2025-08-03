# Perspectivity
## Real‑time AI news bias agent for emerging markets

![Perspectivity Logo](./public/assets/logo.jpeg)

### 🎯 **Vision**
Restore trust in news through transparency, multi-perspective analysis, and democratic resilience—starting where the data gap is deepest.

### 🌍 **Mission**
In a world overwhelmed by biased narratives and language barriers, Perspectivity empowers citizens with multi-perspective news in their own language. Built for low-resource countries, we provide an open-source news insight framework that scrapes, aggregates, and analyzes regional news in real time.

### ✨ **Our Solution: Ground News + Perplexity + Palantir for Emerging Markets**

**6 Core Features:**

1. 🤖 **News Aggregation AI Agent**
   - Automatically gathers related stories from TV, newspapers, portals, and social media
   - You don't search for news — it finds you

2. ⚖️ **Multi-Axis Bias Analysis**
   - Detects bias across political, cultural, and religious axes—not just left vs right
   - Shows whether stories lean pro-government, opposition, secular, or religious

3. 📝 **AI News Summarizer**
   - Condenses long articles into clear, factual summaries in both English and local languages
   - Get key facts in under 60 seconds without bias or fluff

4. 💬 **Interactive News Chat**
   - Perplexity-style conversational interface
   - Ask "What's happening with protests in Dhaka?" and get real-time answers grounded in verified news

5. 📊 **Regional Trend Analytics**
   - Palantir-style mapping of stories across districts, tracking bias, media attention, and sentiment over time
   - See how issues evolve geographically

6. 🌍 **Local Language Support**
   - Built on BongLLaMA, the first open-source Bangla LLM fine-tuned for civic NLP
   - Works on low-end phones with offline capabilities

### 🚀 **Live Demo**
- **Drishtikon (Bangladesh Pilot):** [drishtikon.life](https://drishtikon.life)
- **Demo Video:** [Loom Recording](https://www.loom.com/share/3f5e1e09fdda48aa8c10157ada5bee70)
- **Landing Page:** [perspectivity.co](https://perspectivity.co)

### 🛠 **Technical Stack**
- **Frontend:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **AI/ML:** BongLLaMA (first open-source Bangla LLM for civic NLP)
- **Research:** Published on ArXiv, available on Hugging Face
- **Architecture:** OpenNewsInsight framework for multi-axis bias detection
- **Deployment:** Vercel, optimized for performance

### 📊 **Current Traction**
- **200+ news sources** being processed in real-time
- **4 districts** covered in Bangladesh beta testing
- **64 total districts** planned for full Bangladesh coverage
- **200M+ people** impacted by news bias in Bangladesh alone
- **15+ languages** planned for regional expansion

### 👥 **Team**
- **Abdullah Khan Zehady** - Founder & CEO
  - ML infrastructure builder and BongLLaMA engineer
  - Built the first open-source Bangla LLM fine-tuned for civic NLP
  - Published research on ArXiv, model available on Hugging Face

- **Roy Dipta** - Co-Founder & CTO
  - LLM researcher focusing on bias detection and event processing pipelines
  - Specializes in multi-axis bias analysis for low-resource language contexts

### 🎪 **Y Combinator Summer 2025**
Currently applying to YC S25 batch with this transformative solution for emerging market news transparency.

**Our Pitch:** *"A mash of Ground News + Perplexity + Palantir for emerging markets"*

### 💡 **Why Now?**
- **Information Crisis:** News fragmentation and bias in low-resource democracies
- **Language Barriers:** Current solutions don't support local languages effectively
- **Rising Demand:** Citizens increasingly demand news transparency
- **Technical Foundation:** Proven with BongLLaMA and OpenNewsInsight framework
- **Market Gap:** No comprehensive solution exists for emerging markets

### 📈 **Market Opportunity**
- **Primary:** 200M+ people in Bangladesh affected by news bias
- **Secondary:** 1.5B+ people in similar low-resource countries
- **Tertiary:** Global diaspora communities seeking homeland news clarity
- **Enterprise:** NGOs, businesses, and organizations needing regional insights

### 🔮 **Roadmap**

**Q1 2025**
- Complete Bangladesh market fit validation
- Onboard first NGO clients and pilot customers
- Expand to 10+ districts with full coverage

**Q2 2025**
- Scale to other South Asian countries (Nepal, Sri Lanka)
- Launch enterprise API for diaspora communities
- Establish partnerships with local media organizations

**Q3 2025**
- Enterprise API for business intelligence and trend analysis
- Africa expansion pilot (Nigeria, Kenya)
- Advanced AI features: predictive trend analysis

**Q4 2025**
- Full multi-continent presence
- Advanced enterprise dashboard
- Policy maker and government partnerships

### 🏆 **Key Achievements**
- ✅ First open-source Bangla LLM (BongLLaMA) with 10K+ downloads
- ✅ ArXiv publication on civic NLP methodologies
- ✅ Live beta platform processing 200+ news sources
- ✅ Multi-axis bias detection framework (beyond left/right)
- ✅ Real-time regional trend analytics system

### 💰 **Business Model**
1. **Freemium Subscriptions** - Basic access free, premium features paid
2. **Enterprise Licensing** - Custom dashboards for NGOs and businesses  
3. **API Access** - Developer access to bias analysis and trend data
4. **Consulting Services** - Custom implementations for organizations

### 📧 **Contact**
- **Email:** hello@perspectivity.co
- **Website:** https://perspectivity.co
- **Demo:** https://drishtikon.life
- **Research:** Available on ArXiv and Hugging Face

---

## 🛠 **Development Setup**

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/OpenNews-Insight/Perspectivity.git
cd Perspectivity

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

### Project Structure
```
Perspectivity/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Features showcase
│   ├── Demo.tsx        # Demo section
│   ├── Problem.tsx     # Problem statement
│   ├── Team.tsx        # Team profiles
│   └── Footer.tsx      # Site footer
├── public/             # Static assets
│   └── assets/         # Images and logos
├── package.json        # Dependencies
├── tailwind.config.js  # Styling configuration
└── README.md          # This file
```

### Contributing
We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Code Style
- Use TypeScript for type safety
- Follow ESLint configurations
- Use Tailwind CSS for styling
- Write meaningful commit messages

### Issues
Found a bug or have a feature request? Please [open an issue](https://github.com/OpenNews-Insight/Perspectivity/issues).

### License
MIT License - see [LICENSE](LICENSE) file for details.

---

## 🌟 **"Every Story. Every Side. In Your Language."**

*Building democratic resilience through AI-powered news transparency, one region at a time.*

---

**Made with ❤️ by the Perspectivity team for a more transparent world.**