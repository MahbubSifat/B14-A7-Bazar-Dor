<div align="center">

# 🛒 বাজার দর | BazarDor

*Daily essential commodity prices at a glance*

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![BetterAuth](https://img.shields.io/badge/BetterAuth-FF6B35?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

🌐 Live Demo :https://b14-a7-bazar-dor-wemq.vercel.app/
📁 GitHub Repository: https://github.com/MahbubSifat/B14-A7-Bazar-Dor

</div>

---

## 📖 Description

**BazarDor (বাজার দর)** is a responsive web application that helps people keep track of the daily prices of everyday essentials in Bangladesh, including rice, pulses, oil, vegetables, fish, meat, dairy and spices.

Users can see today's price of every product, how it changed compared to yesterday, which items became more expensive or cheaper, and how prices differ across 12 markets in different divisions. The interface is in Bengali with Bengali numerals and works smoothly on mobile, tablet and desktop screens.

---

## ✨ Key Features

| # | Feature | Description |
| :-: | --- | --- |
| 1 | **Live Price Ticker** | An infinitely scrolling marquee below the navbar that shows each product's emoji, name, price per unit and a ▲ / ▼ percentage change. |
| 2 | **Daily Risers & Fallers** | The top 6 products whose prices went up and the top 6 whose prices went down today, ranked by percentage change. |
| 3 | **Category Pages with Sorting** | Browse products by category and sort by price (low to high or high to low). Sorting uses numeric values, so it works correctly with Bengali numerals. |
| 4 | **Market-wise Price Details** | A protected page for every product with its lowest, highest and average price and a comparison table across 12 markets. |
| 5 | **Authentication & Profile** | Email/password, Google and GitHub login with BetterAuth, protected routes, toast notifications and a profile page where users can update their name. |

---

## 🛠️ Technologies Used

| Category | Technology |
| --- | --- |
| **Framework** | Next.js 16 (App Router) |
| **Language** | JavaScript |
| **Styling** | Tailwind CSS, DaisyUI |
| **Authentication** | BetterAuth (Email/Password, Google, GitHub) |
| **Database** | MongoDB Atlas |
| **Notifications** | react-hot-toast |
| **Data Source** | REST API (`/products`, `/categories`) |
| **Deployment** | Vercel |

---

## 🗺️ Application Routes

| Route | Page | Access |
| --- | --- | :-: |
| `/` | Home: hero, risers, fallers, all products | Public |
| `/category/[slug]` | Category products with sorting | Public |
| `/product/[slug]` | Price summary and market-wise table | 🔒 Protected |
| `/signin` | Sign in | Public |
| `/signup` | Sign up | Public |
| `/profile` | User profile | 🔒 Protected |
| `/profile/update` | Update user name | 🔒 Protected |
| `*` | Custom 404 page | Public |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or later
- A MongoDB Atlas cluster
- Google and GitHub OAuth apps (for social login)

### Installation

```bash
git clone <your-github-repo-link>
cd bazar-dor
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_random_secret
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

Generate a secret with:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

OAuth callback URLs (replace the base URL with your domain in production):

```
Google : http://localhost:3000/api/auth/callback/google
GitHub : http://localhost:3000/api/auth/callback/github
```

### Run the Project

```bash
npm run dev      # start the development server at http://localhost:3000
npm run build    # create a production build
npm run start    # run the production build
```

---

## 📁 Project Structure

```
bazar-dor/
├── app/
│   ├── api/auth/[...all]/   # BetterAuth API route
│   ├── category/[slug]/     # Category page
│   ├── product/[slug]/      # Product details page (protected)
│   ├── profile/             # Profile and update pages (protected)
│   ├── signin/              # Sign in page
│   ├── signup/              # Sign up page
│   ├── layout.js            # Root layout: navbar, footer, toaster
│   ├── loading.js           # Home page skeleton
│   ├── not-found.js         # 404 page
│   └── page.js              # Home page
├── components/              # Reusable UI components
├── lib/
│   ├── api.js               # Data fetching functions
│   ├── auth.js              # BetterAuth server configuration
│   ├── auth-client.js       # BetterAuth client
│   ├── auth-actions.js      # Sign out helper
│   └── helpers.js           # Bengali number, date and unit helpers
└── public/                  # Static assets
```

---

## 📡 API Reference

```
Base URL: https://api.api-store.workers.dev/api/bazardor

GET /products      # All products with prices and market-wise data
GET /categories    # All categories
```

---

## 🌐 Deployment

The project is deployed on **Vercel**.

1. Push the code to GitHub.
2. Import the repository in Vercel.
3. Add all environment variables and set `BETTER_AUTH_URL` to the Vercel domain.
4. Add the production callback URLs to the Google and GitHub OAuth apps.
5. Allow connections from `0.0.0.0/0` in MongoDB Atlas Network Access.

---

## 👨‍💻 Author

**Md Mahbubul Alom Sifat**
B.Sc. in Software Engineering, University of Frontier Technology, Bangladesh

---

<div align="center">

*All prices are approximate and may change depending on market conditions.*

</div>