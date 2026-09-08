from pathlib import Path
import re

p = Path(r"c:\Projects\yashply\public\brands")
for f in p.iterdir():
    b = f.read_bytes()
    print(f.name, len(b), b[:12])
    if f.suffix == ".svg":
        t = b.decode("utf-8", "ignore")
        fills = set(re.findall(r"#[0-9A-Fa-f]{3,8}", t))
        print("  colors", sorted(fills)[:15])
