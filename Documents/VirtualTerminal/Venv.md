#Virtual Terminal

## Windows
  > No windows tem que habilitar a execução de scripts no powershell
    > Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
    > python -m venv .venv
    > .venv\Scripts\activate

## macOs
  > python3 -m venv .venv
  > source .venv/bin/activate

## Update PIP
  > python -m pip install --upgrade pip setuptools virtualenv
  > pip install -r requirements.txt
