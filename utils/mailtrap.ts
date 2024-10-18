let client: any;

export const initMailtrap = async () => {
  if (typeof window === "undefined") {
    const { MailtrapClient } = await import("mailtrap");
    client = new MailtrapClient({
      token: process.env.MAILTRAP_API_TOKEN!,
    });
  }
};

export const sendWelcomeEmail = async (toEmail: string, name: string) => {
  if (typeof window !== "undefined") {
    console.error("sendWelcomeEmail should only be called on the server side");
    return;
  }

  if (!client) {
    await initMailtrap();
  }

  const sender = { name: "Craft Content AI", email: "hello@demomailtrap.com" };

  await client.send({
    from: sender,
    to: [{ email: toEmail }],
    subject: "Welcome to Craft Content AI!",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f4f4f7; color: #333;">
        <table style="width: 100%; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
          <thead>
            <tr>
              <th style="text-align: center;">
                <img src="https://www.teamvariance.com/backend/images/blogs/cover-AIContentCreation.jpg" alt="Craft Content AI" style="max-width: 100%; height: auto;" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 20px 0; text-align: center;">
                <h1 style="color: #333;">Welcome to <span style="color: #4caf50;">Craft Content AI</span>, ${name}!</h1>
                <p style="font-size: 16px; color: #666;">
                  We're excited to have you on board! Start exploring our platform and unlock your content's full potential.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px 0;">
                <h2 style="font-size: 20px; color: #333;">Next Steps:</h2>
                <ul style="font-size: 16px; color: #666; line-height: 1.6;">
                  <li>Explore our platform features</li>
                  <li>Connect with our support team if needed</li>
                  <li>Start creating amazing content!</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px; text-align: center; border-top: 1px solid #eee;">
                <p style="font-size: 14px; color: #999;">
                  If you have any questions, feel free to <a href="mailto:support@craftcontent.ai" style="color: #4caf50;">contact us</a>.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  });
};
