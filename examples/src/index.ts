// This file was generated by liblab | https://liblab.com/

import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.billing.getAccounts();

  console.log(data);
})();
