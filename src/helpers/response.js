 class Response {
  static errorResponse(res, msg, status) {
    return res.status(status).json({
      status,
      error: msg,
    });
  }

  static successResponse(res, status, msg, data) {
    return res.status(status).json({
      status,
      message: msg,
      data,
    });
  }
}

export default Response