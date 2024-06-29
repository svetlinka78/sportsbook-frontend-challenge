const configuration = {
    configurations: [
      {
        origin: 'http://localhost:3000',
        config: {
          //client_id: 'interactive.public',
          client_id:'mvctest',
          //dredirect_uri: 'http://localhost:3000',
          redirect_uri: 'http://localhost:3000/authentication/callback',
          responnpse_type: 'code',
          post_logout_redirect_uri: 'http://localhost:3000/',
          //requested_scopes: 'openid profile email api offline_access',
          scope: 'openid profile email offline_access',
          //authority: "https://demo.duendesoftware.com",
          authority: "https://localhost:5001",
          //silent_redirect_uri: 'http://localhost:3000/authentication/silent_callback',
          automaticSilentRenew: true,
          loadUserInfo: true
        }
      },
      {
        origin: 'http://localhost:3000',
        config: {
          client_id: 'js',
          redirect_uri: 'http://localhost:3000/authentication/callback',
          response_type: 'code',
          post_logout_redirect_uri: 'http://localhost:3000/',
          scope: 'openid profile email api offline_access',
          authority: "https://localhost:5505",
          silent_redirect_uri: 'http://localhost:3000/authentication/silent_callback',
          automaticSilentRenew: true,
          loadUserInfo: true
        }
      }
    ]
  };  
  
  export default configuration;