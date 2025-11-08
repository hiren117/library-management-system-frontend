# 🚀 Release Notes — v2.0-stable-fullstack-jwt-integration

**Release Date:** 08-Nov-2025  
**Status:** ✅ Stable  
**Stack:** Angular 19 + Spring Boot + PostgreSQL + JWT Authentication  

---

## 🎯 Overview
This release marks the **first fully functional Full-Stack version** of the **Library Management System (LMS)**.  
Both frontend and backend are now seamlessly connected and secured using **JWT Authentication**.  
It’s a production-ready milestone — stable, tested, and working end-to-end.

---

## 🧩 Key Features

### 🔒 Authentication & Security
- Implemented **JWT (JSON Web Token)** authentication in the backend.
- Frontend now securely sends credentials and stores JWT tokens in `localStorage`.
- Auth-protected communication between Angular and Spring Boot.

### 🖥️ Frontend (Angular 19)
- Integrated **Angular 19** with **Node 20 LTS** (via NVM for compatibility).  
- Components:
  - `login` → Authenticates user and stores JWT token.
  - `signup` → Creates new user (validations included).
  - `home` → Navigation hub with new **Login/Signup** button.
  - `book-list`, `book-form`, `book-details` → Full CRUD UI for books.
- Used `HttpClientModule` for REST API integration.
- Optimized routing — default route redirects to `/home`.

### ⚙️ Backend (Spring Boot 3 + PostgreSQL)
- User authentication with encoded passwords (`BCryptPasswordEncoder`).
- JWT token generation and verification using `JwtUtil`.
- CRUD APIs for books and user management.
- PostgreSQL integration with JPA & Hibernate.
- CORS properly configured for Angular requests.

---

## 🧠 Fixes & Improvements
- 🩹 Fixed `400 Bad Request` issue during signup caused by variable name mismatch (`userName` → `username`).
- 🩹 Corrected form bindings and API payloads.
- 🧾 Added new **Login/Signup** button to home page.
- 🏁 Updated default route from `/login` → `/home`.
- ✅ All CRUD endpoints tested successfully via Postman and integrated frontend.

---

## ⚡ Setup Instructions

### 1️⃣ Backend Setup
```bash
# Navigate to backend folder
cd library-management-system-backend

# Build & run Spring Boot app
mvn spring-boot:run
```

- Runs at: **http://localhost:8080**

### 2️⃣ Frontend Setup
```bash
# Navigate to frontend folder
cd library-management-system-frontend

# Install dependencies
npm install

# Serve app
npx ng serve -o
```

- Runs at: **http://localhost:4200**

Make sure backend (8080) is running before logging in or signing up.

---

## 🏷️ Tags
| Repo | Tag | Description |
|------|-----|--------------|
| Backend | `v2.0-stable-fullstack-jwt-integration` | Spring Boot + PostgreSQL + JWT |
| Frontend | `v2.0-stable-fullstack-jwt-integration` | Angular 19 + Node 20 + JWT Integration |

---

## 📦 Previous Version
- **v1.0-stable-basic-auth** → Initial backend-only version using Basic Auth (no JWT).

---

## 🧑‍💻 Contributors
- **Hiren Solanki** — Full Stack Developer (Java + Angular)

---

## 🌟 Notes
This release officially delivers a **fully working production-ready fullstack web app** built from scratch —  
complete with backend auth, frontend routing, and database integration.

Next milestone → `v3.0`: Role-based access control + JWT interceptor + deployment.

---

💪 *Stable. Secure. Fullstack.*
