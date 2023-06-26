
const SongsManager = function() {
    const _songs = {
    }
    const _prefix = 'https://www.youtube.com/watch?v='
    
    const addSong = function(name, url) {
        _songs[name] = url.split('=')[1]
    }
    
    const getSong = function(name) {
        return _prefix + _songs[name]
    }
}
