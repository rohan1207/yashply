import re
import urllib.request
from pathlib import Path
from urllib.parse import urljoin

DIR = Path(r"c:\Projects\yashply\public\brands")
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}


def get_bytes(url: str) -> bytes:
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read()


def save_logo(url: str, dest: Path) -> bool:
    try:
        data = get_bytes(url)
        if len(data) < 400:
            print("small", dest.name, len(data))
            return False
        head = data[:40].lower()
        if head.startswith(b"<!doctype") or head.startswith(b"<html"):
            print("html", dest.name)
            return False
        dest.write_bytes(data)
        print("saved", dest.name, len(data), "from", url)
        return True
    except Exception as e:
        print("fail", dest.name, e)
        return False


pages = [
    ("ebco", "https://dashboard.ebco.in/"),
    ("ebco", "https://ebco.in/"),
    ("ozone", "https://ozonehardware.com/"),
    ("ozone", "https://www.ozone.in/"),
    ("grass", "https://www.grassamerica.com/"),
    ("grass", "https://www.grass.eu/"),
]

pat = re.compile(r"""["']([^"']*logo[^"']*\.(?:svg|png|webp|jpg|jpeg))["']""", re.I)

for key, page in pages:
    try:
        html = get_bytes(page).decode("utf-8", "ignore")
        found = []
        for m in pat.findall(html):
            u = urljoin(page, m)
            if u not in found:
                found.append(u)
        print(key, page, "->", found[:8])
        for u in found[:4]:
            ext = Path(u.split("?")[0]).suffix.lower() or ".png"
            if save_logo(u, DIR / f"{key}{ext}"):
                break
    except Exception as e:
        print(key, page, "ERR", e)

# Extra direct guesses that often work for Indian hardware brands
extra = [
    ("ebco.png", "https://dashboard.ebco.in/wp-content/uploads/2023/01/ebco-logo.png"),
    ("ebco.svg", "https://dashboard.ebco.in/wp-content/themes/ebco/assets/images/logo.svg"),
    ("ozone.png", "https://ozonehardware.com/wp-content/uploads/ozone-logo.png"),
    ("grass.svg", "https://www.grass.eu/fileadmin/user_upload/GRASS_Logo.svg"),
]

for name, url in extra:
    save_logo(url, DIR / name)

print("--- final ---")
for f in sorted(DIR.iterdir()):
    print(f.name, f.stat().st_size)
