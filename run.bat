@echo off
call tsc index.ts --outDir output
echo Arquivos compilados!
call node ./output/index.js