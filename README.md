
# Dynamic Comparison Table Dashboard

A high-performance dynamic comparison dashboard built using React, TypeScript, Ant Design, and Django REST Framework.

The application supports:
- Dynamic table columns
- Date-based filtering
- Comparison mode
- Pagination for large datasets (~40K records)
- CSV export
- Interactive comparison chart
- Optimized rendering

---

# Tech Stack

## Frontend
- React
- TypeScript
- Ant Design
- Recharts

## Backend
- Django
- Django REST Framework
- SQLite

---

# Features

## Dynamic Table
- Dynamic columns based on selected dates
- Supports large dataset rendering
- Virtualized scrolling
- Pagination support

## Date Filtering
- Single date selection
- Compare mode (2 dates)

## Compare Mode
- Dynamically adds/removes comparison columns

## CSV Export
- Export filtered records into CSV file

## Performance Optimization
- Backend pagination
- Memoization using `useMemo`
- Normalized frontend data structure
- Virtualized table rendering

## Chart Visualization
- Stacked bar comparison chart
- Dynamic graph rendering

---

# Project Structure

frontend/
│
├── components/
├── hooks/
├── services/
├── utils/
├── App.tsx
│

backend/
│
├── tabledata/
├── backend/
├── manage.py

---

# Backend Setup

## Create Virtual Environment

```bash
python -m venv venv
```

## Activate Virtual Environment

### Windows
```bash
venv\Scripts\activate
```

### Mac/Linux
```bash
source venv/bin/activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Run Migrations

```bash
python manage.py migrate
```

---

## Generate Mock Data

```bash
python manage.py generatedata
```

This inserts approximately 40,000 records.

---

## Start Backend Server

```bash
python manage.py runserver
```

Backend runs on:

```bash
http://127.0.0.1:8000
```

---

# Frontend Setup

## Install Dependencies

```bash
npm install
```

---

## Start Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# API Endpoints

## Get Table Data

```bash
GET /api/table-data/
```

### Query Params

| Param | Description |
|---|---|
| dates | Comma separated dates |
| page | Pagination page number |

Example:

```bash
/api/table-data/?dates=2026-01-10,2026-01-15&page=1
```

---

## Export CSV

```bash
GET /api/export-table-data/
```

Example:

```bash
/api/export-table-data/?dates=2026-01-10,2026-01-15
```

---

# Assignment Requirements Covered

## Dynamic Table
- Dynamic columns
- Pagination
- Virtualized rendering

## Date Picker
- Single date mode
- Compare mode

## Performance
- Optimized rendering
- Large dataset support

## UI
- Ant Design UI
- Loading state
- Empty state
- CSV Export
- Comparison Chart

---
---

# Regenerate Mock Data

If you want to regenerate fresh mock data:

## Step 1 — Delete Existing Records

```bash
python manage.py shell
```

Run:

```python
from tabledata.models import TableRecord
TableRecord.objects.all().delete()
exit()
```

This removes all existing records from the database.

---

## Step 2 — Generate Fresh 40K Records

```bash
python manage.py generatedata
```

You should see:

```bash
40K records inserted
```

## Output
1. Output of one selected data 

https://github.com/user-attachments/assets/5e981122-5910-4977-8354-a8c1adc5988c

2. Output when two data is selected

https://github.com/user-attachments/assets/a61c885b-0fe9-4733-baff-cf477d5cf796

3. Output when one product have two values

   <img width="1430" height="646" alt="Capture" src="https://github.com/user-attachments/assets/56bbada7-c06a-4912-91a7-ce143e76a3c5" />
   <img width="1485" height="806" alt="Capture1" src="https://github.com/user-attachments/assets/9d24fa2f-4a7e-4214-8ade-529ee91052b7" />

---

# Author

Swapnaja Singh
