# 🧩 Frontend Setup Checklist (Angular + Spring Boot)

This guide explains step-by-step how to set up and connect the **Angular frontend** with the **Spring Boot backend**.

---

## ✅ 1. Check Node.js Version

Angular CLI 19 works best with **Node 20 LTS**.

```bash
node -v
# If version is 22 or higher, install Node 20 using NVM
```

---

## ✅ 2. Install NVM (Node Version Manager)

**Purpose:**  
NVM allows multiple Node.js versions on the same system (e.g., React → Node 22, Angular → Node 20).

Download **NVM for Windows** → [coreybutler/nvm-windows on GitHub](https://github.com/coreybutler/nvm-windows/releases)

After installation, verify:

```bash
nvm version
# Example output: 1.2.2
```

---

## ✅ 3. Install and Use Node 20 for Angular

```bash
nvm install 20.18.0
nvm use 20.18.0
node -v
npm -v
```

> Switch back to React later with:
> ```bash
> nvm use 22
> ```

---

## ✅ 4. Install Dependencies

Go to your project folder (example: `library-management-system-frontend`) and run:

```bash
npm install
```

If errors occur:
```bash
rmdir /s /q node_modules
del package-lock.json
npm install
```

---

## ✅ 5. Verify Angular CLI & Environment

```bash
npx ng version
# Should show Angular CLI 19.x and Angular 19.x
```

If not installed properly:

```bash
npx -p @angular/cli@19 ng version
```

---

## ✅ 6. Start the Angular Development Server

```bash
npx ng serve -o
# Opens http://localhost:4200
```

---

## ✅ 7. Start the Spring Boot Backend

Run the backend using IntelliJ IDEA or:

```bash
mvn spring-boot:run
```

Backend runs on `http://localhost:8080`.

---

## ✅ 8. How Frontend Connects to Backend

The connection happens inside Angular services:

```typescript
this.http.post('http://localhost:8080/login', payload);
```

This calls your backend REST APIs (like `/login`, `/signup`, `/books`).

---

## ✅ 9. (Optional) Use Proxy for Cleaner URLs

Create `proxy.conf.json` in the frontend root:

```json
{
  "/api": {
    "target": "http://localhost:8080",
    "secure": false,
    "changeOrigin": true,
    "pathRewrite": { "^/api": "" }
  }
}
```

Run:
```bash
npx ng serve --proxy-config proxy.conf.json
```

Now you can use:
```typescript
this.http.post('/api/login', payload);
```

---

## ✅ 10. Add Login/Signup Button on Home Page

```html
<button class="btn btn-primary" routerLink="/login">Login / Signup</button>
```

> Using `routerLink` avoids click-handler route errors.

---

## ✅ 11. JWT Login Flow (Frontend + Backend)

**Backend:**
```java
@PostMapping("/login")
public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
    boolean isValid = userService.validateUser(loginRequest.getUserName(), loginRequest.getPassword());
    if (isValid) {
        String token = jwtUtil.generateToken(loginRequest.getUserName());
        Map<String, String> response = new HashMap<>();
        response.put("message", "Login successful!");
        response.put("token", token);
        return ResponseEntity.ok(response);
    } else {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
            .body(Collections.singletonMap("error", "Invalid username or password!"));
    }
}
```

**Frontend:**
```typescript
this.userService.loginUser(loginData).subscribe({
  next: (response: any) => {
    console.log('JWT Token:', response.token);
    localStorage.setItem('token', response.token);
    this.router.navigate(['/home']);
  }
});
```

---

## ✅ 12. Common Fixes

| Issue | Solution |
|-------|-----------|
| `400 Bad Request` | Check frontend field names match backend DTOs (e.g., `username` vs `userName`) |
| `ng command not found` | Use `npx ng` or install Angular CLI locally |
| Navigation goes wrong | Use `routerLink="/route"` instead of `(click)` with relative paths |
| Package warnings | Ignore deprecated warnings unless build fails |

---

## ✅ 13. React + Angular Coexistence

Switch between projects easily:

```bash
nvm use 22      # React
nvm use 20.18.0 # Angular
```

Both projects will stay independent.

---

## ✅ 14. Recommended Commit Message

```
feat: set default route to home page
feat: add Login/Signup button on home page
fix: resolve 400 Bad Request during login (field name mismatch)
```

---

## ✅ 15. Final Setup Checklist

- [ ] `nvm version` works  
- [ ] Node version = **20.18.0**  
- [ ] `npm install` completed  
- [ ] Angular version = **19.x**  
- [ ] Frontend runs at `http://localhost:4200`  
- [ ] Backend runs at `http://localhost:8080`  
- [ ] JWT Token visible in console after login  
- [ ] Signup/Login pages working smoothly  

---

🎉 **All set!**  
You’ve successfully configured the Angular frontend with Node 20 and linked it with the backend.
