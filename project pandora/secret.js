const revealButton = document.getElementById("revealButton");
const messageCover = document.getElementById("messageCover");


// ใส่ Webhook URL เดียวกับ script.js
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1544370926811095121/pqwOWPv1PeEMscx_ll5-2MOV8SItoHQBmG8dZ1psYtoCbw6E8Em2y-jye1WEfcPfHIPj";


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

        console.error(
            "ไม่สามารถส่ง Notification ได้",
            error
        );

    }

}


revealButton.addEventListener("click", async function () {

    revealButton.disabled = true;

    revealButton.textContent = "กำลังเปิดข้อความ...";

    await sendDiscordNotification(

        "💍 **THE MESSAGE HAS BEEN REVEALED**\n\nเธอกดเปิดข้อความแล้ว...\n\n💗 This is the moment."

    );

    setTimeout(function () {

        messageCover.classList.add("hidden");

    }, 500);

});