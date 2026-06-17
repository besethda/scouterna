<h1>HSS Sea Scout Website</h1>
<img width="1000" height="666" alt="Mobile App Screen Mockup, Mosaic" src="https://github.com/user-attachments/assets/53319834-2e7e-486c-841e-12fa4affff04" />
</br>
A responsive, multilingual Next.js web application for the HSS Sea Scout organization in Stockholm, integrated with Sanity CMS for easy client-side content management.</br>
</br>
Live Demo: Swedish: https://scouterna.vercel.app/sv | English: https://scouterna.vercel.app/en

</br>
</br>
<h3>Key Features</h3>
Multilingual: Smooth dynamic switching between Swedish and English using Next.js routing.

Client CMS: Sanity CMS integration allows clients to update text, images in real-time.

Interactive Maps: React Leaflet maps for scout locations with full zoom and interactive markers.

Forms & Email: React Hook Form and Resend for user contact messages.

Responsive Design: perfect implementation from mobile (375px) to desktop (1920px) via Tailwind.
</br>
</br>
<h3>Menu Structure</h3>

```text
Home
├── Join the scouts
│   ├── Become a sea scout
│   └── FAQ
├── Our groups
│   ├── Our group structure
│   ├── Spårarscouter
│   ├── Upptäckarescouter
│   ├── Äventyrsrscouter
│   ├── Utmanarsscouter
│   └── Familjscouter
├── What we do
│   ├── Life as a sea scout
│   ├── Our boats
│   ├── Our scout cabins
│   ├── Myset
│   └── Ruffen
├── For members
│   ├── Member information
│   └── HSS life jacket policy
└── About HSS
    ├── Our history
    ├── Contact
    └── GDPR
```
</br>
<h3>Tech Stack</h3>
<h4>Frontend</h4>
Framework: Next.js (App Router)</br>
Language: TypeScript</br>
Styling: Tailwind CSS</br>
Form Management: React Hook Form</br>
Interactive Maps: React Leaflet</br>
State & Localization: Custom hook (useMessages)

<h4>Backend, CMS & Services </h4>
CMS: Sanity.io (GROQ)</br>
Email Service: Resend</br>
Deployment: Vercel


