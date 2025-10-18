@echo off
echo Creating GitHub repository and pushing Murphy's Pub...
echo.

REM First, you need to create the repository on GitHub
echo Step 1: Creating repository on GitHub...
echo Please go to: https://github.com/new
echo.
echo Fill in:
echo   - Repository name: murphys-pub-demo
echo   - Description: Murphy's Pub - Demo site for Connecteire
echo   - Public repository
echo   - DO NOT initialize with README
echo.
echo Press any key after you've created the repository on GitHub...
pause

echo.
echo Step 2: Pushing code to GitHub...
cd /d N:\Connecteire\demos\murphys-pub

git remote add origin https://github.com/NickOOOShea/murphys-pub-demo.git
git branch -M main
git push -u origin main

echo.
echo Done! Your code is now on GitHub.
echo Repository URL: https://github.com/NickOOOShea/murphys-pub-demo
echo.
echo Next: Deploy to Cloudflare Pages
echo Go to: https://dash.cloudflare.com
echo Click: Workers & Pages > Create > Pages > Connect to Git
echo Select: murphys-pub-demo
echo.
pause
