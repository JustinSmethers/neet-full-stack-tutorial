import { Storage } from '@google-cloud/storage';
import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';


const storage = new Storage();

const rawVideoBucketName = "nc-yt-raw-videos-js1";
const processedVideoBucketName = "nc-yt-processed-videos-js1";

const localRawVideoPath = "./raw-videos";
const localProcessedVideoPath = "./processed-videos";

/** 
* Creates the local directories for raw and processed videos
*/
export function setupDirectories() {

}

/** 
* @param rawVideoName - The name of the file to convert from {@link localRawVideoPath}.
* @param processedVideoName - The name of the file to convert to {@link localProcessedVideoPath}.
* @returns A promise that resolves when the video has been converted.
*/
export function convertVideo(rawVideoName: string, processedVideoName: string) {

}