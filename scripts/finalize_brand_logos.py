import base64
import re
import urllib.request
from pathlib import Path

from PIL import Image

DIR = Path(r"c:\Projects\yashply\public\brands")
UA = {"User-Agent": "Mozilla/5.0"}

# Pull GRASS homepage and extract embedded logo data-uri if present
html = urllib.request.urlopen(
    urllib.request.Request("https://www.grass.eu/en/", headers=UA), timeout=40
).read().decode("utf-8", "ignore")
m = re.search(
    r'data:image/png;base64,([A-Za-z0-9+/=]{500,})[^"]*"[^>]*alt="logo"',
    html,
)
if not m:
    m = re.search(r'data:image/png;base64,([A-Za-z0-9+/=]{2000,})', html)
if m:
    raw = base64.b64decode(m.group(1))
    (DIR / "grass.png").write_bytes(raw)
    print("grass.png", len(raw))
else:
    print("no grass data uri; writing brand-colored SVG fallback")
    (DIR / "grass.svg").write_text(
        """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 48" role="img" aria-label="GRASS">
  <text x="0" y="34" font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="700" fill="#6BAA3A" letter-spacing="2">GRASS</text>
</svg>""",
        encoding="utf-8",
    )

# Ensure key downloads exist / convert webp -> png for broader support
converts = [
    ("ebco2.webp", "ebco.png"),
    ("ozone.webp", "ozone.png"),
]
for src, dest in converts:
    sp, dp = DIR / src, DIR / dest
    if sp.exists():
        im = Image.open(sp).convert("RGBA")
        im.save(dp)
        print("converted", src, "->", dest, im.size)

# Prefer smaller clean ebco2 over huge animated-ish ebco.webp if present
if (DIR / "ebco2.webp").exists() and not (DIR / "ebco.png").exists():
    im = Image.open(DIR / "ebco2.webp").convert("RGBA")
    im.save(DIR / "ebco.png")

print("done", sorted(p.name for p in DIR.iterdir()))
