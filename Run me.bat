@echo off
title PeedyWORLD Developer Beta
echo Would you like to start the server? (Requires Node.JS) make sure you have it installed.
choice /c YN /n /m "Press Y to start, Press N to exit."

if errorlevel 2 goto :exit
if errorlevel 1 goto :start

:start
cls
node index.js
if %errorlevel% neq 0 goto :error
goto :exit

:error
echo .
echo Something went wrong. Node.JS might not be installed or the 'index.js got fucked up', or someone shut
echo down the server.
pause
goto :exit

:exit
exit