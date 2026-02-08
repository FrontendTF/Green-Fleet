# React + TypeScript + Vite

## How to run the PWA

### 1) Install dependencies
npm install

### 2) Dev mode (browser only, usually no install prompt)
npm run dev

### 3) Build (production / PWA build)
npm run build

### 4) Preview (recommended to test the PWA, also on mobile)
Start the preview server (LAN accessible):
npm run preview or
npx vite preview --host 0.0.0.0 --port 4173

### 5) Windows Firewall: allow the preview port (if mobile cannot connect)
Run in an elevated terminal (Admin):
netsh advfirewall firewall add rule name="Vite Preview 4173" dir=in action=allow protocol=TCP localport=4173
If successful, it prints: OK.

### 6) Open on your phone in the same local network
Example:
http://192.168.0.122:4173

