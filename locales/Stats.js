const StatsLocale = [
    {
       items : [
            {
                title : "Хөгжмийн академи",
                text1 : "суралцагч",
                text2 : "Монгол улсаас гадна дэлхийн өнцөг булан бүрээс онлайнаар манай сургалтанд хамрагдсаар байна.",
                icon : <GroupIcon />,
                number : "8214",
                class1: 'bg-red-500'
             },
            {
                title : "Монгол дууны сан",
                text1: "дуу",
                text2 : "Үе үеийн шилдэг дуунуудыг хэрхэн тоглох зааврыг www.daavkatunes.mn сайтаар дамжуулан хүргэсэн.", 
                icon : <MusicNotesIcon />,
                number : "1056",
                class1: 'bg-sky-500'
            },
            {
                title : "Видео хичээл",
                text1 : "цагийн хичээл",
                text2 : "Монголын залуусын хөгжмийн боловсролд зориулан гаргасан үнэ төлбөргүй хичээлүүд.",
                icon : <VideoIcon />,
                number : "172",
                class1: 'bg-emerald-500'
            },
            {
                title : "Ковер бичлэг",
                text1: "ковер тоглолт",
                text2 : "Хамтран ажилладаг уран бүтээлчид болон манай шилдэг суралцагчидын гаргасан сонирхолтой ковер.",
                icon : <MicIcon />,
                number : "97",
                class1: 'bg-sky-700'
            },
            {
                title : "Төгөл",
                text1: "мод",
                text2 : "Залуусыг эх дэлхий байгалаа хайрлан хамгаалах үйлсэд уриалан DaavkaTunes бяцхан төглийг байгуулсан.",
                icon : <GLobeIcon />,
                number : "37",
                class1: 'bg-teal-500'
            },
            {
                title : "Олон нийтийн үйл ажиллагаа",
                text1: "үйл ажиллагаа",
                text2: "Хөгжим сонирхогч залууст зориулж чөлөөт цагаа зөв боловсон өнгөрүүлэх бие биенээсээ суралцах хамтдаа хөгжих боломжыг олгох үүднээс зохион байгуулсан үйл ажиллагаанууд.",
                icon : <EventsIcon />,
                number : "11",
                class1: 'bg-violet-500'
            }
        ]
    },
    {
        items : [
            {
                title : "Music Academy",
                text1: "students",
                text2 : "In addition to Mongolia, people from all over the world continue to attend our online training.", 
                icon : <GroupIcon />,
                number : "8214",
            },
            {
                title : "Song Library",
                text1: "songs",
                text2 : "Instructions on how to play the best songs of all time are available at www.daavkatunes.mn.",
                icon : <MusicNotesIcon />,
                number : "1056",
            },
            {
                title : "Video Tutorials",
                text1: "hours",
                text2 : "Free video lessons for music education of Mongolian youth.",
                icon : <VideoIcon />,
                number : "172",
            },
            {
                title : "Cover Videos",
                text1: "covers",
                text2 : "An interesting cover by our collaborating artists and our best students.", 
            },
            {
                title : "Garden",
                text1: "trees",
                text2 : "DaavkaTunes has created a small grove to encourage young people to love and protect nature.", 
            },
            {
                title : "Public Events",
                text1: "events",
                text2 : "Activities for young music lovers to spend their free time learning from each other and developing together.", 
            }
        ]
    },
    {
        items : [
            {
                title : "音乐培训",
                text1 : "学生们",
                text2 : "除了蒙古，来自世界各地的人们继续参加我们的在线培训。",
                icon : <GroupIcon />,
                number : "8214",
            },
            {
                title : "蒙古歌曲库",
                text1 : "歌曲",
                text2 : "www.daavkatunes.mn 提供了有关如何播放有史以来最好的歌曲的说明。",
                icon : <MusicNotesIcon />,
                number : "1056",
            },
            {
                title : "视频教程",
                text1 : "小时",
                text2 : "蒙古族青年音乐教育免费课程。",
                icon : <VideoIcon />,
                number : "172",
            },
            {
                title : "封面视频",
                text1 : "盖子",
                text2 : "我们合作的艺术家和我们最好的学生的有趣封面。",
            },
            {
                title : "花园",
                text1 : "树木",
                text2 : "DaavkaTunes 创建了一个小树林来鼓励年轻人热爱和保护自然。",
            },
            {
                title : "公共活动",
                text1 : "事件",
                text2 : "为年轻音乐爱好者打发业余时间相互学习、共同发展的活动。",
            }
        ]
    }
]

module.exports = {
    StatsLocale,
}

function GroupIcon () {
  return (
    <svg className="lg:h-24 lg:w-24 h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function MusicNotesIcon() {
  return (
    <svg className="lg:h-24 lg:w-24 h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg className="lg:h-24 lg:w-24 h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg className="lg:h-24 lg:w-24 h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  );
}

function GLobeIcon() {
  return (
    <svg className="lg:h-24 lg:w-24 h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function EventsIcon() {
  return (
    <svg className="lg:h-24 lg:w-24 h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}