export interface ImageRequest {
  bucket: string;
  fileName: string;
}

export interface OffensiveImageResponse {
  isOffensive: boolean;
  bucket: string;
  originalFileName: string;
  newFileName: string;
}

export interface FaceDetectionResponse {
  containsFace: boolean;
  bucket: string;
  fileName: string;
}
