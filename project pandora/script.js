const passwordInput = document.getElementById("password");
const unlockButton = document.getElementById("unlockButton");
const errorMessage = document.getElementById("errorMessage");


// ใส่ Discord Webhook URL ของคุณตรงนี้
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1544370926811095121/pqwOWPv1PeEMscx_ll5-2MOV8SItoHQBmG8dZ1psYtoCbw6E8Em2y-jye1WEfcPfHIPj";


// Function สำหรับส่งข้อความไป Discord
async function sendDiscordNotification(message) {

    try {

        await fetch(DISCORD_WEBHOOK_URL, {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                username: "PROJECT PANDORA",
                content: message
            })
        });

    } catch (error) {

        console.error("ไม่สามารถส่ง Notification ได้", error);

    }

}


// เมื่อกดปุ่มเปิดดู
unlockButton.addEventListener("click", async function () {

    const password = passwordInput.value;


    if (password === "762549") {

        errorMessage.textContent = "";

        // Notification ครั้งที่ 1
        await sendDiscordNotification(
            "🔓 **PANDORA HAS BEEN UNLOCKED**\n\nมีคนกรอกรหัสถูกต้องแล้ว...\n\n💙 The story has begun."
        );


        // ไปยังหน้าถัดไป
        window.location.href = "secret.html";


    } else {

        errorMessage.textContent = "วันเกิดไม่ถูกนะ ลองอีกครั้ง 💗";

    }

});