
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
Open `data/products.ts` and add a new object to the `products` array:

```typescript
{
    id: "19",
    code: "SGSH-019",
    title: "New Saree Title",
    category: "Handloom",
    color: "Red",
    borderType: "Kutu",
    weave: "Kuppadam",
    material: "Silk",
    description: "Description...",
    tags: ["new", "red"],
    images: ["/placeholder.jpg"], // Ensure image exists in public/ folder
    isNew: true
}
```

### Updating Contact Info
Edit `data/siteContent.ts` to update phone numbers, address, or social links globally.

## 🚢 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new).

1.  Push code to GitHub.
2.  Import project in Vercel.
3.  Deploy.

## 📞 Support

For technical support, contact the developer.
For business inquiries, contact Sunitha Gadwal Saree House.
