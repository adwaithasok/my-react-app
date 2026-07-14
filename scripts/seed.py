"""
Portfolio Firestore Seed Script
--------------------------------
Requirements:
    pip install firebase-admin

Usage:
    1. Place serviceAccountKey.json in this scripts/ folder
    2. Run: python seed.py
    3. Safe to rerun — overwrites existing data by document ID
"""

import json
import os
import firebase_admin
from firebase_admin import credentials, firestore

# ── Init ──────────────────────────────────────────────────────
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
KEY_PATH  = os.path.join(BASE_DIR, "serviceAccountKey.json")
DATA_PATH = os.path.join(BASE_DIR, "data.json")

cred = credentials.Certificate(KEY_PATH)
firebase_admin.initialize_app(cred)
db = firestore.client()

with open(DATA_PATH, encoding="utf-8") as f:
    data = json.load(f)

# ── Helpers ───────────────────────────────────────────────────
def upsert(collection, doc_id, payload):
    db.collection(collection).document(doc_id).set(payload)
    print(f"  ✓ {collection}/{doc_id}")

# ── 1. Profile (single document) ─────────────────────────────
print("\n📄 Seeding profile...")
upsert("portfolio", "profile", data["profile"])

# ── 2. Meta — heroStats + navLinks (single document) ─────────
print("\n📄 Seeding meta...")
upsert("portfolio", "meta", {
    "heroStats": data["heroStats"],
    "navLinks":  data["navLinks"],
})

# ── 3. Skill groups ───────────────────────────────────────────
print("\n🔧 Seeding skillGroups...")
for group in data["skillGroups"]:
    doc_id = group["id"]
    upsert("skillGroups", doc_id, group)

# ── 4. Experience (with subProjects as nested array) ──────────
print("\n💼 Seeding experience...")
for item in data["experience"]:
    doc_id = item["id"]
    upsert("experience", doc_id, item)

# ── 5. Projects ───────────────────────────────────────────────
print("\n🚀 Seeding projects...")
for project in data["projects"]:
    doc_id = project["id"]
    upsert("projects", doc_id, project)

print("\n✅ All data seeded successfully!")
