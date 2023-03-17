# Aiki

A simple web application that allow users easily manage tasks and collaborators.

## Contributors
 [Hamza Bashir](https://github.com/bamoha), [Ismail Omodara](https://github.com/ismailomodara)

## Project Folder Structure
`public` directory houses all static assets like images, documents, etc

`src` contains several directory structure to contain files/subdirectories specific to the naming.

`components` contains application components group into application context subdirectories.

`layouts` contains all different layouts used for different pages.

`pages` contains all pages, public and authenticated.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as API routes instead of pages. [Learn more](https://nextjs.org/docs/api-routes/introduction)


`services` contains files that handles api calls.

`styles` contains modularized styles (components/context specified) and global styles.

`types` contains all defined types, interfaces, aliases, etc

## Running the project locally
1. Clone the repository.
2. Run command to install all required packages.
    ```bash
    npm install dev
    # or
    yarn install
    # or
    pnpm install
    ```
3. Start up development server
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
