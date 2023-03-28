export const sendFeedBack = async (body) => {
  const response = await fetch(`${process.env.API_URL}/api/ozzo/sendFeedBack`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return response;
};
