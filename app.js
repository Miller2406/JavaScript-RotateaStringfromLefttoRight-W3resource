const animationStr = function (id) { // ส่วนนี้เป็นฟังก์ชั่นสำหรับ Run อักษรหมุนเวียน
    const target = document.getElementById(id);// เลือก id มาเป็นเป้าหมายเรา
    const textNode = target.childNodes[0]; // ใช้ childNodes ทำให้เหลือแต่ contecnt เป็น object
    let text = textNode.data; // ปรับจาก object ให้เป็น str ด้วย .data

    setInterval(function () { // ตั้งค่าเวลาและฟังชั่นการทำงาน
        text = text[text.length - 1] + text.substring(0, text.length - 1) // นำตัวหลังสุดมาต่อหน้า + ส่วนที่เหลือที่ขาดตัวหลังสุด
        textNode.data = text; // ส่ง text ที่แก้ไขกลับไปวนแทนที่ text เดิม แล้วทำแบบนี้ไปเรื่อยๆ ไม่รู้ทำไมเหมือนกัน 
    }, 100); // 100 milisec

}


window.addEventListener('load', (event) => { // ตั้งการรับรู้ window โหลด แล้วให้ trigger ฟังก์ชั่น
    animationStr('target') // อันนี้ก็ใส่ไป id เป็นจุดทีต้องการ
})

