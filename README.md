# Luxe

#### A responsive e-commerce site built with:

- **Client**: TypeScript, Next.js, Zustand, Mantine
- **Server**: Strapi, Stripe API, Cloudinary

## Demo

### [Live Demo](https://luxe-store.vercel.app)

![home](https://user-images.githubusercontent.com/91587325/228783740-1d910d3e-ca84-46eb-898c-79e825308216.png)
![mens](https://user-images.githubusercontent.com/91587325/228784921-38a0fd5a-52a4-4274-8dd5-1787c792a871.png)
![product](https://user-images.githubusercontent.com/91587325/228785716-4661ca8f-ec3f-4421-ab6c-0b3fc8955718.png)
![cart](https://user-images.githubusercontent.com/91587325/228791200-e08aaa22-bd12-43ac-80b6-4942dd8a3fb3.png)

## What I learned

- Implementing Next.js features:
  - `getStaticPaths` with `getStaticProps`
  - `getServerSideProps`
  - Image optimization with Next.js Image Component 
- Working with a headless CMS - Strapi
- Storing images in Cloudinary via `strapi/provider-upload-cloudinary` plugin 
- Using Zustand for global state management and its Persist middleware
- Basic animation with Framer Motion
- Integrating Stripe for online payments

## Further Improvements

- Add user authentication via 'Users & Permissions' plugin in Strapi
- Store wishlist and cart data in the database instead of localStorage
- Add end-to-end and integration tests

## Run Locally

- Clone repo

```bash
  git clone https://github.com/zachloh/e-commerce.git
```

- env variable: API_TOKEN, API_URL, STRIPE_SECRET_KEY, NEXT_PUBLIC_API_URL, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, NEXT_PUBLIC_ORDER_TOKEN

```
  npm install
  npm run dev
```

- Note: The strapi application is hosted in a separate, private repo
