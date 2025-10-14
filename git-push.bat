@echo off
echo Configurando Git para el proyecto portafolio-FullStack-Philipp-Reyes

cd /d "%~dp0"

echo Verificando si Git está inicializado...
if not exist .git (
  echo Inicializando Git...
  git init
) else (
  echo Git ya está inicializado.
)

echo.
echo Configurando el repositorio remoto...
git remote -v
if %ERRORLEVEL% NEQ 0 (
  echo Añadiendo el repositorio remoto...
  git remote add origin https://github.com/PhilippReyes/portafolio-FullStack-Philipp-Reyes.git
) else (
  echo Repositorio remoto ya configurado.
)

echo.
echo Creando una nueva rama...
set /p BRANCH_NAME="Ingresa el nombre de la nueva rama (ej. develop): "
git checkout -b %BRANCH_NAME%

echo.
echo Añadiendo archivos al control de versiones...
git add .

echo.
echo Realizando commit inicial...
git commit -m "Versión inicial del portafolio estilo arcade"

echo.
echo Subiendo cambios a GitHub...
git push -u origin %BRANCH_NAME%

echo.
echo Proceso completado. Verifica en GitHub que todo se haya subido correctamente.
pause