
import json
from pathlib import Path
import bibtexparser

bib = Path("publications.bib").read_text(encoding="utf-8")
db = bibtexparser.loads(bib)

pubs = []
for e in db.entries:
    pubs.append({
        "title": e.get("title","").replace("{","").replace("}",""),
        "authors": e.get("author","").replace("\n"," "),
        "venue": (e.get("journal") or e.get("booktitle") or "").replace("{","").replace("}",""),
        "year": e.get("year",""),
        "url": e.get("url","")
    })

Path("publications.json").write_text(json.dumps(pubs, indent=2), encoding="utf-8")
print(f"✅ Created publications.json with {len(pubs)} papers")

