# Используем официальный образ Node.js
FROM node:18

# Создаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Открываем порт (если приложение использует 3000)
EXPOSE 7523

# Запускаем приложение
CMD ["npm", "server"]
