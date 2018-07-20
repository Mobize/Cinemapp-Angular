interface ResponseSuccess<T> {
  success: true;
  data?: T;
}

interface ResponseError {
  success: false;
  error: string;
}

export type Response<T = any> = ResponseSuccess<T> | ResponseError;
