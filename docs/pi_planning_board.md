# PI Planning Board - Release Train 1 (Brahma to Moksha Portal)

**Agile Release Train (ART)**: Spiritual Tech Engineering  
**Release Train Engineer (RTE)**: RTE Lead  
**Program Increment**: PI-2026.3  
**Status**: APPROVED & LOCKED  

---

## Program Board Matrix

| Feature ID | Feature Name | Lead Role | Target Sprint | Dependencies | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **FEAT-101** | Hero Pavilion & Guru Dais Illustration UI | UI/UX Designer | Sprint 1 | Hero Image Asset | Ready |
| **FEAT-102** | Complete 8-Stage Syllabus Content & Micro-lessons | Product Owner | Sprint 1 | API Schema | Ready |
| **FEAT-103** | Interactive Cosmic Tattvas & Creation Descent SVG Diagram | Solutions Architect | Sprint 1 | FEAT-102 | Ready |
| **FEAT-104** | Interactive Pancha Kosha (5 Sheaths) Explorer | UI/UX Designer | Sprint 2 | FEAT-102 | Ready |
| **FEAT-105** | 7 Jnana Bhumikas Interactive Roadmap | Fullstack Dev | Sprint 2 | FEAT-102 | Ready |
| **FEAT-106** | Subtle Energy System (7 Chakras & Nadis) Explorer | Fullstack Dev | Sprint 2 | FEAT-102 | Ready |
| **FEAT-107** | Vedantic Atma Vichara (Self-Inquiry) Studio & Audio Synth | Fullstack Dev | Sprint 3 | Web Audio API | Ready |
| **FEAT-108** | Vitest Automated Unit Test Suite & QA Gate | QA Analyst / CAB | Sprint 3 | FEAT-101 - 107 | Ready |

---

## User Stories & Given/When/Then Acceptance Criteria (DoR)

### Story US-101: Guru Dais Hero Presentation
- **Given** an seeker visits the home page of the Brahma to Moksha portal
- **When** the hero section finishes loading
- **Then** they see the high-resolution artwork of the Guru on a lotus dais surrounded by attentive disciples with a smooth golden halo effect.

### Story US-102: Interactive 8-Stage Syllabus Exploration
- **Given** an aspirant exploring the spiritual path
- **When** they click on any stage card (e.g. *Brahma Tattva*, *Mumukshutva*, or *Moksha*)
- **Then** a detailed modal/drawer opens showing Sanskrit terminology, core scriptures (e.g., *Mandukya Upanishad*, *Yoga Vasistha*), mantras, and contemplation exercises.

### Story US-103: Dynamic Visual Diagrams
- **Given** a learner studying the subtle mechanics of consciousness
- **When** they select a diagram tab (*Cosmic Descent*, *Pancha Kosha*, *Jnana Bhumikas*, or *Chakras*)
- **Then** an interactive diagram renders dynamically allowing node selection, layer highlighting, and tooltip details.

### Story US-104: Meditative Soundscape & Self-Inquiry Tool
- **Given** a seeker practicing meditation on the portal
- **When** they toggle the soundscape or start the *Who Am I?* inquiry timer
- **Then** a soothing 432Hz Om audio resonance generates in real-time using Web Audio API without external audio file loading.

---

## ROAM Risk Log
- **R1 (Resolved)**: Large image assets impacting initial page load. *Mitigation*: Optimized WebP/JPEG asset placement in local `public/` directory with instant gradient skeleton loader.
- **R2 (Owned)**: Web Audio browser autoplay restriction. *Mitigation*: Audio requires user gesture initiation (toggle button).
