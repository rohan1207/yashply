from pathlib import Path

root = Path(r"c:\Projects\yashply")
files = [root / "index.html"]
files += [
    p
    for p in (root / "src").rglob("*")
    if p.suffix in {".js", ".jsx", ".ts", ".tsx", ".css", ".html", ".md"}
]

total = 0
for p in files:
    t = p.read_text(encoding="utf-8")
    if "\u2014" not in t:
        continue
    n = t.count("\u2014")
    # Mid-sentence spaced em dash -> comma
    t2 = t.replace(" \u2014 ", ", ")
    # Any remaining em dash -> spaced hyphen
    t2 = t2.replace("\u2014", " - ")
    # Collapse accidental double spaces around replacements
    while "  " in t2:
        t2 = t2.replace("  ", " ")
    # Fix lines that ended with dangling " - "
    t2 = t2.replace(" - \n", ".\n")
    t2 = t2.replace(" - </", "</")
    p.write_text(t2, encoding="utf-8")
    left = t2.count("\u2014")
    total += n
    print(f"{p.relative_to(root)}: {n} removed, remaining {left}")

print("TOTAL", total)

# verify none left in src + index
left_files = []
for p in files:
    if "\u2014" in p.read_text(encoding="utf-8"):
        left_files.append(str(p))
print("LEFT", left_files or "none")
