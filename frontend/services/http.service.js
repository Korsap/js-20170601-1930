'use strict';

import { API_URL } from '../../config';

export default class HTTPService {
  static sendRequest(url, successCallback, method = 'GET') {
    let xhr = new XMLHttpRequest();

    xhr.open(method, API_URL + url, true);
    xhr.send();

    xhr.onerror = () => {
      alert(xhr.status);
    };

    xhr.onload = () => {
      if (xhr.status !== 200) {
        console.error( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found

        return;
      }

      let data = JSON.parse(xhr.responseText);

      successCallback(data);
    };
  }
}