import Core from '../core/core';

class Twitter extends Core {
  constructor(config = {}, options = {}) {
    super(options);
    this.name = 'twitter';
    this.checkValidConfig(
      ['consumerKey', 'consumerSecret', 'accessToken', 'accessTokenSecret'],
      config
    );
    this.oauth = {
      consumer_key: config.consumerKey,
      consumer_secret: config.consumerSecret,
      token: config.accessToken,
      token_secret: config.accessTokenSecret,
    };
    this.url = 'https://api.twitter.com';
    this.version = options.version || '1.1';
    this.baseApiUrl = `${this.url}/${this.version}`;
  }

  get(url, options = {}) {
    return this.request({
      method: 'GET',
      json: true,
      uri: `${this.baseApiUrl}/${url}.json`,
      oauth: this.oauth,
      qs: options,
    });
  }

  post(url, options = {}) {
    return this.request({
      method: 'POST',
      json: true,
      uri: `${this.baseApiUrl}/${url}.json`,
      oauth: this.oauth,
      form: options,
    });
  }

  delete(url, options = {}) {
    return this.request({
      method: 'DELETE',
      json: true,
      uri: `${this.baseApiUrl}/${url}.json`,
      oauth: this.oauth,
      qs: options,
    });
  }
}

export default Twitter;
