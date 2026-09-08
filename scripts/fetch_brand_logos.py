import re
import urllib.request
from pathlib import Path
from urllib.parse import urljoin

DIR = Path(r"c:\Projects\yashply\public\brands")
DIR.mkdir(parents=True, exist_ok=True)
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}


def fetch(url: str, dest: Path, timeout: int = 30) -> bool:
    try:
        req = urllib.request.Request(url, headers=UA)
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            data = resp.read()
        if len(data) < 200:
            print(f"SKIP small {dest.name} ({len(data)} bytes) from {url}")
            return False
        dest.write_bytes(data)
        print(f"OK {dest.name} ({len(data)} bytes)")
        return True
    except Exception as e:
        print(f"FAIL {dest.name}: {e}")
        return False


# Wikimedia / known good colored logos
known = {
    "hettich.svg": "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_of_Hettich_(company).svg",
    "hafele.svg": "https://commons.wikimedia.org/wiki/Special:FilePath/H%C3%A4fele_GmbH_%26_Co_KG_Logo.svg",
    "godrej.svg": "https://commons.wikimedia.org/wiki/Special:FilePath/Godrej_Logo.svg",
    "blum.png": "https://commons.wikimedia.org/wiki/Special:FilePath/Blum_brandboxmin_2.png",
}
for name, url in known.items():
    fetch(url, DIR / name)

sites = {
    "ebco": "https://www.ebco.in/",
    "ozone": "https://www.ozone-india.com/",
    "dorset": "https://www.dorsetindia.com/",
    "enox": "https://www.enox.in/",
    "grass": "https://www.grass.eu/en/",
    "blum_site": "https://www.blum.com/in/en/",
    "hettich_site": "https://www.hettich.com/in/en/",
    "hafele_site": "https://www.hafele.com/in/en/",
}

logo_re = re.compile(
    r"""(?:src|content|href)=["']([^"']*(?:logo|brand|Logo|Brand)[^"']*\.(?:svg|png|webp|jpg|jpeg))["']""",
    re.I,
)
img_re = re.compile(r"""(?:src)=["']([^"']+\.(?:svg|png|webp))["']""", re.I)

for name, url in sites.items():
    try:
        req = urllib.request.Request(url, headers=UA)
        html = urllib.request.urlopen(req, timeout=25).read().decode("utf-8", "ignore")
        cands = logo_re.findall(html)
        if not cands:
            # fallback: header images
            cands = [u for u in img_re.findall(html) if "logo" in u.lower()][:8]
        abs_urls = []
        for u in cands:
            abs_urls.append(urljoin(url, u))
        # unique preserve order
        seen = set()
        uniq = []
        for u in abs_urls:
            if u not in seen:
                seen.add(u)
                uniq.append(u)
        print(name, "candidates:", uniq[:6] or "none")
        key = name.replace("_site", "")
        for i, u in enumerate(uniq[:3]):
            ext = Path(u.split("?")[0]).suffix or ".png"
            dest = DIR / f"{key}{'' if i == 0 else i}{ext}"
            if fetch(u, dest):
                break
    except Exception as e:
        print(name, "ERR", e)

print("\nDIR listing:")
for f in sorted(DIR.iterdir()):
    print(f"  {f.name:20} {f.stat().st_size}")
