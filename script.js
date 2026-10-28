const foods = [
    {
        name: "ข้าวมันไก่",
        desc: "ข้าวมันหอมนุ่ม เสิร์ฟพร้อมไก่ต้มเนื้อฉ่ำ น้ำจิ้มเต้าเจี้ยวรสเด็ด",
        price: "50 - 60 บาท",
        img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=500"
    },
    {
        name: "ผัดไทยกุ้งสด",
        desc: "เส้นจันท์เหนียวนุ่ม ผัดซอสผัดไทยรสกลมกล่อม พร้อมกุ้งสดตัวโต",
        price: "70 - 90 บาท",
        img: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=500"
    },
    {
        name: "ข้าวผัดกะเพราหมูกรอบ",
        desc: "หมูกรอบผัดใบกะเพราแท้ รสชาติเผ็ดร้อนจัดจ้าน หอมกลิ่นกระทะ",
        price: "60 - 70 บาท",
        img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500"
    },
    {
        name: "ก๋วยเตี๋ยวเรือน้ำตก",
        desc: "น้ำซุปเข้มข้น หอมเครื่องเทศ เสิร์ฟพร้อมตับ หมูชิ้น และลูกชิ้น",
        price: "45 - 60 บาท",
        img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500"
    },
    {
        name: "ส้มตำไทยไข่เค็ม",
        desc: "มะละกอกรอบๆ ปรุงรสเปรี้ยวหวานเผ็ดกำลังดี ท็อปด้วยไข่เค็มมันๆ",
        price: "50 - 65 บาท",
        img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500"
    }
];

function randomFood() {
    const randomIndex = Math.floor(Math.random() * foods.length);
    const selected = foods[randomIndex];

    document.getElementById("food-img").src = selected.img;
    document.getElementById("food-name").textContent = selected.name;
    document.getElementById("food-desc").textContent = selected.desc;
    document.getElementById("food-price").textContent = selected.price;
}