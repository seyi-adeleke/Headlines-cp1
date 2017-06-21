let mockDelay;
let mockError;
let mockResponse = {
  status() {
    return 200;
  },
  ok: true,
  get: jest.genMockFunction(),
  toError: jest.genMockFunction(),
};

const Request = {
  get: jest.genMockFunction().mockReturnThis(),
  set: jest.genMockFunction().mockReturnThis(),
  end: jest.genMockFunction().mockImplementation((callback) => {
    if (mockDelay) {
      this.delayTimer = setTimeout(callback, 0, mockError, mockResponse);
      return;
    }
    callback(mockError, mockResponse);
  }),
  __setMockDelay(boolValue) {
    mockDelay = boolValue;
  },
  __setMockResponse(mockRes) {
    mockResponse = mockRes;
  },
  __setMockError(mockErr) {
    mockError = mockErr;
  },
  __setMockResponseBody(body) {
    mockResponse.body = body;
  },
};

export default Request;
