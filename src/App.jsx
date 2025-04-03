import React from "react";
import Error from "./pages/Error"; // Đảm bảo file Error.jsx tồn tại trong thư mục ./pages

function App() {
  return (
    <div>
      {/* Hiển thị trang lỗi */}
      <Error />
      {/* Hiển thị Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;