exports.unique = function (arr) {
    var hash = {};
    for (var i = 0, item; (item = arr[i]) != null; i++) {
        if (hash[item]) {
            hash[item]++;
        } else {
            hash[item] = 1;
        }
    }
    return hash;
};
exports.map2arr = function (map) {
    var arr = [];
    for (var key in map) {
        arr.push([key, map[key]]);
    }
    return arr.sort(function (x, y) {
        return y[1] - x[1];
    });
};
