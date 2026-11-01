# GTD Ecosystem Landing Page

A modern, component-based single-page landing page built for **GTD (Galaxy Tech Dynamo)**. This application functions as a unified hub showcasing professional IT bootcamps, secure cloud application hosting pipelines, remote job placement networks, and core enterprise digital services.

Built as part of the **Week 10 Frontend Web Development Assignment** for **Zihntech Academy (Cohort 01)**.

## 🚀 Purpose & Features
The core objective of this project is to practice robust interface composition, layout scaling, and structural separation of concerns using React function components and utility styling without relying on external prop management structures.

- **Modular UI Elements:** Deconstructed into 8 distinct atomic and layout components.
- **Service Portfolios:** Highlights intensive tech bootcamps, automated cloud environments, and direct-to-hire pipelines.
- **Component Reusability:** Demonstrates proper implementation of nested multi-instance structures (`FeatureCard` grids and global `Button` controls).
- **Responsive Layout Design:** Fully adaptive breakpoints built entirely via Tailwind fluid utility markers to match desktop and mobile viewport environments natively.

---

## 🛠️ Built With
- **React 19** (Functional Components architecture)
- **Vite** (Next-generation bundle framework)
- **Tailwind CSS v4** (Modern compiler plugin engine configuration)
- **JavaScript ES6+**

---

## 📂 Component Directory Tree
Every customized functional block resides inside its own separate source module inside `src/components/`:

- `Navbar.jsx` - Dynamic header container layout presenting brand properties and site navigation anchors.
- `Hero.jsx` - Core marketing screen area holding key value headlines and primary triggers.
- `Button.jsx` - *[Reused Component]* Global interactive action handler element styled for fluid layouts.
- `Features.jsx` - Main multi-column flex orchestration container handling the service grid layout.
- `FeatureCard.jsx` - *[Reused Component]* Iterated 3 times to represent custom internal variations for GTD Academies, Cloud Hosting, and Job Matching systems.
- `Testimonials.jsx` - Grid row block containing layout rows for user feedback.
- `TestimonialCard.jsx` - *[Reused Component]* Renders student block quotes and career transition profiles.
- `Footer.jsx` - Baseline closure row managing copyright timelines and academy tracking metadata.

---

## 💻 Local Setup and Installation

Follow these instructions to run the GTD Ecosystem development server on your machine:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/AishatOrewa/ZIHNTECT_REACT_APP
   ```

2. **Navigate into the Application Directory:**
   ```bash
   cd ZIHNTECT_REACT_APP/gtd-landing
   ```

3. **Install Project Dependencies:**
   ```bash
   npm install
   ```

4. **Launch the Vite Local Development Server:**
   ```bash
   npm run dev
   ```

5. **View the Application:**
   Open your browser and navigate to `The localhost link provided`
