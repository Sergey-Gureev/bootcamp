const capitalizeFirst = function(string) {
    return string[0].toUpperCase() + string.slice(1)
}

const toSkewerCase = function(string) {
    return string.replace(' ', '-')
}