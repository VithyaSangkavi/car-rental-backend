const bookingEmailTemplate = (firstName, lastName, email, phone, country, street, city, postcode, carName, bookingDate, returnDate, duration, subtotal, total) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f9f9f9;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                border-radius: 10px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }
            .header {
                background-color: #ffbf00;
                color: #ffffff;
                text-align: center;
                padding: 20px;
                font-size: 24px;
                font-weight: bold;
            }
            .content {
                padding: 20px;
                color: #333;
            }
            .info-box {
                background-color: #f4f4f4;
                padding: 15px;
                border-left: 5px solid #ffbf00;
                margin-top: 10px;
                border-radius: 5px;
            }
            .info-box p {
                margin: 5px 0;
            }
            .highlight {
                font-size: 18px;
                font-weight: bold;
                color: #ffbf00;
            }
            .footer {
                background-color: #333;
                color: #fff;
                text-align: center;
                padding: 15px;
                font-size: 14px;
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
            }
            .footer a {
                color: #ffbf00;
                text-decoration: none;
            }
        </style>
    </head>
    <body>

        <div class="container">
            <div class="header">
                🚗 Car Booking Details
            </div>
            <div class="content">

                <h3 class="highlight">📌 Booking User Details</h3>
                <div class="info-box">
                    <p><strong>👤 Name:</strong> ${firstName} ${lastName}</p>
                    <p><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #ffbf00;">${email}</a></p>
                    <p><strong>📞 Phone:</strong> ${phone}</p>
                    <p><strong>🌍 Country:</strong> ${country}</p>
                    <p><strong>🏠 Address:</strong> ${street}, ${city}, ${postcode}</p>
                </div>

                <h3 class="highlight">🚘 Booking Details</h3>
                <div class="info-box">
                    <p><strong>Car:</strong> ${carName}</p>
                    <p><strong>📅 From:</strong> ${bookingDate}</p>
                    <p><strong>📅 To:</strong> ${returnDate}</p>
                    <p><strong>⏳ Duration:</strong> ${duration}</p>
                    <p><strong>💰 Subtotal:</strong> CHF ${subtotal}</p>
                    <p><strong>💳 Total:</strong> CHF ${total}</p>
                </div>
            </div>

            <div class="footer">
                &copy; 2024 Dream Rent | <a href="https://dream-rent.ch">Visit Website</a>
            </div>
        </div>

    </body>
    </html>
    `
}

export default bookingEmailTemplate;