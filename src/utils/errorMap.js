const errorMap = {
    NOT_FOUND: 404,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    CONFLICT: 409,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
    errorMap,
    mapError,
};
