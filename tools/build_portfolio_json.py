import argparse, json
import pandas as pd
from pathlib import Path

COL_MAP = {
  "프로젝트명":"title","Project":"title","제목":"title",
  "기간":"period","역할":"role","기여도":"contribution",
  "기술스택":"tech","스택":"tech","요약":"description","설명":"description",
  "성과":"impact","링크":"link","URL":"link","git":"link",
  "팀/개인":"team_type","분야":"category","상태":"status"
}
KEEP = ["title","period","description","tech","status","category","link","role","contribution"]

def normalize(df):
  df.columns = [c.strip() for c in df.columns]
  new = {}
  for c in df.columns:
    mapped = next((v for k,v in COL_MAP.items() if k in c), c)
    new[c]=mapped
  return df.rename(columns=new)

def run(csv_path, out_json):
  df = pd.read_csv(csv_path)
  df = normalize(df)
  for k in KEEP:
    if k not in df.columns: df[k] = ""
  projects = []
  for _, r in df.iterrows():
    p = {k: (r[k] if pd.notna(r[k]) else "") for k in KEEP}
    if isinstance(p["tech"], str): p["tech"]=[t.strip() for t in p["tech"].split(',') if t.strip()]
    projects.append(p)
  payload = {"projects": projects}
  Path(out_json).parent.mkdir(parents=True, exist_ok=True)
  with open(out_json,"w",encoding="utf-8") as f:
    json.dump(payload, f, ensure_ascii=False, indent=2)
  print(f"saved -> {out_json} ({len(projects)} items)")

if __name__ == "__main__":
  ap = argparse.ArgumentParser()
  ap.add_argument("--csv", required=True)
  ap.add_argument("--out", default="public/data/portfolio.json")
  args = ap.parse_args()
  run(args.csv, args.out)
