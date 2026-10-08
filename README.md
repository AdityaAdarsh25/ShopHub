# Threadly (ShopHub) — Microservices E-Commerce Platform

A production-ready, full-stack e-commerce platform built using a **Microservices Architecture** with **Spring Boot 3**, **Spring Cloud**, **PostgreSQL**, and **React + TypeScript**.
The application uses a **Database-per-Service** pattern to isolate domain data, an **API Gateway** for centralized authentication and CORS management, **Netflix Eureka** for dynamic service discovery, and **OpenFeign** for inter-service HTTP communication.
---
## Architecture Overview

<img width="1286" height="1009" alt="image" src="https://github.com/user-attachments/assets/86714fcb-6a5e-4094-bde0-ccbd20b779dd" />

---
##  Key Features
- 🔐 **Authentication & Authorization:** Secure user registration and login using **BCrypt** password hashing and **JWT tokens**.
- 🛡️ **API Gateway Security:** Gateway validates JWT signatures centrally and injects sanitized `X-USER-ID` headers to prevent header injection.
- 📡 **Dynamic Service Discovery:** Microservices automatically register with **Netflix Eureka**, allowing dynamic routing and client-side load balancing.
- 🛍️ **Product Catalog:** Supports filtering, pagination, and SEO-friendly slug-based routing (`/products/slug/{slug}`).
- 🛒 **Cart & Order Management:** Active cart management with bulk metadata retrieval via **OpenFeign**.
- 📜 **Historical Invoice Auditing (Denormalization):** Order line items snapshot product details (name, price, image URLs) at checkout to preserve historical purchase accuracy even if product details change later in the catalog.
- 🐳 **Containerized Infrastructure:** Fully containerized PostgreSQL instances and services orchestrated via Docker Compose.
---
##  Tech Stack
### Frontend
- **Framework:** React 18 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS, Shadcn UI
- **State & Routing:** Context API, React Router DOM, Axios
### Backend
- **Framework:** Spring Boot 3.5.7, Java 21
- **Cloud Components:** Spring Cloud Gateway, Netflix Eureka Server, OpenFeign
- **Security:** Spring Security, JJWT (Java JWT), BCrypt
- **ORM & Database:** Spring Data JPA, Hibernate, PostgreSQL 16 (Alpine)
### DevOps & Infrastructure
- **Containerization:** Docker & Docker Compose
- **Build Tools:** Apache Maven, Node.js (npm)
---
##  Database Per Service Setup
| Service | Database Name | Port (External) | Tables Included |
| :--- | :--- | :--- | :--- |
| **User Authentication** | `threadly-users-db` | `5441` | `users` |
| **Product Service** | `threadly-product-db` | `5440` | `products` |
| **Order & Cart Service** | `threadly-order-cart-db` | `5442` | `cart`, `cart_item`, `orders`, `order_items` |
---
## Getting Started
### Prerequisites
Make sure you have the following installed on your machine:
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Node.js (v18+)](https://nodejs.org/)
- [Java 21 JDK](https://adoptium.net/) (Optional, for running backend services locally without Docker)
---
### Step 1: Clone the Repository
```bash
git clone https://github.com/AdityaAdarsh25/threadly-ecommerce.git
cd threadly-ecommerce
```

###Step 2: Start the backend

