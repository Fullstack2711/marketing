import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, contact, message } = await request.json();
    
    const botToken = process.env.BOT_TOKEN;
    const chatId = process.env.CHAT_ID;

    console.log("BOT_TOKEN:", botToken ? "Topildi" : "Topilmadi");
    console.log("CHAT_ID:", chatId ? "Topildi" : "Topilmadi");
    
    if (!botToken || !chatId) {
      console.error('Bot token yoki chat ID .env faylida topilmadi.');
      return NextResponse.json({ success: false, message: 'Serverda konfiguratsiya xatosi. Administratorga murojaat qiling.' }, { status: 500 });
    }
    
    const text = `🔔 Yangi buyurtma!\n\n👤 Ism: ${name}\n📞 Aloqa: ${contact}\n💬 Xabar: ${message}`;
    
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const telegramResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
      })
    });

    const responseData = await telegramResponse.json();
    
    if (telegramResponse.ok) {
      return NextResponse.json({ success: true, message: 'Xabar muvaffaqiyatli yuborildi!' });
    } else {
      console.error('Telegram API dan xato javob:', responseData);
      return NextResponse.json({ success: false, message: `Telegram API xatosi: ${responseData.description}` }, { status: telegramResponse.status });
    }
  } catch (error) {
    console.error('API route da kutilmagan xato:', error);
    return NextResponse.json({ success: false, message: 'Serverda ichki xatolik.' }, { status: 500 });
  }
}
