
import guitar from "../Assets/ACADEMY/guitar.jpg"
import ukulele from "../Assets/ACADEMY/ukulele.jpg"
import piano from "../Assets/ACADEMY/piano.jpg"
import mhuur from "../Assets/ACADEMY/mhuur.jpg"
import hiil from "../Assets/ACADEMY/hiil.jpg"
import drum from "../Assets/ACADEMY/drum.jpg"
import ytga from "../Assets/ACADEMY/ytga.jpg"
import sax from "../Assets/ACADEMY/sax.jpg"
import vocal from "../Assets/ACADEMY/vocal.jpg"

const CoursesLocale =[
    {
        title:"Сургалтууд",
        programmes : "Судлах хичээлүүд",
        pricing : "Сарын Төлбөр",
        price : {
            ind_title : "Ганцаарчилсан",
            ind : "195.000",
            group_title : "Групп",
            group : "110.000",
        },
        beginner_title : "Анхан шат",
        intermediate_title : "Дунд шат",
        advanced_title : "Ахисан шат",
        courses : [
            {
                title : 'Гитар',
                text : "Гитар сургалт",
                price : {
                    ind_title : "Ганцаарчилсан",
                    ind : "195.000",
                    group_title : "Групп",
                    group : "110.000",
                },
                img : `${guitar.src}`,
                beginner : [
                    "Аккорд",
                    "Таталтын техник",
                    "Цохилтын техник",
                    "Tab/Нот уншлага",
                    "2-5 энгийн зохиол",
                ],
                intermediate : [
                    "Хөгжмийн суурь онол",
                    "Аккордны Задаргаа",
                    "Сонсгол",
                    "Сэтгэмжээр тоглох ур чадвар",
                    "2-5 бүтэн зохиол",
                ],
                advanced :[
                    "Ахисан Төвшний Хөгжмийн Онол",
                    "Аккордны Бүтэц",
                    "Ахисан Төвшний Сонсгол",
                    "Ая зохиох",
                    "2-5 ахисан төвшний зохиол",
                ]
            },
            {
                title : 'Төгөлдөр хуур',
                text : "Төгөлдөр хуур сургалт",
                img : `${piano.src}`,
                price : {
                    ind_title : "Ганцаарчилсан",
                    ind : "195.000",
                },
                beginner : [
                ],
                intermediate : [
                ],
                advanced :[
                ]
            },
            {
                title : 'Үкүлэлэ',
                text : "Үкүлэлэ сургалт",
                img :`${ukulele.src}`,
                price : {
                    ind_title : "Ганцаарчилсан",
                    ind : "195.000",
                    group_title : "Групп",
                    group : "110.000",
                },
                beginner : [
                ],
                intermediate : [
                ],
                advanced :[
                ]
            },
            {
                title : 'Морин хуур',
                text : "Морин хуур сургалт",
                img : `${mhuur.src}`,
                price : {
                    ind_title : "Ганцаарчилсан",
                    ind : "195.000",
                },
                beginner : [
                ],
                intermediate : [
                ],
                advanced :[
                ]
            },
             {
                title : 'Хийл',
                text : "Хийл сургалт",
                img : `${hiil.src}`, 
                price : {
                    ind_title : "Ганцаарчилсан",
                    ind : "195.000",
                },
                beginner : [
                ],
                intermediate : [
                ],
                advanced :[
                ]
            },
            {
                title : 'Бөмбөр',
                text : "Бөмбөр сургалт",
                img : `${drum.src}`,
                price : {
                    ind_title : "Ганцаарчилсан",
                    ind : "195.000",
                },
                beginner : [
                ],
                intermediate : [
                ],
                advanced :[
                ]
            },
            {
                title : 'Ятга',
                text : "Ятга сургалт",
                img :`${ytga.src}`,
                price : {
                    ind_title : "Ганцаарчилсан",
                    ind : "195.000",
                },
                beginner : [
                ],
                intermediate : [
                ],
                advanced :[
                ]
            },
            {
                title : 'Саксафон',
                text : "Саксафон сургалт",
                img : `${sax.src}`,
                price : {
                    ind_title : "Ганцаарчилсан",
                    ind : "195.000",
                },
                beginner : [
                ],
                intermediate : [
                ],
                advanced :[
                ]
            },
            {
                title : 'Дуулаач',
                text : "Дуулаачийн сургалт",
                img : `${vocal.src}`,
                price : {
                    ind_title : "Ганцаарчилсан",
                    ind : "250.000",
                },
                beginner : [
                ],
                intermediate : [
                ],
                advanced :[
                ]
            }
        ], 
    },
    {
        title : "Courses",
        programmes : "Programmes",
        pricing : "Monthly Pricing",
        beginner_title : "Beginner",
        intermediate_title : "Intermediate",
        advanced_title : "Advanced",
        courses : [
            {
                title : 'Guitar',
                text : "Guitar Course",
                img : `${guitar.src}`,
                price : {
                    ind_title : "Individual class",
                    ind : "195.000",
                    group_title : "Group class",
                    group : "110.000",
                },
                beginner : [
                    "Chords",
                    "Arpeggio techniques",
                    "Strumming techniques",
                    "Tab/Note Reading",
                    "2-5 simple compositions",
                ],
                intermediate : [
                    "Basic Music Theory",
                    "Alternate Chords",
                    "Listening",
                    "Impovisation skills",
                    "2-5 full compositions",
                ],
                advanced :[
                    "Adanced Music Theory",
                    "Chord Structures",
                    "Advanced Listening",
                    "Composing music",
                    "2-5 advanced compositions",
                ]
            },
            {
                title : 'Piano',
                text : "Piano Course",
                img : `${piano.src}`,
                price : {
                    ind_title : "Individual class",
                    ind : "195.000",
                },
                beginner : [
                ],
                intermediate : [
                ],
                advanced :[
                ]
            },
            {
                title : 'Ukulele',
                text : "Ukulele Course",
                img :`${ukulele.src}`,
                price : {
                    ind_title : "Individual class",
                    ind : "195.000",
                    group_title : "Group class",
                    group : "110.000",
                },
                beginner : [
                ],
                intermediate : [
                ],
                advanced :[
                ]
            },
            {
                title : 'Morin Khuur',
                text : "Morin Khuur Course",
                img : `${mhuur.src}`,
                price : {
                    ind_title : "Individual class",
                    ind : "195.000",
                },
                beginner : [
                ],
                intermediate : [
                ],
                advanced :[
                ]
            },
             {
                title : 'Violin',
                text : "Violin Course",
                img : `${hiil.src}`,
                price : {
                    ind_title : "Individual class",
                    ind : "195.000",
                },
                beginner : [
                ],
                intermediate : [
                ],
                advanced :[
                ]
            },
            {
                title : 'Drum',
                text : "Drum Course",
                img : `${drum.src}`,
                price : {
                    ind_title : "Individual class",
                    ind : "195.000",
                },
                beginner : [
                ],
                intermediate : [
                ],
                advanced :[
                ]
            },
            {
                title : 'Guzheng',
                text : "Guzheng Course",
                img :`${ytga.src}`,
                price : {
                    ind_title : "Individual class",
                    ind : "195.000",
                },
                beginner : [
                ],
                intermediate : [
                ],
                advanced :[
                ]
            },
            {
                title : 'Saxophone',
                text : "Saxophone course",
                img : `${sax.src}`,
                price : {
                    ind_title : "Individual class",
                    ind : "195.000",
                },
                beginner : [
                ],
                intermediate : [
                ],
                advanced :[
                ]
            },
            {
                title : 'Vocal',
                text : "Vocal Course",
                img : `${vocal.src}`,
                price : {
                    ind_title : "Individual class",
                    ind : "250.000",
                },
                beginner : [
                ],
                intermediate : [
                ],
                advanced :[
                ]
            }
        ], 
    },
    {
        title : "培訓班",
        programmes : "程式",
        pricing : "每月定价",
        beginner_title : "初学者",
        intermediate_title : "中间的",
        advanced_title : "先进的",
        courses : [
            {
                title : '吉他',
                text : "吉他課程",
                img : `${guitar.src}`,
                price : {
                    ind_title : "个人班",
                    ind : "195.000",
                    group_title : "团体课",
                    group : "110.000",
                },
                beginner : [
                ],
                intermediate : [
                ],
                advanced :[
                ]
            },
            {
                title : '钢琴',
                text : "鋼琴課程",
                img : `${piano.src}`,
                price : {
                    ind_title : "个人班",
                    ind : "195.000",
                },
                beginner : [
                ],
                intermediate : [
                ],
                advanced :[
                ]
            },
            {
                title : '尤克里里',
                text : "尤克里裡課程",
                img :`${ukulele.src}`,
                price : {
                    ind_title : "个人班",
                    ind : "195.000",
                    group_title : "团体课",
                    group : "110.000",
                },
                beginner : [
                ],
                intermediate : [
                ],
                advanced :[
                ]
            },
            {
                title : '莫林胡尔',
                text : "馬鈴薯訓練",
                img : `${mhuur.src}`,
                price : {
                    ind_title : "个人班",
                    ind : "195.000",
                },
                beginner : [
                ],
                
                intermediate : [
                ],
                
                advanced :[
                ]
            },
             {
                title : '小提琴',
                text : "小提琴訓練",
                img : `${hiil.src}`,
                price : {
                    ind_title : "个人班",
                    ind : "195.000",
                },
                beginner : [
                ],
                intermediate : [
                ],
                advanced :[
                ]
            },
            {
                title : '鼓',
                text : "鼓課程 ",
                img : `${drum.src}`,
                price : {
                    ind_title : "个人班",
                    ind : "195.000",
                },
                beginner : [
                ],
                intermediate : [
                ],
                
                advanced :[
                ]
            },
            {
                title : '记住',
                text : "豎琴訓練",
                img :`${ytga.src}`,
                price : {
                    ind_title : "个人班",
                    ind : "195.000",
                },
                beginner : [
                ],
                
                intermediate : [
                ],
                
                advanced :[
                ]
            },
            {
                title : '萨克斯管',
                text : "薩克斯管訓練",
                img : `${sax.src}`,
                price : {
                    ind_title : "个人班",
                    ind : "195.000",
                },
                beginner : [
                ],
                intermediate : [
                ],
                advanced :[
                ]
            },
            {
                title : '声乐',
                text : "聲樂課程",
                img : `${vocal.src}`,
                price : {
                    ind_title : "个人班",
                    ind : "250.000",
                },
                beginner : [
                ],
                intermediate : [
                ],
                advanced :[
                ]
            }
        ], 
    }
]

module.exports = {
    CoursesLocale,
}