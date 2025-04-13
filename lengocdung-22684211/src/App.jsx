import { useState } from 'react'
import './App.css'
import Header from '../component/Header.jsx'
import RecipeHighlight from '../component/RecipeHighlight.jsx'
import HomePage from '../component/HomePage.jsx'
import Footer from '../component/Footer.jsx'
function App() {
  const [activeContent, setActiveContent] = useState(null); // 'bai1' | 'bai2' | null


  return (
    <>
        {/* Chọn bài */}
        {activeContent === null && (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
            <button
              style={{ backgroundColor: "pink", width: "150px", height: "50px", margin: "10px" }}
              onClick={() => setActiveContent("bai1")}
            >
              Bài 1
            </button>
            <button
              style={{ backgroundColor: "pink", width: "150px", height: "50px" }}
              onClick={() => setActiveContent("bai2")}
            >
              Bài 2
            </button>
          </div>
        )}

        {/* Nội dung Bài 1 */}
        {activeContent === "bai1" && (
          <>
            <Header />
            <RecipeHighlight />
            <HomePage />
            <Footer />
            <div style={{ textAlign: "center", margin: "20px" }}>
              <button onClick={() => setActiveContent(null)} style={{ padding: "10px 20px", backgroundColor: "#ddd" }}>
                Quay lại
              </button>
            </div>
          </>
        )}

        {/* Nội dung Bài 2 */}
        {activeContent === "bai2" && (
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <h2>Bài 2</h2>
            <p>Đây là nội dung Bài 2. Bạn có thể thay thế bằng component khác nếu muốn.</p>
            <button onClick={() => setActiveContent(null)} style={{ padding: "10px 20px", backgroundColor: "#ddd", marginTop: "20px" }}>
              Quay lại
            </button>
          </div>
        )}
    </>
  )
}

export default App
