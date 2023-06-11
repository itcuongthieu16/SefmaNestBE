import { v2 } from 'cloudinary';
import { CLOUDINARY } from './constants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (): object => {
    return v2.config({
      cloud_name: 'dvhm6kurw',
      api_key: '936882153142567',
      api_secret: 'hE4H6pgZilKOV5omwDSWvPMd3Js',
    });
  },
};
