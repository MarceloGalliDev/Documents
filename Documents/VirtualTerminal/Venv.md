> Virtual .env

- No windows tem que habilitar a execução de scripts no powershell
    - Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
    - macOs
        - python3 -m venv .venv
        - source .venv/bin/activate
        - ou anaconda (mais fácil identificar o PATH)
    - windows
        - python -m venv .venv
        - .\.venv\Scripts\activate