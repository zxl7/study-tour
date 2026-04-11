import os
import re
import urllib.request
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

directories = [
    "/Users/zxl/Desktop/项目/新加坡项目/新加坡研学官网/新加坡研学PC官网原型",
    "/Users/zxl/Desktop/项目/新加坡项目/新加坡研学官网/新加坡研学微信小程序原型"
]

def clean_name(name):
    name = re.sub(r'[^\w\u4e00-\u9fa5]+', '_', name)
    return name.strip('_')

for d in directories:
    img_dir = os.path.join(d, "img")
    os.makedirs(img_dir, exist_ok=True)
    
    for filename in os.listdir(d):
        if not filename.endswith(".html"): continue
        filepath = os.path.join(d, filename)
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Extract all URLs
        urls = re.findall(r'(https?://[^\s"\'\)]+)', content)
        
        replacements = {}
        img_idx = 1
        
        for url in set(urls):
            # Skip non-image urls
            if 'tailwindcss' in url or 'iconify' in url or 'modao.cc/agent-py/static' in url:
                continue
                
            # If it's unsplash or modao generated images, it's an image
            if 'unsplash.com' in url or 'generated_images' in url or '.jpg' in url or '.png' in url or '.jpeg' in url:
                
                # Try to find alt text for this URL
                alt_text = ""
                img_tag_match = re.search(r'<img[^>]+src=["\']' + re.escape(url) + r'["\'][^>]*>', content)
                if not img_tag_match:
                    img_tag_match = re.search(r'<img[^>]+alt=["\']([^"\']+)["\'][^>]+src=["\']' + re.escape(url) + r'["\'][^>]*>', content)
                
                if img_tag_match:
                    alt_match = re.search(r'alt=["\']([^"\']+)["\']', img_tag_match.group(0))
                    if alt_match:
                        alt_text = alt_match.group(1)
                
                if alt_text:
                    base_name = clean_name(alt_text)
                else:
                    base_name = f"{filename.replace('.html', '')}_img_{img_idx}"
                    
                if not base_name:
                    base_name = f"image_{img_idx}"
                    
                base_name = base_name[:40] # Limit length
                    
                ext = ".jpg"
                if ".png" in url: ext = ".png"
                elif ".svg" in url: ext = ".svg"
                elif ".gif" in url: ext = ".gif"
                elif ".jpeg" in url: ext = ".jpeg"
                elif ".webp" in url: ext = ".webp"
                
                local_filename = f"{base_name}{ext}"
                local_path = os.path.join(img_dir, local_filename)
                
                # Ensure unique filename across the dictionary
                counter = 1
                while f"./img/{local_filename}" in replacements.values():
                    local_filename = f"{base_name}_{counter}{ext}"
                    local_path = os.path.join(img_dir, local_filename)
                    counter += 1
                
                if not os.path.exists(local_path):
                    print(f"Downloading {url} to {local_path}")
                    try:
                        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
                        with urllib.request.urlopen(req, context=ctx) as response, open(local_path, 'wb') as out_file:
                            out_file.write(response.read())
                    except Exception as e:
                        print(f"Failed to download {url}: {e}")
                        # Fallback to curl
                        os.system(f"curl -L -s -o '{local_path}' '{url}'")
                
                replacements[url] = f"./img/{local_filename}"
                img_idx += 1
                
        for url, local_src in replacements.items():
            content = content.replace(url, local_src)
            
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

print("Done replacing and downloading images.")
