#!/bin/bash
cd /home/kavia/workspace/code-generation/taskmaster-73755-32905c3c/task_manager_frontend_workspace/task_manager_frontend
npx eslint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

