# 🌍 Map Doodles

A personal interactive map that highlights the countries I've visited — built using **Mapbox**, **Framer**, **Netlify Functions**, and powered by **Notion** as a backend.

![Map Preview](https://wcb-map.netlify.app/preview.png)

## 🧭 Features

- ✅ Interactive world map using Mapbox GL JS
- ✅ Dynamic country highlight based on Notion database
- ✅ Toggle between visited and non-visited countries
- ✅ Click-to-navigate links to personal country pages
- ✅ Projection switch: Flat (Mercator) or 3D Globe
- ✅ Framer component version of the map for design integration
- ✅ Serverless architecture via Netlify Functions

## 🚀 Live Demo

🔗 [https://wcb-map.netlify.app](https://wcb-map.netlify.app)

## 📦 Tech Stack

| Tool             | Purpose                                          |
|------------------|--------------------------------------------------|
| **Mapbox GL JS** | World map rendering with dynamic layers          |
| **Notion**       | Stores country visit status                      |
| **Netlify**      | Hosts the site + handles API functions           |
| **Framer**       | Used to create and reuse the component in design |
| **GitHub**       | Version control + open source sharing            |

## ⚙️ Setup Instructions

### Clone the repo

```bash
git clone https://github.com/ashtonmorrow/map-doodles.git
cd map-doodles
Install dependencies
bash
Copy
Edit
npm install
Create a .env file for your Notion integration
env
Copy
Edit
NOTION_API_KEY=your-notion-secret
NOTION_DATABASE_ID=your-notion-db-id
Start local development (requires Netlify CLI)
bash
Copy
Edit
netlify dev
Deploy to Netlify
Push to your GitHub repo (already linked)

Netlify will auto-build and deploy on every commit

🧠 Motivation
This project was built to visualize my travels and experiment with integrating a no-code backend (Notion) into a modern design/dev toolchain. The Framer + Netlify + Mapbox combo creates an easy-to-update, always-on personal world map.

✨ Framer Integration
You can find the MapboxOptions component in mapbox-options.tsx. It:

Loads your visited country data from a live API

Lets you switch between globe & flat projections

Includes a UI toggle for visited overlays

It's plug-and-play inside any Framer project.

👤 Author
Ashton Morrow


📄 License
MIT – open for remix and reuse.

yaml
Copy
Edit

---

Let me know if you want:
- A preview image / screenshot embedded properly
- GitHub badges (e.g. Netlify deployed, MIT license)
- A lighter / shorter version for a landing page style look

Just copy that into your `README.md` and push — and it’ll be live in seconds.