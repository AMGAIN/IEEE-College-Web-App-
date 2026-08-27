import { Injectable } from '@nestjs/common';

@Injectable()
export class AboutService {
    getAbout(){
        return {
            'msg': 'nothing to send for now'
        }
    }
}
