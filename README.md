###GadgetGroove - Next-Gen Hardware Catalog

GadgetGroove is a high-performance computing and hardware management platform designed for enthusiasts. It features a futuristic, terminal-inspired web interface that allows users to explore premium hardware components and seamlessly sync new equipment into the system's database.

##Live Link: https://gadget-groove-sooty.vercel.app/


Installation & Setup:
git clone https://github.com/mehers-bonna/gadget-groove.git
cd gadget-groove

Install Dependencies:
npm install

Install Required Libraries:
npm install lucide-react react-hot-toast

Run the Development Server:
npm run dev


Route Summary:

Route,              Page Name,      Description
/,                      Home,           Features the Hero section, Categories, and Newsletter.
/items,                 Catalog,        Displays a grid of all available hardware components.
/dashboard/add-item, Add Hardware,      Form to register and sync new hardware to the database.
/items/[id],         Item Details,     Provides technical specifications for a specific component.


Implemented Features:
Cyber-Industrial UI/UX: A dark-themed interface utilizing a Lime-Green accent to mimic high-end hardware terminals.

Dynamic Data Fetching: Automatically retrieves hardware inventory from an Express.js backend API.

Automated Sync & Redirect: After adding new hardware, the system provides a success notification and automatically redirects the user to the Catalog page.

Premium Notifications: Integrated react-hot-toast for elegant, non-intrusive system alerts.

Fully Responsive: Optimized for a seamless experience across mobile, tablet, and desktop devices using Tailwind CSS.


Technologies Used:
Framework: Next.js (App Router)

Styling: Tailwind CSS

Icons: Lucide React

Notifications: React Hot Toast

Backend Connectivity: Fetch API connecting to http://localhost:5000