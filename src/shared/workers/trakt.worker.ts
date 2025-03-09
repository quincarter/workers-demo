import MovieInfoWorker from './movie-info.worker?worker&inline';

const MOVIES_BASE = `https://api.trakt.tv/movies`;

const spawnWorkers = async (key: string, data: any) => {
  let mappedData: any[] = [];

  data.map((item: any, index: number) => {
    const workerSpawned = new MovieInfoWorker();
    workerSpawned.onmessage = (message: MessageEvent) => {
      console.log('message back from worker spawned', message.data);

      mappedData.push(message.data);

      if (data.length === mappedData.length) {
        postMessage({
          [key]: [...mappedData],
        });
      } else {
        const emptyArrayOfObjects = new Array(
          data.length - mappedData.length,
        ).fill({});
        postMessage({
          [key]: [...mappedData, ...emptyArrayOfObjects],
        });
      }
      workerSpawned.terminate(); // cleans up worker process
    };
    workerSpawned.postMessage(item.movie.ids.trakt);
  });
};

const trending = async () => {
  const response = await fetch(`${MOVIES_BASE}/trending?limit=20`, {
    headers: {
      'Content-Type': 'application/json',
      'trakt-api-version': '2',
      'trakt-api-key':
        'd7c41473f29238207d48782764322e652086cd2bde10d7bc3e89454acb189c3f',
    },
  });

  const data = await response.json();

  postMessage({ trendingCount: data.length });

  spawnWorkers('trending', data);
};

const mostPlayed = async () => {
  const response = await fetch(`${MOVIES_BASE}/played/period?limit=100`, {
    headers: {
      'Content-Type': 'application/json',
      'trakt-api-version': '2',
      'trakt-api-key':
        'd7c41473f29238207d48782764322e652086cd2bde10d7bc3e89454acb189c3f',
    },
  });

  const data = await response.json();

  postMessage({ moviesCount: data.length });

  spawnWorkers('movies', data);
};

onmessage = async (data: MessageEvent) => {
  console.log('data in worker', data);
  trending();
  mostPlayed();
};
