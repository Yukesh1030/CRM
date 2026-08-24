import glob

replacements = {
    '<a href="404.html" style="display: block; width: 100%;"><img src="assets/Brand-logo.webp" alt="STACKLY"></a>': '<a href="index.html" style="display: block; width: 100%;"><img src="assets/Brand-logo.webp" alt="STACKLY"></a>',
    '<a href="404.html"><img src="assets/Brand-logo.webp" alt="STACKLY"></a>': '<a href="index.html"><img src="assets/Brand-logo.webp" alt="STACKLY"></a>',
    '<img src="assets/Brand-logo.webp" alt="STACKLY Logo" style="height: 40px;">': '<a href="index.html"><img src="assets/Brand-logo.webp" alt="STACKLY Logo" style="height: 40px;"></a>',
    '<img src="assets/Brand-logo.webp" alt="STACKLY Logo">': '<img src="assets/Brand-logo.webp" alt="STACKLY Logo">'
}

count = 0
for filepath in glob.glob('*.html'):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content
    for old_str, new_str in replacements.items():
        if old_str in new_content:
            new_content = new_content.replace(old_str, new_str)
            
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        count += 1
        print(f'Updated {filepath}')

print(f'Total files updated: {count}')
