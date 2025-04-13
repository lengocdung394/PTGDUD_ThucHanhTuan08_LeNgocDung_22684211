import { useState } from 'react';
import '../src/App.css';

export default function DashboardPage() {
  const [data] = useState([
    { name: "Elizabeth Lee", image: "../image/account.jpg",company: "AvatarSystems", value: "$359", date: "10/07/2023", status: "New" },
    { name: "Carlos Garcia", image: "../image/account.jpg",company: "SmoozeShift", value: "$747", date: "24/07/2023", status: "New" },
    { name: "Elizabeth Bailey", image: "../image/account.jpg",company: "Prime Time Telecom", value: "$564", date: "08/08/2023", status: "In-progress" },
    { name: "Ryan Brown", image: "../image/account.jpg",company: "OmniTech Corporation", value: "$541", date: "31/08/2023", status: "In-progress" },
    { name: "Ryan Young", image: "../image/account.jpg",company: "DataStream Inc.", value: "$769", date: "01/05/2023", status: "Completed" },
    { name: "Hailey Adams", image: "../image/account.jpg",company: "FlowRush", value: "$922", date: "10/06/2023", status: "Completed" }
  ]);

  return (
    <div className="flex bg-gray-100" style={{border:"1px solid gray"}}>
      {/* Sidebar */}
      <aside className="w-64 bg-white p-4 shadow">
        <p className="font-bold text-pink-600 w-12" style={{fontSize:"25px"}}>Logo</p>
        <ul className="space-y-2">
          <li className="flex items-center text-white font-semibold m-4 p-2 bg-pink-600 rounded">
            <span className="mr-3">📊</span> Dashboard
          </li>
          <li className="flex items-center text-gray-700  m-4">
            <span className="mr-3">📁</span> Projects
          </li>
          <li className="flex items-center text-gray-700 m-4">
            <span className="mr-3">👥</span> Teams
          </li>
          <li className="flex items-center text-gray-700 m-4">
            <span className="mr-3">📈</span> Analytics
          </li>
          <li className="flex items-center text-gray-700 m-4">
            <span className="mr-3">💬</span> Messages
          </li>
          <li className="flex items-center text-gray-700 m-4">
            <span className="mr-3">⚙️</span> Integrations
          </li>
        </ul>
        <div style={{ position: 'relative', display: 'inline-block', marginTop: "30px" }}>
          <img src="../Lab_05/Group.png" alt="Group" style={{ width: '100%', height: 'auto' }} />
          <p style={{
            color: "black",
            position: 'absolute',
            fontWeight: "bold",
            left: '50%',
            transform: 'translateX(-50%)',
            height: '40px',
            marginLeft: "5px",
            width: '150px',
            backgroundColor: 'white',
            border: '1px soild rgb(165, 236, 245)',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            marginBottom: '7px'
          }}
          >V2.0 is available</p>
          <button
            style={{
              color: "white",
              position: 'absolute',
              bottom: '-90px', // Adjust as needed
              left: '50%',
              transform: 'translateX(-50%)',
              padding: '10px 20px',
              height: '40px',
              width: '170px',

              backgroundColor: 'rgb(167, 240, 240)',
              border: '1px soild rgb(141, 233, 233)',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Try Now
          </button>
        </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-2">

        {/* Search input */}
        <div style={{ height: "50px", display: "flex", borderBottom: "2px solid rgb(9, 5, 5)"}}>
          <h2 style={{ margin: "0", color: '#FF4081', fontWeight: "bold", fontSize:"30px" , marginRight:"210px"}}>DashBoard</h2>
          <input type="text" style={{ width: "220px", height: "25px", marginLeft: "470px", borderRadius: "5px", border: "1px solid white ", backgroundColor: "#EEEEEE" }} />
          <img src="../image/bell.png" alt="" style={{ width: "25px", height: "25px", marginLeft: "20px", marginRight: "20px" }} />
          <h3 style={{ margin: "0px" }}>?</h3>
          <img src="../image/account.jpg" alt="" style={{ width: "32px", height: "32px", borderRadius: "20px", marginLeft: "20px" }} />
        </div>

        <div style={{ display: "flex", padding: "10px" }}>
          <img style={{ width: "25px", height: "25px" }} src="../Lab_05/Squares four 1.png" alt="" />
          <h3 style={{ color: "black", margin: "0px" }}>Overview</h3>
        </div>
        <div className="grid grid-cols-3 gap-6 mb-8 mt-4">
          {/* Turnover */}
          <div className="bg-pink-100 p-6 rounded-2xl shadow-md flex justify-between items-center">
            <div>
              <h3 className="text-base font-semibold text-gray-600 mb-1">Turnover</h3>
              <p className="text-3xl font-extrabold text-gray-800">$92,405</p>
              <p className="text-green-600 text-sm mt-1">▲ 5.39% period of change</p>
            </div>
            <div className="text-pink-600 text-2xl rounded-2xl border-4">🛒</div>
          </div>

          {/* Profit */}
          <div className="bg-blue-100 p-6 rounded-2xl shadow-md flex justify-between items-center">
            <div>
              <h3 className="text-base font-semibold text-gray-600 mb-1">Profit</h3>
              <p className="text-3xl font-extrabold text-gray-800">$32,218</p>
              <p className="text-green-600 text-sm mt-1">▲ 5.39% period of change</p>
            </div>
            <div className="text-blue-600 text-2xl rounded-2xl border-4">💰</div>
          </div>

          {/* New Customers */}
          <div className="bg-blue-50 p-6 rounded-2xl shadow-md flex justify-between items-center">
            <div>
              <h3 className="text-base font-semibold text-gray-600 mb-1">New customer</h3>
              <p className="text-3xl font-extrabold text-gray-800">298</p>
              <p className="text-green-600 text-sm mt-1">▲ 6.84% period of change</p>
            </div>
            <div className="text-blue-600 text-2xl rounded-2xl border-4">👥</div>
          </div>
        </div>

        <div style={{ display: "flex", padding: "10px" }}>
          <img style={{ width: "25px", height: "25px" }} src="../Lab_05/File text 1.png" alt="" />
          <h3 style={{ padding: "0px", margin: "0px" }}>Detailed Report</h3>
        </div>
        {/* Table */}
        <div className="bg-white rounded-lg shadow p-4">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-gray-500">
                <th>Customer Name</th>
                <th>Company</th>
                <th>Order Value</th>
                <th>Order Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr key={idx} className= "hover:bg-gray-50">
                  <td className="py-2">
                    <div style={{display: "flex", alignItems: "center"}}>
                      {<img style={{width:"30px", height:"30px", borderRadius:"15px", marginRight:"5px"}} src={row.image}></img>}
                      <p> {row.name}</p>
                    </div></td>
                  <td>{row.company}</td>
                  <td>{row.value}</td>
                  <td>{row.date}</td>
                  <td>
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${row.status === "New"
                        ? "bg-blue-100 text-blue-700"
                        : row.status === "In-progress"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                        }`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ display: "flex" }}>
          <p style={{ width: "70px" , marginRight:"350px"}}>63 result</p>
          <ul style={{ display: "flex", justifyContent: "center", listStyle: "none", padding: "0px", marginLeft: "430px" }}>
            <li style={{ width: "25px", height: "25px", padding: "5px" }}><img style={{ width: "25px", height: "25px" }} src="../Lab_05/left-arrow.png" alt="" /></li>
            <li style={{ width: "25px", height: "25px", padding: "5px", borderRadius: "20px", color: "white", justifyContent: "center", backgroundColor: "#FF4081" }}>1</li>
            <li style={{ width: "25px", height: "25px", padding: "5px" }}>2</li>
            <li style={{ width: "25px", height: "25px", padding: "5px" }}>3</li>
            <li style={{ width: "25px", height: "25px", padding: "5px" }}>4</li>
            <li style={{ width: "25px", height: "25px", padding: "5px" }}>....</li>
            <li style={{ width: "25px", height: "25px", padding: "5px" }}>11</li>
            <li style={{ width: "25px", height: "25px", padding: "5px" }}>12</li>
            <li style={{ width: "25px", height: "25px", padding: "5px" }}><img style={{ width: "25px", height: "25px" }} src="../Lab_05/right-arrow (1).png" alt="" /></li>
          </ul>
        </div>
      </main>
    </div>
  );
}
