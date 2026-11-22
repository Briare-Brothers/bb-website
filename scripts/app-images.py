"""Builds the landing-page images under public/apps/<slug>/.

For each app it writes:
  icon.png               the Play icon (512 x 512)
  screen-1.jpg..4.jpg    1080 x 1920 JPEG, quality 82: real screenshots where SCREENSHOTS
                         names them; otherwise a placeholder (dark gradient with the app name),
                         but only where the file doesn't exist yet
  og.jpg                 1200 x 630 social card: the icon on a dark background with the name

The pages render these fixed file names, so replacing a placeholder only means writing a new
screen-N.jpg: add the source files to SCREENSHOTS and run this again, or convert them by hand
at the same size and quality.

Usage (from the repo root): python scripts/app-images.py [slug ...]
"""

import sys
from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageFont

REPO = Path(__file__).resolve().parent.parent
WORK = REPO.parent  # C:/Users/Briare Brothers/Work
ICONS = WORK / 'marketing' / 'assets' / 'icons'
FONTS = Path('C:/Windows/Fonts')

SCREEN_SIZE = (1080, 1920)
OG_SIZE = (1200, 630)
JPEG_QUALITY = 82

APPS = {
    'reactor': {
        'name': 'Reactor',
        'subtitle': '3D Live Wallpaper',
        'accent': (249, 115, 22),
        'icon': WORK / 'reactor' / 'Store Listing' / '2026' / 'icon_512.png',
    },
    'enchanted-rose': {
        'name': 'Enchanted Rose',
        'subtitle': 'Live Wallpaper',
        'accent': (225, 29, 72),
        'icon': ICONS / 'enchanted-rose-play.png',
    },
    'material-live-wallpaper': {
        'name': 'Materials',
        'subtitle': '3D Live Wallpaper',
        'accent': (56, 189, 248),
        'icon': ICONS / 'material-live-wallpaper-play.png',
    },
    'gangsters-paradise': {
        'name': 'Gangsters Paradise',
        'subtitle': 'Live Wallpaper',
        'accent': (217, 119, 6),
        'icon': ICONS / 'gangsters-paradise-play.png',
    },
    'hexorb': {
        'name': 'HexOrb',
        'subtitle': '3D Live Wallpaper',
        'accent': (239, 68, 68),
        'icon': ICONS / 'hexorb-play.png',
    },
}

# Real screenshots, in gallery order (screen-1 first), from each app's Play store assets
# (Work/<app>/Store Listing/2026/, made by Work/marketing/scripts/compose.py). Apps not
# listed get placeholders.
def _shots(slug, *names):
    return [WORK / slug / 'Store Listing' / '2026' / 'play-screenshots' / f'{n}.png' for n in names]


SCREENSHOTS = {
    'reactor': _shots('reactor', 'phone-01-hero', 'phone-02-depth', 'phone-04-space', 'phone-05-laboratory'),
    'enchanted-rose': _shots('enchanted-rose', 'phone-01-hero', 'phone-02-battery', 'phone-03-charging',
                             'phone-04-backgrounds'),
    'material-live-wallpaper': _shots('material-live-wallpaper', 'phone-01-hero', 'phone-02-materials',
                                      'phone-03-light', 'phone-07-included'),
    'gangsters-paradise': _shots('gangsters-paradise', 'phone-01-hero', 'phone-02-basement', 'phone-03-yakuza',
                                 'phone-04-clock'),
    'hexorb': _shots('hexorb', 'phone-01-hero', 'phone-02-touch', 'phone-03-charging', 'phone-04-colors'),
}

# The Play feature graphic (1024 x 500) makes the Open Graph image when it exists; it shows
# the wallpaper itself, where the icon-on-black fallback shows only the icon.
def _feature(slug):
    return WORK / slug / 'Store Listing' / '2026' / 'feature-graphic.png'


def font(name, size):
    return ImageFont.truetype(str(FONTS / name), size)


def fit_font(draw, text, name, size, max_width):
    """Largest size up to `size` at which `text` fits in `max_width`."""
    while size > 20:
        f = font(name, size)
        if draw.textlength(text, font=f) <= max_width:
            return f
        size -= 4
    return font(name, size)


def mix(color, k):
    return tuple(int(c * k) for c in color)


def gradient(size, top, bottom):
    w, h = size
    col = Image.new('RGB', (1, h))
    for y in range(h):
        t = y / (h - 1)
        col.putpixel((0, y), tuple(int(top[i] + (bottom[i] - top[i]) * t) for i in range(3)))
    return col.resize(size)


def glow(base, center, radius, color, strength):
    """Adds a soft blurred disc of `color` (scaled by `strength`) onto `base`."""
    layer = Image.new('RGB', base.size, (0, 0, 0))
    x, y = center
    ImageDraw.Draw(layer).ellipse((x - radius, y - radius, x + radius, y + radius), fill=mix(color, strength))
    layer = layer.filter(ImageFilter.GaussianBlur(radius * 0.6))
    return ImageChops.add(base, layer)


def rounded_icon(path, size, radius):
    icon = Image.open(path).convert('RGBA').resize((size, size), Image.LANCZOS)
    mask = Image.new('L', (size, size), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, size - 1, size - 1), radius=radius, fill=255)
    alpha = Image.composite(icon.getchannel('A'), mask, mask)
    icon.putalpha(alpha)
    return icon


def save_jpeg(img, path):
    img.convert('RGB').save(path, 'JPEG', quality=JPEG_QUALITY, optimize=True, progressive=True)


def placeholder(app, index):
    w, h = SCREEN_SIZE
    accent = app['accent']
    img = gradient(SCREEN_SIZE, mix(accent, 0.22), (6, 6, 8))
    glow_y = [0.32, 0.5, 0.68, 0.42][index % 4]
    img = glow(img, (w // 2, int(h * glow_y)), 420, accent, 0.35)
    d = ImageDraw.Draw(img)
    name_font = fit_font(d, app['name'], 'seguibl.ttf', 120, w - 160)
    sub_font = font('segoeui.ttf', 54)
    cy = int(h * glow_y)
    d.text((w // 2, cy - 20), app['name'], font=name_font, fill=(255, 255, 255), anchor='md')
    d.text((w // 2, cy + 30), app['subtitle'], font=sub_font, fill=(161, 161, 170), anchor='ma')
    return img


def screenshot(path):
    img = Image.open(path).convert('RGB')
    if img.size != SCREEN_SIZE:
        img = img.resize(SCREEN_SIZE, Image.LANCZOS)
    return img


def og_from_feature(path):
    w, h = OG_SIZE
    img = Image.open(path).convert('RGB')
    scale = max(w / img.width, h / img.height)
    img = img.resize((round(img.width * scale), round(img.height * scale)), Image.LANCZOS)
    x, y = (img.width - w) // 2, (img.height - h) // 2
    return img.crop((x, y, x + w, y + h))


def og_image(app):
    w, h = OG_SIZE
    accent = app['accent']
    img = gradient(OG_SIZE, (10, 10, 12), (0, 0, 0))
    img = glow(img, (260, h // 2), 260, accent, 0.45)
    icon_size = 320
    icon = rounded_icon(app['icon'], icon_size, 64)
    ix, iy = 100, (h - icon_size) // 2
    img.paste(icon, (ix, iy), icon)
    d = ImageDraw.Draw(img)
    d.rounded_rectangle((ix, iy, ix + icon_size - 1, iy + icon_size - 1), radius=64, outline=(60, 60, 66), width=2)

    tx = ix + icon_size + 70
    max_w = w - tx - 70
    name_font = fit_font(d, app['name'], 'seguibl.ttf', 92, max_w)
    sub_font = font('segoeui.ttf', 40)
    brand_font = font('segoeuib.ttf', 28)
    d.text((tx, h // 2 - 10), app['name'], font=name_font, fill=(255, 255, 255), anchor='ls')
    d.text((tx, h // 2 + 26), f"{app['subtitle']} for Android", font=sub_font, fill=(161, 161, 170), anchor='lt')
    d.text((tx, h - 70), 'Briare Brothers', font=brand_font, fill=(113, 113, 122), anchor='ls')
    return img


def build(slug):
    app = APPS[slug]
    out = REPO / 'public' / 'apps' / slug
    out.mkdir(parents=True, exist_ok=True)

    icon = Image.open(app['icon']).convert('RGBA')
    if icon.size != (512, 512):
        icon = icon.resize((512, 512), Image.LANCZOS)
    icon.save(out / 'icon.png', optimize=True)

    sources = SCREENSHOTS.get(slug)
    for i in range(4):
        name = f'screen-{i + 1}.jpg'
        if sources:
            save_jpeg(screenshot(sources[i]), out / name)
            print(f'{slug}/{name}: screenshot {sources[i].name}')
        elif (out / name).exists():
            # Never overwrite an existing file with a placeholder: it may be a real screenshot
            # dropped in by hand. Delete it first to get the placeholder back.
            print(f'{slug}/{name}: kept existing file')
        else:
            save_jpeg(placeholder(app, i), out / name)
            print(f'{slug}/{name}: placeholder')

    feature = _feature(slug)
    if feature.exists():
        save_jpeg(og_from_feature(feature), out / 'og.jpg')
        print(f'{slug}/og.jpg: from {feature.name}')
    else:
        save_jpeg(og_image(app), out / 'og.jpg')
        print(f'{slug}/og.jpg: icon on black')


if __name__ == '__main__':
    for slug in sys.argv[1:] or APPS:
        build(slug)
