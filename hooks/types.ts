export type UseFetchOptions<Response> = {
  method: RequestInit['method'];
  onError?: (message: string) => void;
  onSuccess?: (response: Response) => void;
  url: string;
};

export type UseFetchReturn<Data, Response> = [
  { error?: string; loading: boolean; response?: Response },
  (data: Data) => Promise<void>,
];
