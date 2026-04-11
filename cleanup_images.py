import os
import re

directories = [
    "/Users/zxl/Desktop/项目/新加坡项目/新加坡研学官网/新加坡研学PC官网原型",
    "/Users/zxl/Desktop/项目/新加坡项目/新加坡研学官网/新加坡研学微信小程序原型"
]

def get_used_images(directory):
    used_images = set()
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.html') or file.endswith('.css') or file.endswith('.js'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                    # Find all references to images in img folder
                    # Match patterns like ./img/filename.jpg, img/filename.png, etc.
                    matches = re.findall(r'[\'"](?:\./)?img/([^\'"\?\>]+)', content)
                    used_images.update(matches)
    return used_images

total_deleted = 0

for d in directories:
    img_dir = os.path.join(d, "img")
    if not os.path.exists(img_dir):
        continue
        
    used_images = get_used_images(d)
    
    # print(f"Used images in {d}:")
    # print(used_images)
    
    for img_file in os.listdir(img_dir):
        # Only clean up files, not directories
        img_path = os.path.join(img_dir, img_file)
        if not os.path.isfile(img_path):
            continue
            
        if img_file not in used_images:
            try:
                os.remove(img_path)
                print(f"Deleted unused image: {img_path}")
                total_deleted += 1
            except Exception as e:
                print(f"Error deleting {img_path}: {e}")

print(f"Cleanup complete. Total unused images deleted: {total_deleted}")
