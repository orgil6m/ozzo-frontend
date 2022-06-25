

const CoursesLocale =[
    {
        title:"Сургалтууд",
        programmes : "Судлах хичээлүүд",
        pricing : "Сарын Төлбөр",
        price : {
            individual : "Ганцаарчилсан",
            group : "Групп",
        },
        beginner_title : "Анхан шат",
        intermediate_title : "Дунд шат",
        advanced_title : "Ахисан шат",
        // courses : [
        //     {
        //         title : 'Гитар',
        //         text : "Гитар сургалт",
        //         price : {
        //             ind_title : "Ганцаарчилсан",
        //             ind : "195.000",
        //             group_title : "Групп",
        //             group : "110.000",
        //         },
        //         img : `${guitar.src}`,
        //         beginner : [
        //             "Аккорд",
        //             "Таталтын техник",
        //             "Цохилтын техник",
        //             "Tab/Нот уншлага",
        //             "2-5 энгийн зохиол",
        //         ],
        //         intermediate : [
        //             "Хөгжмийн суурь онол",
        //             "Аккордны Задаргаа",
        //             "Сонсгол",
        //             "Сэтгэмжээр тоглох ур чадвар",
        //             "2-5 бүтэн зохиол",
        //         ],
        //         advanced :[
        //             "Ахисан Түвшний Хөгжмийн Онол",
        //             "Аккордны Бүтэц",
        //             "Ахисан Түвшний Сонсгол",
        //             "Уран сэтгэмжээр хөгжимдөх арга барил",
        //             "2-5 ахисан төвшний зохиол",
        //         ]
        //     },
        //     {
        //         title : 'Төгөлдөр хуур',
        //         text : "Төгөлдөр хуур сургалт",
        //         img : `${piano.src}`,
        //         price : {
        //             ind_title : "Ганцаарчилсан",
        //             ind : "195.000",
        //         },
        //         beginner : [
        //             "Онолын суурь хичээл",
        //             "Баруун, зүүн гарын барил",
        //             "Нот уншлага",
        //             "Жижиг аяз 3-5",
        //             "Өргөн хэрэглэгддэг хэмнэлүүд орсон аяз",
        //         ],
        //         intermediate : [
        //             "Дунд шатны хөгжмийн онол",
        //             "Хөгжмийн Нюанс",
        //             "Педальтай ажиллах",
        //             "2-5 дунд шатны зохиол",
        //             "Хамсран хөгжимдөх ур чадвар",
        //         ],
        //         advanced :[
        //             "Ахисан түвшний онолын хичээл",
        //             "Бие дааж зохиолтой ажиллах чадвар",
        //             "Хамсран хөгжимдөх ур чадвар",
        //             "2-3 Мэргэжлийн хөгжмийн зохиол",
        //             "Уран сэтгэмжээр хөгжимдөх арга барил",
        //         ]
        //     },
        //     {
        //         title : 'Үкүлэлэ',
        //         text : "Үкүлэлэ сургалт",
        //         img :`${ukulele.src}`,
        //         price : {
        //             ind_title : "Ганцаарчилсан",
        //             ind : "195.000",
        //             group_title : "Групп",
        //             group : "110.000",
        //         },
        //         beginner : [
        //         ],
        //         intermediate : [
        //         ],
        //         advanced :[
        //         ]
        //     },
        //     {
        //         title : 'Морин хуур',
        //         text : "Морин хуур сургалт",
        //         img : `${mhuur.src}`,
        //         price : {
        //             ind_title : "Ганцаарчилсан",
        //             ind : "195.000",
        //         },
        //         beginner : [
        //         ],
        //         intermediate : [
        //         ],
        //         advanced :[
        //         ]
        //     },
        //     {
        //         title : 'Хийл',
        //         text : "Хийл сургалт",
        //         img : `${hiil.src}`, 
        //         price : {
        //             ind_title : "Ганцаарчилсан",
        //             ind : "195.000",
        //         },
        //         beginner : [
        //         ],
        //         intermediate : [
        //         ],
        //         advanced :[
        //         ]
        //     },
        //     {
        //         title : 'Бөмбөр',
        //         text : "Бөмбөр сургалт",
        //         img : `${drum.src}`,
        //         price : {
        //             ind_title : "Ганцаарчилсан",
        //             ind : "195.000",
        //         },
        //         beginner : [
        //         ],
        //         intermediate : [
        //         ],
        //         advanced :[
        //         ]
        //     },
        //     {
        //         title : 'Ятга',
        //         text : "Ятга сургалт",
        //         img :`${ytga.src}`,
        //         price : {
        //             ind_title : "Ганцаарчилсан",
        //             ind : "195.000",
        //         },
        //         beginner : [
        //             "Онолын суурь хичээл",
        //             "Баруун гарын барил",
        //             "Нясалгааны төрлүүд", 
        //             "2-3 жижиг аяз",
        //             "2 ардын дуу",
        //         ],
        //         intermediate : [
        //             "Дунд шатны хөгжмийн онол",
        //             "Нюанс",
        //             "2 гараар хөгжимдөх арга барил",
        //             "Ардын дууг вариацлан хөгжимдөх арга барил",
        //             "2-5 дунд шатны зохиол /сонголтоор/",
        //         ],
        //         advanced :[
        //             "Ахисан түвшний онолын хичээл",
        //             "Бие дааж зохиолтой ажиллах чадвар",
        //             "Хамсран хөгжимдөх ур чадвар",
        //             "Уран сэтгэмжээр хөгжимдөх арга барил",
        //             "2-3 Мэргэжлийн хөгжмийн зохиол",
        //         ]
        //     },
        //     {
        //         title : 'Саксафон',
        //         text : "Саксафон сургалт",
        //         img : `${sax.src}`,
        //         price : {
        //             ind_title : "Ганцаарчилсан",
        //             ind : "195.000",
        //         },
        //         beginner : [
        //         ],
        //         intermediate : [
        //         ],
        //         advanced :[
        //         ]
        //     },
        //     {
        //         title : 'Дуулаач',
        //         text : "Дуулаачийн сургалт",
        //         img : `${vocal.src}`,
        //         price : {
        //             ind_title : "Ганцаарчилсан",
        //             ind : "250.000",
        //         },
        //         beginner : [
        //         ],
        //         intermediate : [
        //         ],
        //         advanced :[
        //         ]
        //     }
        // ], 
    },
    {
        title : "Courses",
        programmes : "Programmes",
        pricing : "Monthly Pricing",
        price : {
            individual : "Individual",
            group : "Group",
        },
        beginner_title : "Beginner",
        intermediate_title : "Intermediate",
        advanced_title : "Advanced",
        // courses : [
        //     {
        //         title : 'Guitar',
        //         text : "Guitar Course",
        //         img : `${guitar.src}`,
        //         price : {
        //             ind_title : "Individual class",
        //             ind : "195.000",
        //             group_title : "Group class",
        //             group : "110.000",
        //         },
        //         beginner : [
        //             "Chords",
        //             "Arpeggio techniques",
        //             "Strumming techniques",
        //             "Tab/Note Reading",
        //             "2-5 simple compositions",
        //         ],
        //         intermediate : [
        //             "Basic Music Theory",
        //             "Alternate Chords",
        //             "Listening",
        //             "Impovisation skills",
        //             "2-5 full compositions",
        //         ],
        //         advanced :[
        //             "Advanced Music Theory",
        //             "Chord Structures",
        //             "Advanced Listening",
        //             "Composing Skills",
        //             "2-5 Advanced Compositions",
        //         ]
        //     },
        //     {
        //         title : 'Piano',
        //         text : "Piano Course",
        //         img : `${piano.src}`,
        //         price : {
        //             ind_title : "Individual class",
        //             ind : "195.000",
        //         },
        //         beginner : [
        //             "Fundamentals of Music Theory",
        //             "Hand positions",
        //             "Note Reading",
        //             "2-5 Simple Piano Pieces",
        //             "Piano Composition",
        //         ],
        //         intermediate : [
        //             "Intermediate Music Theory",
        //             "Music Nuance",
        //             "Piano Pedalling",
        //             "2-5 Intermediate Piano Pieces",
        //             "Ensemble skills",
        //         ],
        //         advanced :[
        //             "Advanced Music Theory",
        //             "Independent Learning skills",
        //             "Ensemble Skills",
        //             "Improvising Skills",
        //             "2-3 Advanced Compositions",
        //         ]
        //     },
        //     {
        //         title : 'Ukulele',
        //         text : "Ukulele Course",
        //         img :`${ukulele.src}`,
        //         price : {
        //             ind_title : "Individual class",
        //             ind : "195.000",
        //             group_title : "Group class",
        //             group : "110.000",
        //         },
        //         beginner : [
        //         ],
        //         intermediate : [
        //         ],
        //         advanced :[
        //         ]
        //     },
        //     {
        //         title : 'Morin Khuur',
        //         text : "Morin Khuur Course",
        //         img : `${mhuur.src}`,
        //         price : {
        //             ind_title : "Individual class",
        //             ind : "195.000",
        //         },
        //         beginner : [
        //         ],
        //         intermediate : [
        //         ],
        //         advanced :[
        //         ]
        //     },
        //      {
        //         title : 'Violin',
        //         text : "Violin Course",
        //         img : `${hiil.src}`,
        //         price : {
        //             ind_title : "Individual class",
        //             ind : "195.000",
        //         },
        //         beginner : [
        //         ],
        //         intermediate : [
        //         ],
        //         advanced :[
        //         ]
        //     },
        //     {
        //         title : 'Drum',
        //         text : "Drum Course",
        //         img : `${drum.src}`,
        //         price : {
        //             ind_title : "Individual class",
        //             ind : "195.000",
        //         },
        //         beginner : [
        //         ],
        //         intermediate : [
        //         ],
        //         advanced :[
        //         ]
        //     },
        //     {
        //         title : 'Guzheng',
        //         text : "Guzheng Course",
        //         img :`${ytga.src}`,
        //         price : {
        //             ind_title : "Individual class",
        //             ind : "195.000",
        //         },
        //         beginner : [
        //             "Fundamentals of Music Theory",
        //             "Right Hand Positions",
        //             "Types of Flicking techniques", 
        //             "2-3 simple compositions",
        //             "2 folk songs",
        //         ],
        //         intermediate : [
        //             "Intermediate Music Theory",
        //             "Music Nuance",
        //             "2 Hands Techniques",
        //             "Variation Techniques",
        //             "2-5 Intermediate Compositions",
        //         ],
        //         advanced :[
        //             "Advanced Music Theory",
        //             "Independent Learning Skills",
        //             "Ensemble Skills",
        //             "Improvisation Skills",
        //             "2-3 Advanced Compositions",
        //         ]
        //     },
        //     {
        //         title : 'Saxophone',
        //         text : "Saxophone course",
        //         img : `${sax.src}`,
        //         price : {
        //             ind_title : "Individual class",
        //             ind : "195.000",
        //         },
        //         beginner : [
        //         ],
        //         intermediate : [
        //         ],
        //         advanced :[
        //         ]
        //     },
        //     {
        //         title : 'Vocal',
        //         text : "Vocal Course",
        //         img : `${vocal.src}`,
        //         price : {
        //             ind_title : "Individual class",
        //             ind : "250.000",
        //         },
        //         beginner : [
        //         ],
        //         intermediate : [
        //         ],
        //         advanced :[
        //         ]
        //     }
        // ], 
    },
    {
        title : "培訓班",
        programmes : "程式",
        pricing : "每月定价",
        price : {
            individual : "个人",
            group : "团体",
        },
        beginner_title : "初学者",
        intermediate_title : "中间的",
        advanced_title : "先进的",
        // courses : [
        //     {
        //         title : '吉他',
        //         text : "吉他課程",
        //         img : `${guitar.src}`,
        //         price : {
        //             ind_title : "个人班",
        //             ind : "195.000",
        //             group_title : "团体课",
        //             group : "110.000",
        //         },
        //         beginner : [
        //             "和弦",
        //             "琶音技巧",
        //             "弹奏技巧",
        //             "标签/注释阅读",
        //             "2-5个简单的作文",
        //         ],
        //         intermediate : [
        //             "基础音乐理论",
        //             "交替和弦",
        //             "交替和弦",
        //             "即兴创作技巧",
        //             "2-5个完整的作品",
        //         ],
        //         advanced :[
        //             "高级音乐理论",
        //             "和弦结构",
        //             "高级听力",
        //             "作曲技巧",
        //             "2-5 高级作文",
        //         ]
        //     },
        //     {
        //         title : '钢琴',
        //         text : "鋼琴課程",
        //         img : `${piano.src}`,
        //         price : {
        //             ind_title : "个人班",
        //             ind : "195.000",
        //         },
        //         beginner : [
        //             "音乐理论基础",
        //             "手的位置",
        //             "笔记阅读",
        //             "2-5 简单的钢琴曲",
        //             "钢琴作曲",
        //         ],
        //         intermediate : [
        //             "中级音乐理论",
        //             "音乐细微差别",
        //             "钢琴踏板",
        //             "2-5 中级钢琴曲",
        //             "合奏技巧",
        //         ],
        //         advanced :[
        //             "高级音乐理论",
        //             "自主学习能力",
        //             "合奏技巧",
        //             "即兴技巧",
        //             "2-3 高级作曲",
        //         ]
        //     },
        //     {
        //         title : '尤克里里',
        //         text : "尤克里裡課程",
        //         img :`${ukulele.src}`,
        //         price : {
        //             ind_title : "个人班",
        //             ind : "195.000",
        //             group_title : "团体课",
        //             group : "110.000",
        //         },
        //         beginner : [
        //         ],
        //         intermediate : [
        //         ],
        //         advanced :[
        //         ]
        //     },
        //     {
        //         title : '莫林胡尔',
        //         text : "馬鈴薯訓練",
        //         img : `${mhuur.src}`,
        //         price : {
        //             ind_title : "个人班",
        //             ind : "195.000",
        //         },
        //         beginner : [
        //         ],
                
        //         intermediate : [
        //         ],
                
        //         advanced :[
        //         ]
        //     },
        //      {
        //         title : '小提琴',
        //         text : "小提琴訓練",
        //         img : `${hiil.src}`,
        //         price : {
        //             ind_title : "个人班",
        //             ind : "195.000",
        //         },
        //         beginner : [
        //         ],
        //         intermediate : [
        //         ],
        //         advanced :[
        //         ]
        //     },
        //     {
        //         title : '鼓',
        //         text : "鼓課程 ",
        //         img : `${drum.src}`,
        //         price : {
        //             ind_title : "个人班",
        //             ind : "195.000",
        //         },
        //         beginner : [
        //         ],
        //         intermediate : [
        //         ],
                
        //         advanced :[
        //         ]
        //     },
        //     {
        //         title : '记住',
        //         text : "豎琴訓練",
        //         img :`${ytga.src}`,
        //         price : {
        //             ind_title : "个人班",
        //             ind : "195.000",
        //         },
        //         beginner : [
        //             "音乐理论基础",
        //             "右手位置",
        //             "轻弹技术的类型", 
        //             "2-3个简单的作文",
        //             "2 民歌",
        //         ],
        //         intermediate : [
        //             "中级音乐理论",
        //             "音乐细微差别",
        //             "2手技巧",
        //             "变化技巧",
        //             "2-5 中间作文",
        //         ],
        //         advanced :[
        //             "高级音乐理论",
        //             "独立学习技巧",
        //             "合奏技巧",
        //             "即兴技巧",
        //             "2-3 高级作曲",
        //         ]
        //     },
        //     {
        //         title : '萨克斯管',
        //         text : "薩克斯管訓練",
        //         img : `${sax.src}`,
        //         price : {
        //             ind_title : "个人班",
        //             ind : "195.000",
        //         },
        //         beginner : [
        //         ],
        //         intermediate : [
        //         ],
        //         advanced :[
        //         ]
        //     },
        //     {
        //         title : '声乐',
        //         text : "聲樂課程",
        //         img : `${vocal.src}`,
        //         price : {
        //             ind_title : "个人班",
        //             ind : "250.000",
        //         },
        //         beginner : [
        //         ],
        //         intermediate : [
        //         ],
        //         advanced :[
        //         ]
        //     }
        // ], 
    }
]

module.exports = {
    CoursesLocale,
}