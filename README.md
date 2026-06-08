# TutorFlow

**A tutoring management system built with Django REST Framework and React.**

Tutoring businesses run on spreadsheets and WhatsApp threads. TutorFlow replaces that with a proper backend — students, guardians, courses, schedules, and tutors as structured relational data with a clean REST API on top.

> 🚧 Active development — core API is functional, frontend and auth in progress.

**[Live Demo](#)** · **[API Explorer](#)** · **[Portfolio](https://asadmurad.com)**

---

## Features

- Student profiles with grade, school, enrollment date, and guardian linkage
- Schedule management scoped per student
- Guardian profiles — one parent, multiple children
- Course catalogue with student enrollments
- Tutor profiles and assignments *(in progress)*
- Role-based access — admin, tutor, guardian *(in progress)*
- React dashboard for full CRUD management *(in progress)*

---

## Tech Stack

| Layer | Tech |
|---|---|
| Backend | Python, Django 5, Django REST Framework |
| Frontend | React, TypeScript, Vite, Tailwind CSS |
| Database | SQLite (dev) → PostgreSQL (prod) |
| Auth | JWT via SimpleJWT *(in progress)* |
| Routing | drf-nested-routers |
| Task Queue | Celery + Redis *(planned)* |

---

## Project Structure

```
Tutor_Management_Django/
├── backend/
│   ├── core/          # Settings, root URL config
│   ├── students/      # Student model, schedules, serializers, views
│   ├── guardian/      # Guardian profiles
│   ├── courses/       # Course catalogue and enrollments
│   ├── teachers/      # Tutor profiles (in progress)
│   └── tutoflow/      # App config
└── frontend/          # React + Vite dashboard
```

Each domain is a self-contained Django app. Apps communicate through FK relationships and never through direct cross-app imports — keeping circular dependency issues out of the picture.

---

## API Design

A few decisions worth calling out:

**Split read/write serializers**

Every resource has two serializers — one for reads, one for writes. Read serializers return expanded nested data (full guardian object, course list, etc). Write serializers accept flat validated input only. These are different contracts and treating them as one creates problems.

```python
# GET /api/students/1/ — expands relations
StudentReadSerializer → { student_name, school, grade, guardian: {...}, courses: [...] }

# POST /api/students/ — flat, validated input only  
StudentCreateSerializer → { student_name, school, grade, date_of_birth, enrollment_date }
```

**Nested resource routing**

Schedules are scoped under their student. The student FK is injected from the URL — the client never controls relational ownership.

```
GET  /api/students/{id}/schedules/
POST /api/students/{id}/schedules/
```

**Validation lives in the model**

Grade range, date constraints, required fields — all enforced at the model layer via `full_clean()` and database-level `CheckConstraint`. The data stays valid even if something other than the API writes to the DB.

**`on_delete` is a business decision**

Deleting a guardian doesn't cascade to students. Deleting a course doesn't wipe enrollment history. Each FK relationship uses an explicit strategy that reflects what should actually happen to the data.

---

## Running Locally

**Backend**

```bash
git clone https://github.com/asadlion1/Tutor_Management_Django.git
cd Tutor_Management_Django/backend

python -m venv .venv
source .venv/bin/activate       # Windows: .venv\Scripts\activate

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

API available at `http://localhost:8000/api/` with DRF's browsable interface.

**Frontend**

```bash
cd frontend
npm install
npm run dev
```

---

## Roadmap

**In progress**
- [ ] Teacher/tutor profiles and student assignments
- [ ] JWT authentication with role-based permissions (admin / tutor / guardian)
- [ ] drf-nested-routers wired for all nested resources

**Up next**
- [ ] Filtering, search, and pagination across all list endpoints
- [ ] Session logging — record what was covered each session
- [ ] Progress tracking per student per course
- [ ] Celery + Redis for automated session reminders

**Planned**
- [ ] Payment tracking per student/session
- [ ] PostgreSQL in production
- [ ] Full frontend dashboard with data tables and forms
- [ ] Deployment — Railway (API) + Netlify (frontend)
- [ ] Reporting and analytics

---

## Author

**Asad Murad**

[asadmurad.com](https://asadmurad.com) · [LinkedIn](https://linkedin.com/in/asadmurad) · [GitHub](https://github.com/asadlion1)
