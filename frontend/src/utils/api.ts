const PROD_BACKEND = "http://endorze.org:8080"
const DEV_BACKEND = "http://localhost:8080"

// ÄNDRA TILL true INNAN DU SKRIVER docker compose up --build -d
const USE_PROD_ENVIRONMENT = true

export const BACKEND_URL = USE_PROD_ENVIRONMENT ? PROD_BACKEND : DEV_BACKEND