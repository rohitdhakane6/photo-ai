<!-- PROJECT LOGO -->
<p align="center">
  

  <h3 align="center">100xPhoto</h3>

  <p align="center">
    The open-source photo generator.
    <br />
    <a href="https://photo.100xdevs.com/"><strong>Learn more »</strong></a>
    <br />
    <br />
    <a href="https://photo.100xdevs.com/">Website</a>
    ·
    <a href="https://github.com/code100x/photo-ai/issues">Issues</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## About the Project

<img width="100%" alt="booking-screen" src="https://github.com/user-attachments/assets/677d2fe6-58b1-45c8-b776-395ad82d7bee">


# 100xPhoto: Your Personal Image Intelligence Platform

100xPhoto allows users to upload their personal photos to train custom AI models. After training on your images, you can generate entirely new photos by typing simple text prompts. The AI learns your unique style, preferences, and visual elements from your uploaded photos. Simply enter prompts like "sunset beach scene" or "portrait with mountain background" and 100xPhoto creates new images that match your personal aesthetic. The more photos you upload, the better the AI understands your specific visual language, allowing for increasingly accurate and personalized image generation. 100xPhoto transforms your existing photo collection into a powerful creative tool for producing original images that reflect your individual style.



### Built With

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Prisma.io](https://prisma.io)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Turborepo](https://turbo.build/repo)
- [shadcn/ui](https://ui.shadcn.dev/)


<!-- GETTING STARTED -->

## Getting Started

Please follow these simple steps to get a local copy up and running.

### Prerequisites

Here is what you need to be able to run 
 - Bun  installed ([Get Bun](https://bun.sh/))
 - Docker installed
   
## Development

### Installation

1. Clone the repository:

```bash
git clone https://github.com/code100x/photo-ai.git
```

2. Navigate to the project directory:

```bash
cd photo-ai
```

3. Install the dependencies using Bun:

```bash
bun install
```

4. Navigate to the Docker directory and set up the database services:

```bash
cd docker
docker compose up -d
```

5. Move back to the project root:

```bash
cd ..
```

6. Set up the Prisma database:

```bash
cd packages/db
cp .env.example .env
```

7. Apply the Prisma migrations:

```bash
bun run prisma migrate dev
```

8. Move back to the root folder and start the application:

```bash
cd ../..
bun run  dev
```

9. Open the app in your browser at `http://localhost:3000`.

