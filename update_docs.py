import os
import re

directory = r"C:\Users\Shreyas-PC\Documents\Visual Studio Code Projects\reactwebsite\public\project-docs"
files = [
    "3d-printing-control.html",
    "auto-tracking-camera.html", 
    "hand-tracking-mouse.html", 
    "home-automation.html", 
    "openclaw-assistant.html", 
    "python-automations.html", 
    "satellite-tracking.html", 
    "voice-assistant.html"
]

MODERN_CSS = """
    :root {
        --bg-gradient: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        --container-bg: rgba(255, 255, 255, 0.8);
        --text-color: #2d3436;
        --accent-color: #6c5ce7;
        --secondary-text: #636e72;
        --card-bg: rgba(255, 255, 255, 0.5);
        --border-color: rgba(108, 92, 231, 0.2);
        --header-bg: rgba(255, 255, 255, 0.9);
    }

    [data-theme="dark"] {
        --bg-gradient: linear-gradient(135deg, #2d3436 0%, #000000 100%);
        --container-bg: rgba(0, 0, 0, 0.7);
        --text-color: #dfe6e9;
        --accent-color: #a29bfe;
        --secondary-text: #b2bec3;
        --card-bg: rgba(255, 255, 255, 0.05);
        --border-color: rgba(162, 155, 254, 0.3);
        --header-bg: rgba(0, 0, 0, 0.8);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        background: var(--bg-gradient);
        background-attachment: fixed;
        color: var(--text-color);
        line-height: 1.6;
        transition: all 0.3s ease;
    }

    .container {
        max-width: 900px;
        margin: 40px auto;
        background: var(--container-bg);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid var(--border-color);
        border-radius: 20px;
        padding: 40px;
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
        padding-bottom: 20px;
        border-bottom: 1px solid var(--border-color);
    }

    .header-controls {
        display: flex;
        gap: 15px;
    }

    .btn {
        padding: 8px 16px;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;
        border: 1px solid var(--border-color);
        background: var(--card-bg);
        color: var(--text-color);
    }

    .btn:hover {
        transform: translateY(-2px);
        background: var(--accent-color);
        color: white;
    }

    h1 {
        font-size: 2.5rem;
        background: linear-gradient(to right, var(--accent-color), #a29bfe);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 10px;
    }

    .subtitle {
        font-size: 1.2rem;
        color: var(--secondary-text);
        margin-bottom: 0;
        border: none;
        padding: 0;
    }

    .content-section {
        margin: 40px 0;
    }

    .section-title {
        font-size: 1.8rem;
        color: var(--accent-color);
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .section-title::after {
        content: '';
        flex: 1;
        height: 1px;
        background: var(--border-color);
    }

    .section-content {
        margin-left: 10px;
    }

    .tech-stack {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
        gap: 15px;
        margin: 20px 0;
    }

    .tech-item {
        background: var(--card-bg);
        padding: 12px;
        border-radius: 10px;
        border: 1px solid var(--border-color);
        text-align: center;
        font-weight: 600;
        transition: transform 0.3s ease;
    }

    .tech-item:hover {
        transform: scale(1.05);
        border-color: var(--accent-color);
    }

    .link-primary {
        display: inline-block;
        margin-top: 20px;
        padding: 12px 24px;
        background: var(--accent-color);
        color: white !important;
        text-decoration: none;
        border-radius: 10px;
        font-weight: 600;
        transition: all 0.3s ease;
    }

    .link-primary:hover {
        box-shadow: 0 5px 15px rgba(108, 92, 231, 0.4);
        transform: translateY(-2px);
    }

    @media (max-width: 600px) {
        .container {
            margin: 0;
            border-radius: 0;
            padding: 20px;
        }
        h1 { font-size: 2rem; }
    }
"""

THEME_SCRIPT = """
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateToggleText(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateToggleText(newTheme);
    });

    function updateToggleText(theme) {
        themeToggle.innerHTML = theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
    }
"""

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract title and subtitle
    title_match = re.search(r'<h1>(.*?)</h1>', content)
    title = title_match.group(1) if title_match else "Project"
    
    subtitle_match = re.search(r'<p class="subtitle">(.*?)</p>', content)
    subtitle = subtitle_match.group(1) if subtitle_match else ""

    # Extract body content (inside .container but not h1/subtitle)
    # We want to keep everything else but repackage it
    # First, let's find the container content
    container_match = re.search(r'<div class="container">(.*?)</div>', content, re.DOTALL)
    if not container_match:
        return
    
    inner_content = container_match.group(1)
    
    # Remove old H1 and Subtitle from inner_content if they are there
    inner_content = re.sub(r'<h1>.*?</h1>', '', inner_content, flags=re.DOTALL)
    inner_content = re.sub(r'<p class="subtitle">.*?</p>', '', inner_content, flags=re.DOTALL)
    
    # Convert old classes to new semantic classes
    inner_content = inner_content.replace('class="section"', 'class="content-section"')
    inner_content = re.sub(r'<h2>(.*?)</h2>', r'<h2 class="section-title">\1</h2><div class="section-content">', inner_content)
    # Note: we need to close the section-content div. Since sections usually follow each other, 
    # we can try to close before the next section-title or at the end.
    
    # Simple replacement for demonstration; for formal parsing, BeautifulSoup would be better.
    # But since we know the source, let's fix the section closure:
    parts = re.split(r'(<h2 class="section-title">.*?</h2>)', inner_content)
    new_inner_content = parts[0]
    for i in range(1, len(parts), 2):
        header = parts[i]
        body = parts[i+1] if i+1 < len(parts) else ""
        new_inner_content += header + '<div class="section-content">' + body + '</div>'

    inner_content = new_inner_content
    
    # Update tech-stack items
    # Already has tech-stack class, usually.
    
    # Update buttons
    inner_content = inner_content.replace('class="link"', 'class="link-primary"')

    new_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} - Documentation</title>
    <style>
{MODERN_CSS}
    </style>
</head>
<body>
    <div class="container">
        <header>
            <div>
                <h1>{title}</h1>
                <p class="subtitle">{subtitle}</p>
            </div>
            <div class="header-controls">
                <a href="../index.html" class="btn">🏠 Home</a>
                <button id="themeToggle" class="btn">🌙 Dark Mode</button>
            </div>
        </header>

        <main>
            {inner_content}
        </main>
    </div>

    <script>
{THEME_SCRIPT}
    </script>
</body>
</html>"""

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_html)

for filename in files:
    path = os.path.join(directory, filename)
    if os.path.exists(path):
        update_file(path)
        print(f"Updated {filename}")
