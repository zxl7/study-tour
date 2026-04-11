import os
import re
import urllib.request
from urllib.parse import urlparse

file_path = "/Users/zxl/Desktop/项目/新加坡项目/新加坡研学官网/新加坡研学PC官网原型/growth-camp.html"
img_dir = "/Users/zxl/Desktop/项目/新加坡项目/新加坡研学官网/新加坡研学PC官网原型/img/"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

urls = set(re.findall(r'src="(https?://[^"]+)"', content))

count = 1
for url in urls:
    if 'tailwindcss' in url or 'iconify' in url or 'modao.cc/agent-py/static' in url:
        continue
        
    print(f"Downloading {url}")
    parsed = urlparse(url)
    
    if "unsplash" in url:
        match = re.search(r'photo-([a-zA-Z0-9\-]+)', url)
        if match:
            filename = match.group(1) + ".jpg"
        else:
            filename = f"unsplash_{count}.jpg"
    else:
        filename = os.path.basename(parsed.path)
        if not filename:
            filename = f"downloaded_{count}.jpg"
            
    if not filename.endswith(('.jpg', '.png', '.jpeg')):
        filename += '.jpg'
        
    count += 1
    
    local_path = os.path.join(img_dir, filename)
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response, open(local_path, 'wb') as out_file:
            data = response.read()
            out_file.write(data)
            
        content = content.replace(url, f"./img/{filename}")
        print(f"Saved to {local_path} and replaced.")
    except Exception as e:
        print(f"Failed to download {url}: {e}")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
