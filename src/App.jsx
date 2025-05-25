
import "./App.css";
import router from "./routes/routes.routes";
import { RouterProvider } from "react-router-dom";

function App() {
 
  return (
    <>
     <RouterProvider router={router} />
     
    </>
  );
}

export default App;






// import { useTranslation } from "react-i18next";
// import "./i18n";


//  const { t, i18n } = useTranslation();
//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     document.dir = lng === "ar" ? "rtl" : "ltr";
//   };


//  <div>
//         <button onClick={() => changeLanguage("en")}>English</button>
//         <button onClick={() => changeLanguage("ar")}>العربية</button>

//         <h1>{t("welcome")}</h1>
//       </div>