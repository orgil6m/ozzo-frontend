import { mn } from '../locales/FeaturedNews'
import { en } from '../locales/FeaturedNews';
import { cn } from '../locales/FeaturedNews';

import Cover1 from '../Assets/Cover1.jpg'
import Cover2 from '../Assets/Cover2.jpg'
import Cover3 from '../Assets/Cover3.jpg'

import Cover12 from '../Assets/Cover22.png'
import Cover22 from '../Assets/Cover22.png'
import Cover32 from '../Assets/Cover22.png'

const newsData = [
    {
        id : "1",
        cover:`${Cover1.src}`,
        covers: `${Cover12.src}`,
        date: ' 2022-04-01',
        title :'DaavkaTunes X MongolNFT',
        text : 'OZZO болон MongolNFT хамтран DaavkaTunes NFT-г танилцуулахад бэлэн боллоо.',
    },
    {
        id: "2",
        cover:`${Cover2.src}`,
        covers: `${Cover22.src}`,
        title : 'DaavkaTunes Movie Night',
        date: ' 2022-03-01',
        text :'Гитар болон Үкүлэлэ сонирхогчдын DaavkaTunes клуб болон DGL хөгжмийн сургалтын төвийн суралцагч...',  
    },
    {
        id: "3",
        cover:`${Cover3.src}`,
        covers: `${Cover32.src}`,
        date: ' 2021-10-10',
        title : 'DT Acoustic Concert',
        text : `Монголын гитар сонирхогчдын дунд 2017 оноос жил бүр уламжлал болон зохиогдож ирсэн DT Acoustic Concert...`,
    },
];

module.exports = {
  newsData,
}
 