import os
import re

# Get the directory of the current script
script_dir = os.path.dirname(os.path.abspath(__file__))
directory = os.path.join(script_dir, "project-docs")
robot_directory = os.path.join(script_dir, "robot-docs")
public_directory = os.path.join(script_dir, "..", "public", "project-docs")

files = [f for f in os.listdir(directory) if f.endswith('.html')]
robot_files = [f for f in os.listdir(robot_directory) if f.endswith('.html')]
public_files = [f for f in os.listdir(public_directory) if f.endswith('.html')] if os.path.exists(public_directory) else []

# Standardized CSS with Spec Grid support + accessibility fixes
MODERN_CSS = """
        :root {
            --bg-primary: #ffffff;
            --bg-secondary: #f8f9fa;
            --bg-card: rgba(255, 255, 255, 0.8);
            --text-primary: #1a1a1a;
            --text-secondary: #4a4a4a;
            --accent-primary: #003366;
            --accent-secondary: #003366;
            --border-light: rgba(0, 51, 102, 0.2);
            --shadow-medium: rgba(0, 0, 0, 0.1);
            --modal-backdrop: rgba(0, 0, 0, 0.7);
            --toggle-track-bg: rgba(0, 0, 0, 0.1);
            --toggle-border: rgba(0, 0, 0, 0.2);
            --toggle-thumb-bg: linear-gradient(135deg, #ffffff, #f0f8ff);
        }

        [data-theme="light"] {
            --bg-primary: #f5fffb; /* Cleaner Mint White */
            --bg-secondary: #ebfff8;
            --bg-tertiary: rgba(0, 112, 255, 0.05);
            --bg-card: rgba(255, 255, 255, 0.95);
            --bg-card-hover: #ffffff;
            
            --text-primary: #0044cc; /* Deep Vibrant Blue */
            --text-secondary: #0055ff; /* Vibrant Blue */
            --text-tertiary: #172a45;
            --text-light: #0070ff; /* Electric Blue */
            --text-white: #ffffff;
            
            --accent-primary: #0070ff; /* Neon Electric Blue */
            --accent-secondary: #00c2ff;
            --accent-tertiary: #64ffda;
            --accent-light: #cce3ff;
            
            --border-light: rgba(0, 112, 255, 0.15);
            --shadow-medium: rgba(0, 112, 255, 0.12);
        }

        [data-theme="dark"] {
            --bg-primary: #0a192f;
            --bg-secondary: #172a45;
            --bg-tertiary: rgba(100, 255, 218, 0.05);
            --bg-card: rgba(29, 53, 87, 0.9);
            --text-primary: #e6f1ff;
            --text-secondary: #a8b2d1;
            --text-tertiary: #8892b0;
            --text-light: #64ffda;
            --text-white: #ffffff;
            --accent-primary: #64ffda;
            --accent-secondary: #00bfa5;
            --accent-tertiary: #60A5FA;
            --accent-light: #93C5FD;
            --border-light: rgba(100, 255, 218, 0.15);
            --shadow-medium: rgba(2, 12, 27, 0.7);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: var(--bg-primary); color: var(--text-primary); transition: background 0.3s ease; line-height: 1.7; padding: 60px 20px; }
        .container { max-width: 950px; margin: 0 auto; background: var(--bg-card); border-radius: 28px; padding: 80px 70px; box-shadow: 0 40px 100px var(--shadow-medium); border: 1px solid var(--border-light); backdrop-filter: blur(15px); }
        .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 70px; padding-bottom: 40px; border-bottom: 2px solid var(--border-light); }
        h1 { font-size: 3rem; font-weight: 800; color: var(--text-primary); margin: 0; }
        .subtitle { font-size: 1.1rem; font-weight: 600; text-transform: uppercase; letter-spacing: 5px; color: var(--accent-primary); margin-top: 15px; }
        .back-link { text-decoration: none; padding: 12px 25px; background: var(--bg-secondary); border: 1px solid var(--border-light); border-radius: 15px; color: var(--accent-primary); font-weight: 700; transition: all 0.3s ease; }
        .back-link:hover { transform: translateX(-5px); background: var(--accent-primary); color: var(--bg-primary); }
        .theme-toggle { background: var(--bg-secondary); border: 1px solid var(--border-light); width: 45px; height: 45px; border-radius: 12px; cursor: pointer; font-size: 1.2rem; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; }
        .content-section { margin-bottom: 160px; padding-top: 40px; }
        .section-title { font-size: 2.5rem; font-weight: 800; margin-bottom: 45px; color: var(--accent-primary); border-bottom: 2px solid var(--accent-primary); padding-bottom: 10px; display: flex; align-items: center; gap: 25px; }
        .section-title::after { content: ''; flex: 1; height: 1px; background: var(--border-light); }
        .section-content { font-size: 1.2rem; color: var(--text-secondary); line-height: 1.9; }
        .section-content p { margin-bottom: 40px; }
        .mechanism-image { width: 100%; border-radius: 24px; border: 1px solid var(--border-light); box-shadow: 0 40px 80px var(--shadow-medium); margin: 40px 0; display: block; }
        .card { background: var(--bg-secondary); padding: 45px; border-radius: 24px; margin: 40px 0; border: 1px solid var(--border-light); }
        
        /* Specs Grid Styles */
        .specs-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 25px;
            margin-bottom: 80px;
            padding-top: 20px;
        }

        .spec-card {
            background: var(--bg-secondary);
            padding: 25px;
            border-radius: 20px;
            border: 1px solid var(--border-light);
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .spec-card:hover {
            transform: translateY(-5px);
            border-color: var(--accent-primary);
            box-shadow: 0 15px 30px var(--shadow-medium);
        }

        .spec-label {
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: var(--accent-primary);
            font-weight: 800;
        }

        .spec-value {
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--text-primary);
        }

        @media (max-width: 768px) { .container { padding: 40px 20px; } h1 { font-size: 2.2rem; } .header { flex-direction: column; text-align: center; gap: 30px; } }
"""

THEME_SCRIPT = """
        const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        function updateToggleIcon() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const toggleBtn = document.getElementById('theme-toggle');
            if (toggleBtn) toggleBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
        }
        
        updateToggleIcon();
        
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                updateToggleIcon();
            });
        }
"""

def update_file(filepath):
    print(f"Updating {os.path.basename(filepath)}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    title_match = re.search(r'<h1>(.*?)</h1>', content)
    title = title_match.group(1).strip() if title_match else "Project"
    
    subtitle_match = re.search(r'class="subtitle">(.*?)</', content)
    subtitle = subtitle_match.group(1).strip() if subtitle_match else ""

    specs_match = re.search(r'(<section class="specs-grid">.*?</section>)', content, re.DOTALL)
    specs_content = specs_match.group(1).strip() if specs_match else ""

    main_match = re.search(r'<main>(.*)</main>', content, re.DOTALL)
    if main_match:
        inner_content = main_match.group(1).strip()
    else:
        # Improved extraction if main tag is missing or broken
        inner_content = re.sub(r'<!DOCTYPE.*?</header>', '', content, flags=re.DOTALL)
        inner_content = re.sub(r'<section class="specs-grid">.*?</section>', '', inner_content, flags=re.DOTALL)
        inner_content = re.sub(r'<script>.*</html>', '', inner_content, flags=re.DOTALL)
        inner_content = re.sub(r'</div>\s*$', '', inner_content.strip())
        inner_content = inner_content.strip()

    inner_content = re.sub(r'</?main[^>]*>', '', inner_content, flags=re.IGNORECASE)

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
<body data-theme="light">
    <div class="container">
        <div class="header">
            <div>
                <h1>{title}</h1>
                <div class="subtitle">{subtitle}</div>
            </div>
            <div style="display: flex; gap: 20px; align-items: center;">
                <button id="theme-toggle" class="theme-toggle" title="Toggle dark/light mode">
                    <div class="theme-toggle-track">
                        <div class="theme-toggle-thumb">
                            <span class="theme-icon">🌙</span>
                        </div>
                    </div>
                </button>
                <a href="../" class="back-link">← Back</a>
            </div>
        </div>

        {specs_content}

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

for filename in robot_files:
    path = os.path.join(robot_directory, filename)
    if os.path.exists(path):
        update_file(path)

for filename in public_files:
    path = os.path.join(public_directory, filename)
    if os.path.exists(path):
        update_file(path)
ename)
    if os.path.exists(path):
        update_file(path)

for filename in robot_files:
    path = os.path.join(robot_directory, filename)
    if os.path.exists(path):
        update_file(path)

for filename in public_files:
    path = os.path.join(public_directory, filename)
    if os.path.exists(path):
        update_file(path)
