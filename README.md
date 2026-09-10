🌐 Network Inspector Dashboard

A lightweight, modern full-stack web application designed to scan and monitor active devices in your local network in real time—all directly within your browser. Built for a hackathon.

💡 Inspiration

Have you ever tried logging into your home router just to check who or what is currently connected to your Wi-Fi? It usually means digging up passwords, clicking through clunky, outdated menus, and waiting forever just to see a basic list of devices. I wanted to build something much better: a fast, modern, and lightweight dashboard that gives me a crystal-clear overview of my local network in seconds—no router login required.

🛠️ How I Built It

The project is built using a streamlined full-stack architecture:

⚬ Backend: A Node.js and Express server utilizing the local-devices package to dynamically scan and retrieve active network device data (names, IP addresses, and MAC addresses). It also includes custom CORS headers to ensure smooth communication.
⚬ Frontend: A clean, responsive user interface built with HTML, CSS (featuring a sleek dark mode theme), and vanilla JavaScript that fetches data asynchronously via the standard fetch API.
⚬ Delivery: The Express server acts as both the API provider and static file host, allowing seamless multi-device testing directly over the local IP network.

⚙️ Tech Stack

⚬ Backend: Node.js, Express, local-devices, cors
⚬ Frontend: HTML5, CSS3, JavaScript (ES6+)
⚬ Design/Fonts: Google Fonts (Domine & Source Code Pro), modern dark color scheme

🚀 Getting Started Locally

To run this project on your own machine, follow these steps:

1. Clone the repository:
   git clone https://github.com/amrielyes03-cmyk/FirstCommit-Hackathon.git
   cd FirstCommit-Hackathon
   
2. Install dependencies:
   Make sure you have Node.js installed, then run:
   npm install express cors local-devices
   
3. Start the server:
   node server.js
   
4. Open in your browser:
  ⚬ Locally: http://localhost:3000
  ⚬ Over your local network (mobile/other devices): http://<YOUR-PC-IP>:3000

🧗 Challenges Faced

Tackling this project came with several hurdles that really tested my debugging skills:

⚬ CORS & Connection Issues: Setting up explicit headers in Express to ensure the frontend and backend communicate without browser blocks.
⚬ Asynchronous Data Handling: Ensuring that network scan responses were correctly parsed as JSON and cleanly rendered in the UI without crashing.
⚬ Multi-Device Testing: Troubleshooting local IP routing and ensuring mobile accessibility via the local network.

📚 What I Learned

Building this project taught me so much. I gained practical, hands-on experience with asynchronous JavaScript (fetch), backend routing with Express, handling real-world network data, and bridging client-server applications. Most importantly, I learned how to push through roadblocks, debug errors step-by-step, and bring a fully functional project from scratch to life!
