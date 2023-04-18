> Virtual .env

- python -m pip install --upgrade pip setuptools virtualenv
- pip install -r requirements.txt

- Windows
    - No windows tem que habilitar a execução de scripts no powershell
        - Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

        - python -m venv .venv
        - .venv\Scripts\activate

- macOs
        - python3 -m venv .venv
        - source .venv/bin/activate

        - python -m virtualenv kivy_venv
        - source kivy_venv/bin/activate
