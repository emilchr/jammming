let accessToken;

const Spotify = {
    getAccessToken() {
        if (this.accessToken) {
            return accessToken;
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    }

}



export default Spotify;