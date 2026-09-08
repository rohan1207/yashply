import urllib.request
from pathlib import Path

DIR = Path(r"c:\Projects\yashply\public\brands")
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}


def fetch(url: str, dest: Path) -> bool:
    try:
        req = urllib.request.Request(url, headers=UA)
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = resp.read()
        if len(data) < 400:
            print(f"SKIP {dest.name} small {len(data)}")
            return False
        # reject HTML
        if data[:20].lower().startswith(b"<!doctype") or data[:5].lower().startswith(b"<html"):
            print(f"SKIP {dest.name} html")
            return False
        dest.write_bytes(data)
        print(f"OK {dest.name} {len(data)}")
        return True
    except Exception as e:
        print(f"FAIL {dest.name}: {e}")
        return False


attempts = {
    "ebco.png": [
        "https://www.ebco.in/images/logo.png",
        "https://www.ebco.in/assets/images/logo.png",
        "https://ebco.in/wp-content/uploads/2021/01/ebco-logo.png",
        "https://www.ebco.in/public/assets/images/logo.png",
        "https://seeklogo.com/images/E/ebco-logo-3C8E8E8E8E-seeklogo.com.png",
        "https://www.ebco.in/Content/images/logo.png",
        "https://cdn.shopify.com/s/files/1/0558/2840/3985/files/ebco-logo.png",
    ],
    "ozone.png": [
        "https://www.ozone-india.com/images/logo.png",
        "https://www.ozone-india.com/assets/images/ozone-logo.png",
        "https://ozone-india.com/wp-content/uploads/ozone-logo.png",
        "https://www.ozonehardware.com/images/logo.png",
        "https://static.wixstatic.com/media/ozone-logo.png",
    ],
    "ozone.webp": [
        "https://www.ozone-india.com/images/logo.webp",
    ],
    "grass.png": [
        "https://www.grass.eu/fileadmin/user_upload/grass_logo.png",
        "https://www.grass.eu/typo3conf/ext/grass/Resources/Public/Images/logo.svg",
        "https://www.grassamerica.com/wp-content/uploads/grass-logo.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Julius_Blum_GmbH_logo.svg/320px-Julius_Blum_GmbH_logo.svg.png",
    ],
    "grass.svg": [
        "https://www.grass.eu/fileadmin/templates/img/logo.svg",
        "https://www.grass.eu/typo3conf/ext/theme/Resources/Public/Icons/logo.svg",
    ],
    "hettich-color.png": [
        "https://www.hettich.com/fileadmin/user_upload/hettich_logo.png",
        "https://www.hettich.com/media/hettich-logo.svg",
    ],
}

for dest_name, urls in attempts.items():
    dest = DIR / dest_name
    for url in urls:
        print("try", dest_name, url)
        if fetch(url, dest):
            break
