// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 * @return {Promise<void>}
 */
const handler = async (req, res) => {
  res.status(200).json({name: `John Doe`});
};

export default handler;
