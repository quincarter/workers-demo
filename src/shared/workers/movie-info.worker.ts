const getMovieSummary = async (id: string | number) => {
  const response = await fetch(
    `https://api.trakt.tv/movies/${id}?extended=full,images`,
    {
      headers: {
        'Content-Type': 'application/json',
        'trakt-api-version': '2',
        'trakt-api-key':
          'd7c41473f29238207d48782764322e652086cd2bde10d7bc3e89454acb189c3f',
      },
    },
  );

  postMessage(await response.json());
};

onmessage = (message: MessageEvent) => {
  getMovieSummary(message.data);
};
