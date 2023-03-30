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

export const getFeedBacks = async () => {
  const response = await fetch(
    `${process.env.API_URL}/api/ozzo/feedbacks/getFeedBacks`,
    {
      method: "POST",
      headers: {
        authorization: window.localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    }
  );
  if (response.status === 200) {
    const jsonData = await response.json();
    return jsonData.data;
  } else if (response.status === 401) {
    console.log("token expired");
  }
};

export const backgroundColors = [
  "#d64635",
  "#87CEFA",
  "#B19CD9",
  "#F79F79",
  "#9ACD32",
  "#FFB347",
  "#FFD1DC",
  "#00CED1",
  "#DDA0DD",
  "#AEC6CF",
  "#77DD77",
  "#FDFD96",
  "#FFA07A",
  "#F08080",
  "#FFA500",
  "#BA55D3",
  "#90EE90",
  "#F0E68C",
  "#FF69B4",
  "#ADD8E6",
  "#CD5C5C",
];
