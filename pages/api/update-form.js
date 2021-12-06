import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  //TODO save form updates

  const formData = JSON.parse(req.body);

  await prisma.formEmbed.update({
    where: {
      id: formData.id
    },
    data: {
      placeholder: formData.placeholder,
      fontColor: formData.fontColor,
      fontSizePx: formData.fontSizePx
    }
  })

  res.status(200).json({ success: true });
}
