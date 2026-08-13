
# Sunitha Gadwal Saree House

A premium, luxury-brand website for Sunitha Gadwal Saree House, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/sunitha-gadwal-sarees.git
    cd sunitha-gadwal-sarees
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 Tech Stack

-   **Framework**: Next.js 14 (App Router)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS 4
-   **Icons**: Lucide React
-   **Fonts**: Playfair Display (Serif), Inter (Sans)

## 📁 Project Structure

-   `app/`: App router pages and layouts.
-   `components/`: Reusable UI components.
-   `data/`: Static data (products, site content).
-   `lib/`: Utility functions.
-   `public/`: Static assets.

## 📝 Managing Content

### Adding/Editing Products
Products are managed through the **Seller Dashboard** at `/seller` — log in with your PIN, then add, edit, or delete sarees and upload photos directly. Changes save to Vercel Blob storage and appear on the live site for every visitor immediately.

`data/products.ts` still exists as the *seed* catalog — it's only used the very first time, before anything has been saved through the dashboard.

### Updating Contact Info
Edit `data/siteContent.ts` to update phone numbers, address, or social links globally.

## 🚢 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new).

1.  Push code to GitHub.
2.  Import project in Vercel.
3.  In the project's **Storage** tab, create a **Blob** store and connect it to this project (include the *Development* environment if you want to use the dashboard locally too). This adds `BLOB_READ_WRITE_TOKEN` automatically.
4.  In **Settings → Environment Variables**, add `SELLER_PIN` (the PIN you'll log in with at `/seller`) and `SELLER_SECRET` (a random string — see `.env.example` for how to generate one).
5.  Deploy.

For local development, copy `.env.example` to `.env.local` and fill in the same three values (run `vercel env pull .env.local` to pull `BLOB_READ_WRITE_TOKEN` once the store is connected).

## 📞 Support

For technical support, contact the developer.
For business inquiries, contact Sunitha Gadwal Saree House.
