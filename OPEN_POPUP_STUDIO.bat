@echo off
setlocal
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js가 설치되어 있지 않아 서버를 시작할 수 없습니다.
  echo index.html 파일을 Chrome 또는 Edge로 직접 열어주세요.
  pause
  exit /b 1
)

start "Popup Studio Server" /min node "%~dp0server.js"
timeout /t 1 /nobreak >nul
start "" "http://127.0.0.1:4177"
endlocal
