# 💼 Find Job Frontend

> Một ứng dụng web hiện đại cho việc tìm kiếm việc làm, kết nối ứng viên và nhà tuyển dụng với giao diện thân thiện và tính năng phong phú.

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Material-UI](https://img.shields.io/badge/MUI-7.0.1-0081CB?style=for-the-badge&logo=mui&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0.15-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)

## 🌟 Tính năng chính

### 👥 Đa người dùng

- **Ứng viên (Candidate)**: Tìm kiếm và ứng tuyển việc làm
- **Nhà tuyển dụng (Employer)**: Đăng tuyển và quản lý ứng viên
- **Xác thực và phân quyền**: Hệ thống đăng nhập/đăng ký an toàn

### 🔍 Tìm kiếm và Lọc thông minh

- **Tìm kiếm việc làm**: Theo vị trí, mức lương, loại hình công việc
- **Tìm kiếm ứng viên**: Theo kỹ năng, học vấn, vị trí
- **Tìm kiếm nhà tuyển dụng**: Theo tên công ty, địa điểm
- **Bộ lọc nâng cao**: Multiple filters với UI thân thiện

### 📋 Quản lý ứng tuyển

- **Theo dõi trạng thái**: 9 giai đoạn từ Applied đến Hired
- **Quản lý CV**: Upload, download và xem trước CV
- **Cover letter**: Tùy chỉnh thư xin việc cho từng vị trí
- **Email tích hợp**: Gửi email trực tiếp cho ứng viên/nhà tuyển dụng

### 💼 Dashboard chuyên nghiệp

#### Ứng viên:

- 📊 Quản lý việc làm đã ứng tuyển
- ⭐ Danh sách nhà tuyển dụng đã theo dõi
- ⚙️ Cài đặt profile cá nhân

#### Nhà tuyển dụng:

- 📝 Đăng tin tuyển dụng
- 👥 Quản lý ứng viên đã theo dõi
- 📊 Theo dõi số lượng ứng tuyển
- ✏️ Chỉnh sửa tin tuyển dụng

### 🎨 Giao diện hiện đại

- **Responsive Design**: Hoạt động mượt mà trên mọi thiết bị
- **Material Design**: Giao diện đẹp mắt với Material-UI
- **TailwindCSS**: Styling nhanh chóng và nhất quán
- **Loading states**: Trải nghiệm người dùng mượt mà
- **Error handling**: Xử lý lỗi thân thiện

## 🛠 Tech Stack

### Frontend Core

- **React 19.0.0** - UI library hiện đại nhất
- **Vite** - Build tool siêu nhanh
- **React Router DOM 7.4.1** - Routing mạnh mẽ

### UI & Styling

- **Material-UI 7.0.1** - Component library professional
- **TailwindCSS 4.0.15** - Utility-first CSS framework
- **Lucide React** - Icon library đẹp mắt
- **Emotion** - CSS-in-JS cho styling linh hoạt

### State Management & HTTP

- **Zustand 5.0.3** - State management đơn giản
- **Axios 1.8.4** - HTTP client với interceptors
- **React Context** - Local state management

### Development Tools

- **ESLint** - Code linting với rules tùy chỉnh
- **Prettier** - Code formatting tự động
- **PostCSS & Autoprefixer** - CSS processing

## 🚀 Bắt đầu

### Yêu cầu hệ thống

- **Node.js** >= 18.0.0
- **npm** hoặc **yarn**
- **Docker** (tùy chọn)

### 📦 Cài đặt

```bash
# Clone repository
git clone https://github.com/your-username/find-job-fe.git
cd find-job-fe

# Cài đặt dependencies
npm install

# Khởi chạy development server
npm run dev
```

### 🔧 Scripts có sẵn

```bash
# Development server (http://localhost:5173)
npm run dev

# Build production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

### 🐳 Docker Deployment

```bash
# Build ứng dụng trước
npm run build

# Build Docker image
docker build -t find-job-fe .

# Chạy container
docker run -p 5173:5173 find-job-fe
```

**Dockerfile** đã được tối ưu để serve static files với `serve`:

- Base image: `node:18`
- Port: `5173`
- Command: `serve -s dist -l 5173`

## 📁 Cấu trúc dự án

```
src/
├── components/          # Reusable components
│   ├── button/         # Custom buttons
│   ├── card/          # Job/Candidate/Employer cards
│   ├── input/         # Form inputs
│   ├── layout/        # Layout components
│   └── select/        # Custom selects
├── constants/          # App constants
│   ├── Currency.js    # Supported currencies
│   ├── Education.js   # Education levels
│   ├── JobProccess.js # Application status
│   └── JobType.js     # Job categories
├── context/           # React contexts
├── hooks/             # Custom hooks
│   ├── AuthProvider.jsx
│   ├── useAuth.js
│   └── useStorage.js
├── pages/             # Page components
│   ├── Auth/          # Login/Register
│   ├── CandidateDashboard/
│   ├── EmployerDashboard/
│   ├── DetailCandidate/
│   ├── DetailEmployer/
│   ├── DetailJob/
│   └── Filter/        # Search pages
├── routes/            # Route configurations
├── services/          # API services
│   ├── authService.js
│   ├── jobService.js
│   ├── candidateProfileService.js
│   └── employerProfileService.js
└── utils/             # Utility functions
    ├── formatDate.js
    ├── handleFindJob.js
    └── handleSalaryAndCurrency.js
```

## 🔑 Tính năng nổi bật

### 🎯 Smart Filtering System

```javascript
// Advanced filters với multiple criteria
const filters = {
  title: "React Developer",
  province_code: "HCM",
  job_type: "FULL_TIME",
  education: "BACHELOR",
  salary_type: "GROSS",
};
```

### 📊 Application Status Tracking

```javascript
// 9 trạng thái ứng tuyển
const jobProcess = {
  APPLIED: "Applied",
  SHORTLISTED: "Shortlisted",
  FIRST_INTERVIEW: "First Interview",
  TECHNICAL_TEST: "Technical Test",
  SECOND_INTERVIEW: "Second Interview",
  FINAL_INTERVIEW: "Final Interview",
  OFFER_NEGOTIATION: "Offer Negotiation",
  OFFER_SENT: "Offer Sent",
  HIRED: "Hired",
};
```

### 🔄 Dynamic View Modes

- **Long Card View**: Hiển thị thông tin chi tiết
- **Short Card View**: Grid layout gọn gàng
- **Smooth transitions**: Chuyển đổi mượt mà giữa các view

### 💰 Smart Salary Handling

```javascript
// Hỗ trợ multiple currencies và units
const salaryFeatures = {
  currencies: ["VND", "USD", "EUR"],
  units: ["k", "m", "b"], // thousand, million, billion
  types: ["GROSS", "NET"],
};
```

## 🔒 Authentication & Security

- **JWT Token** authentication
- **Role-based** access control (Candidate/Employer)
- **Protected routes** với middleware
- **Secure API calls** với axios interceptors
- **Local storage** management an toàn

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints**: xs, sm, md, lg, xl
- **Touch-friendly** interactions
- **Optimized performance** trên mobile

## 🎨 UI/UX Features

### Material Design Components

- **Data Grid** cho bảng dữ liệu
- **Dialogs & Modals** interactive
- **Snackbar notifications**
- **Loading states** với Skeleton
- **Form validation** real-time

### Custom Components

- **MaterialUISwitch** với icons
- **CustomSwitchComponent** cho view modes
- **Dynamic pagination**
- **Social media links** integration

## 🚀 Performance Optimizations

- **Vite** - Lightning fast build tool
- **Code splitting** với React.lazy
- **Image optimization** tự động
- **Bundle analysis** và optimization
- **Caching strategies** cho API calls

## 🔧 Development Guidelines

### Code Style

```javascript
// ESLint configuration
{
  "extends": ["@eslint/js", "eslint-config-prettier"],
  "plugins": ["react", "react-hooks", "unused-imports"],
  "rules": {
    "react-hooks/exhaustive-deps": "warn",
    "unused-imports/no-unused-imports": "error"
  }
}
```

### Component Structure

```jsx
// Consistent component pattern
export default function ComponentName({ prop1, prop2 }) {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    // Side effects
  }, [dependencies]);

  const handleAction = () => {
    // Event handlers
  };

  return <div className="component-container">{/* JSX content */}</div>;
}
```

## 🌐 API Integration

### Service Architecture

```javascript
// Centralized API services
const authService = {
  login: (credentials) => axios.post("/auth/login", credentials),
  register: (userData) => axios.post("/auth/register", userData),
  verifyEmail: (token) => axios.put("/auth/verify", { token }),
};
```

### Error Handling

```javascript
// Safe API call wrapper
const safeApiCall = async (apiCall, showNotification = false) => {
  try {
    const response = await apiCall();
    return response;
  } catch (error) {
    if (showNotification) {
      showErrorSnackbar(error.message);
    }
    throw error;
  }
};
```

## 📈 Future Enhancements

- [ ] **Real-time chat** giữa employer và candidate
- [ ] **Video interview** integration
- [ ] **AI-powered** job matching
- [ ] **Push notifications**
- [ ] **Advanced analytics** dashboard
- [ ] **Multi-language** support
- [ ] **Dark mode** theme
- [ ] **Progressive Web App** (PWA)

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

### Coding Standards

- Sử dụng **functional components** với hooks
- **TypeScript** cho type safety (future)
- **Component testing** với Jest/RTL
- **E2E testing** với Cypress

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Authors

- **Development Team** - [GitHub Profile](https://github.com/your-username)

## 🙏 Acknowledgments

- [Material-UI](https://mui.com/) - Excellent React components
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Lucide](https://lucide.dev/) - Beautiful & consistent icons

---

<div align="center">

**[⬆ Về đầu trang](#-find-job-frontend)**

Made with ❤️ by Development Team

</div>
