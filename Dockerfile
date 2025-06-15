FROM node:18

WORKDIR /find-job-fe

# Cài 'serve' global để chạy file tĩnh
RUN npm install -g serve

# Copy thư mục build sẵn
COPY dist /find-job-fe/dist

EXPOSE 5173

# Dùng 'serve' để chạy thư mục build
CMD ["serve", "-s", "dist", "-l", "5173"]
