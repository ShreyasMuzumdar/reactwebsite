import os
import re

# Get the directory of the current script
script_dir = os.path.dirname(os.path.abspath(__file__))
directory = os.path.join(script_dir, "project-docs")
robot_directory = os.path.join(script_dir, "robot-docs")

files = [f for f in os.listdir(directory) if f.endswith('.html')]
robot_files = [f for f in os.listdir(robot_directory) if f.endswith('.html')]

# Standardized CSS from Shreybot-docs.html + accessibility fixes
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

        [data-theme="dark"] {
            
            --bg-primary: #0a192f;
            --bg-secondary: #112240;
            --bg-card: #172a45;
            --text-primary: #e6f1ff;
            --text-secondary: #8892b0;
            --accent-primary: #64ffda;
            --accent-secondary: #64ffda;
            --border-light: rgba(100, 255, 218, 0.1);
            --shadow-medium: rgba(2, 12, 27, 0.7);
            --modal-backdrop: rgba(2, 12, 27, 0.85);
            --toggle-track-bg: rgba(100, 255, 218, 0.1);
            --toggle-border: rgba(100, 255, 218, 0.2);
            --toggle-thumb-bg: linear-gradient(135deg, #64ffda, #0a192f);

        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
            background: var(--bg-primary);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding: 20px;
            transition: all 0.3s ease;
            position: relative;
            overflow-x: hidden;
        }

        .container {
            background: var(--bg-card);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 50px 40px;
            box-shadow: 0 20px 60px var(--shadow-medium);
            max-width: 900px;
            width: 100%;
            border: 1px solid var(--border-light);
            position: relative;
            z-index: 1;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 50px;
            padding-bottom: 30px;
            border-bottom: 3px solid var(--border-light);
        }

        h1 {
            color: var(--text-primary);
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 8px;
            letter-spacing: -0.5px;
        }

        .subtitle {
            color: var(--accent-primary);
            font-size: 1rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 0;
        }

        .back-link {
            color: var(--accent-primary);
            text-decoration: none;
            font-weight: 600;
            padding: 8px 16px;
            border-radius: 20px;
            transition: all 0.3s ease;
            border: 1px solid var(--border-light);
            white-space: nowrap;
        }

        .back-link:hover {
            background: var(--bg-secondary);
            transform: translateX(-5px);
        }

        [data-theme="dark"] .back-link {
            background: var(--bg-secondary);
            color: var(--accent-primary);
            border-color: var(--accent-primary);
        }

        .content-section { margin-bottom: 50px; }

        .section-title {
            color: var(--accent-primary);
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 25px;
            padding-bottom: 12px;
            border-bottom: 2px solid var(--accent-primary);
            letter-spacing: -0.3px;
        }

        .section-content {
            color: var(--text-secondary);
            line-height: 1.85;
            font-size: 1rem;
        }

        .section-content p { margin-bottom: 16px; }

        .specs-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 50px;
            padding-bottom: 30px;
            border-bottom: 2px solid var(--border-light);
        }

        .spec-card {
            background: var(--bg-secondary);
            padding: 24px;
            border-radius: 12px;
            border: 1px solid var(--border-light);
            text-align: center;
            transition: transform 0.3s ease;
        }
        
        .spec-card:hover { transform: translateY(-5px); }

        .spec-label {
            color: var(--accent-primary);
            font-weight: 700;
            margin-bottom: 10px;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .spec-value {
            color: var(--text-primary);
            font-size: 1.2rem;
            font-weight: 600;
        }

        .theme-toggle {
            background: var(--bg-secondary);
            border: 1px solid var(--border-light);
            border-radius: 20px;
            padding: 6px 12px;
            cursor: pointer;
            font-size: 1.2rem;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
        }

        [data-theme="dark"] .theme-toggle {
            background: var(--bg-secondary);
            color: var(--accent-primary);
            border-color: var(--accent-primary);
        }

        /* Documentation Specific Elements */
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 25px 0;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid var(--border-light);
            background: var(--bg-secondary);
        }
        th {
            background: var(--accent-primary);
            color: #0a192f;
            text-align: left;
            padding: 15px;
            font-weight: 700;
        }
        [data-theme="light"] th { color: #ffffff; background: #003366; }
        
        td {
            padding: 15px;
            border-top: 1px solid var(--border-light);
            color: var(--text-secondary);
        }
        pre {
            background: var(--bg-secondary);
            padding: 20px;
            border-radius: 12px;
            overflow-x: auto;
            margin: 20px 0;
            border: 1px solid var(--border-light);
            color: var(--text-primary);
        }
        code { font-family: 'Fira Code', monospace; font-size: 0.9em; }
        
        .card {
            background: var(--bg-secondary);
            border: 1px solid var(--border-light);
            border-radius: 16px;
            padding: 25px;
            margin: 20px 0;
            box-shadow: 0 10px 30px -15px var(--shadow-medium);
        }
        
        .roadmap {
            position: relative;
            padding-left: 30px;
            border-left: 2px solid var(--border-light);
            margin: 20px 0;
        }
        .roadmap-item { margin-bottom: 30px; position: relative; }
        .roadmap-item::before {
            content: '';
            position: absolute;
            left: -37px;
            top: 8px;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: var(--accent-primary);
            border: 4px solid var(--bg-primary);
        }
        
        .problem-decision-result {
            background: var(--bg-secondary);
            padding: 28px;
            border-radius: 12px;
            border-left: 4px solid var(--accent-primary);
            margin-bottom: 32px;
            line-height: 1.85;
            box-shadow: 0 10px 30px -15px var(--shadow-medium);
        }
        .pdr-label {
            color: var(--accent-primary);
            font-weight: 700;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 8px;
        }

        .mechanism-title {
            color: var(--text-primary);
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 20px;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid var(--border-light);
        }

        .mechanism-image {
            width: 100%;
            height: auto;
            border-radius: 12px;
            object-fit: cover;
            margin-top: 20px;
            margin-bottom: 20px;
            border: 1px solid var(--border-light);
            box-shadow: 0 10px 30px -15px var(--shadow-medium);
        }

        .btn {
            padding: 12px 30px;
            font-size: 1rem;
            font-weight: 600;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px var(--shadow-medium);
            text-decoration: none;
            display: inline-block;
        }
        .btn-primary {
            background: var(--accent-primary);
            color: #0a192f;
        }
        [data-theme="light"] .btn-primary { background: #003366; color: white; }
        
        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px -10px var(--accent-primary);
        }
        
        .takeaway-list-number {
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--accent-primary);
            color: #0a192f;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            font-weight: 700;
            flex-shrink: 0;
            line-height: 1;
        }
        [data-theme="light"] .takeaway-list-number { color: white; background: #003366; }

        @media (max-width: 768px) {
            .container { padding: 30px 20px; }
            h1 { font-size: 2.2rem; }
            .section-title { font-size: 1.5rem; }
            .specs-grid { grid-template-columns: 1fr; }
        }
"""

THEME_SCRIPT = """
        const savedTheme = localStorage.getItem('theme') || 'light';
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

    main_match = re.search(r'<main>(.*?)</main>', content, re.DOTALL)
    if main_match:
        inner_content = main_match.group(1).strip()
    else:
        inner_content = re.sub(r'<!DOCTYPE.*?</header>', '', content, flags=re.DOTALL)
        inner_content = re.sub(r'<script>.*</html>', '', inner_content, flags=re.DOTALL)
        inner_content = inner_content.strip()

    project_type = "Engineering" if ("hardware" in content.lower() or "3d" in content.lower()) else "Software"

    new_html = f\"\"\"<!DOCTYPE html>
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
            <div style="display: flex; gap: 12px; align-items: flex-start;">
                <button id="theme-toggle" class="theme-toggle" title="Toggle dark/light mode">🌙</button>
                <a href="../" class="back-link">← Back</a>
            </div>
        </div>

        <!-- Quick Stats -->
        <div class="specs-grid">
            <div class="spec-card">
                <div class="spec-label">Project Type</div>
                <div class="spec-value">{project_type}</div>
            </div>
            <div class="spec-card">
                <div class="spec-label">Status</div>
                <div class="spec-value">Completed</div>
            </div>
        </div>

        <main>
            {inner_content}
        </main>
    </div>

    <script>
{THEME_SCRIPT}
    </script>
</body>
</html>\"\"\"

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
