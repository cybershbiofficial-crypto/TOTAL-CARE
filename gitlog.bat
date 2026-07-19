@echo off
cd /d "c:\Users\Shabi\Desktop\TOTAL CARE [Development]"
git log --oneline -10 -- src/components/site/Nav.tsx > gitlog_out.txt 2>&1
