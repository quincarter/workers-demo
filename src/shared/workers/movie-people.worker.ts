import GetPersonWorker from './get-person.worker?worker&inline';

const getMoviePeople = async (id: string | number) => {
  const response = await fetch(
    `https://api.trakt.tv/movies/${id}/people?extended=cast,crew`,
    {
      headers: {
        'Content-Type': 'application/json',
        'trakt-api-version': '2',
        'trakt-api-key':
          'd7c41473f29238207d48782764322e652086cd2bde10d7bc3e89454acb189c3f',
      },
    },
  );

  let msg = await response.json();

  let mappedCastWithImages: any[] = [];

  msg.cast.map((castMember: any) => {
    const getPersonWorker = new GetPersonWorker();
    getPersonWorker.onmessage = (message: MessageEvent) => {
      mappedCastWithImages.push({ ...message.data, ...castMember });
    
      if (msg.cast.length === mappedCastWithImages.length) {
        msg = { ...msg, cast: [...mappedCastWithImages], id };
        postMessage(msg);
      }
      getPersonWorker.terminate();
    };

    getPersonWorker.postMessage(castMember.person.ids.trakt);
  });
};

onmessage = (message: MessageEvent) => {
  getMoviePeople(message.data);
};
