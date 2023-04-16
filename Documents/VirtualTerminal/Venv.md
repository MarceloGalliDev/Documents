> Virtual .env

- No windows tem que habilitar a execução de scripts no powershell
    - Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
    - macOs
        - python -m pip install --upgrade pip setuptools virtualenv
        - python3 -m venv .venv
        - source .venv/bin/activate
        - ou anaconda (mais fácil identificar o PATH)

        - python -m virtualenv kivy_venv
        - For Windows default CMD, in the command line do:

        - kivy_venv\Scripts\activate
        - If you are in a bash terminal on Windows, instead do:

        - source kivy_venv/Scripts/activate
        - If you are in linux or macOS, instead do:

        - source kivy_venv/bin/activate
    - windows
        - python -m venv .venv
        - .\.venv\Scripts\activate
