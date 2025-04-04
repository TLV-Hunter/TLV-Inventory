import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      systemTitle: "Inventory Management System",
      systemDescription: "Manage your inventory efficiently with our advanced system.",
      feature1Title: "Real-Time Tracking",
      feature1Description: "Track your inventory in real-time with up-to-date data.",
      feature2Title: "Secure Data",
      feature2Description: "Keep your inventory data safe with top-notch security.",
      feature3Title: "User-Friendly Interface",
      feature3Description: "Navigate easily with our intuitive design.",
      feature4Title: "Fast Performance",
      feature4Description: "Experience quick and reliable system performance.",
      welcomeBack: "Welcome Back",
      loginToManage: "Login to manage your inventory",
      usernameOrEmail: "Username or Email",
      enterUsernameOrEmail: "Enter username or email",
      password: "Password",
      enterPassword: "Enter password",
      rememberMe: "Remember me",
      forgotPassword: "Forgot password?",
      login: "Login",
      loginSuccess: "Login successful!",
      missingBoth: "Please enter both Username and Password.",
      missingUsername: "Please enter Username.",
      missingPassword: "Please enter Password.",
      invalidBoth: "Invalid Username and Password.",
      invalidUsername: "Invalid Username.",
      invalidPassword: "Invalid Password.",
      languageCode: "en",
    },
  },
  th: {
    translation: {
      systemTitle: "ระบบจัดการคลังสินค้า",
      systemDescription: "จัดการคลังสินค้าของคุณอย่างมีประสิทธิภาพด้วยระบบขั้นสูงของเรา",
      feature1Title: "การติดตามแบบเรียลไทม์",
      feature1Description: "ติดตามคลังสินค้าของคุณแบบเรียลไทม์ด้วยข้อมูลที่อัปเดต",
      feature2Title: "ข้อมูลปลอดภัย",
      feature2Description: "รักษาข้อมูลคลังสินค้าของคุณให้ปลอดภัยด้วยการรักษาความปลอดภัยชั้นนำ",
      feature3Title: "อินเทอร์เฟซที่ใช้งานง่าย",
      feature3Description: "ใช้งานง่ายด้วยการออกแบบที่เข้าใจง่าย",
      feature4Title: "ประสิทธิภาพรวดเร็ว",
      feature4Description: "สัมผัสประสบการณ์ระบบที่รวดเร็วและเชื่อถือได้",
      welcomeBack: "ยินดีต้อนรับกลับ",
      loginToManage: "เข้าสู่ระบบเพื่อจัดการคลังสินค้าของคุณ",
      usernameOrEmail: "ชื่อผู้ใช้หรืออีเมล",
      enterUsernameOrEmail: "กรอกชื่อผู้ใช้หรืออีเมล",
      password: "รหัสผ่าน",
      enterPassword: "กรอกรหัสผ่าน",
      rememberMe: "จดจำฉัน",
      forgotPassword: "ลืมรหัสผ่าน?",
      login: "เข้าสู่ระบบ",
      loginSuccess: "เข้าสู่ระบบสำเร็จ!",
      missingBoth: "กรุณากรอกทั้งชื่อผู้ใช้และรหัสผ่าน",
      missingUsername: "กรุณากรอกชื่อผู้ใช้",
      missingPassword: "กรุณากรอกรหัสผ่าน",
      invalidBoth: "ชื่อผู้ใช้และรหัสผ่านไม่ถูกต้อง",
      invalidUsername: "ชื่อผู้ใช้ไม่ถูกต้อง",
      invalidPassword: "รหัสผ่านไม่ถูกต้อง",
      languageCode: "th",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;