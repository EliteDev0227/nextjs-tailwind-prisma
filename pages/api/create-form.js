import prisma from "../../lib/prisma";

export default async function handler(req, res) {

  // create form
  await prisma.formEmbed.create({
    data: {
      placeholder: 'you@example.com',
      fontColor: '000000',
      fontSizePx: 14
    }
  });

  res.status(200).json({ success: true });
}
