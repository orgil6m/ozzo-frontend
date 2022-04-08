const { Main } = require("next/document")

const NavbarLocale = [
  {
    ozzo: 'ОЗЗО ХХК',
    home: 'Нүүр',
    about : 'Бидний Тухай',
    services: 'Үйлчилгээ',
    contact : 'Холбоо Барих',
    news : 'Мэдээлэл',

    recent : "Сүүлд нэмэгдсэн",
    more : "Бүгдийг үзэх",
    learnmore: "Дэлгэрэнгүй",

     service : [
      {
        title: 'Хөгжмийн Академи',
        url : "/services/academy",
        icon : <AcademyIcon />,
        color :  "bg-red-500/10"
      },
      {
        title : 'Хөгжмийн Дэлгүүр ', 
        url: "/services/store",
        icon : <StoreIcon />,
        color :  "bg-sky-500/10"
      },
      {
        title : "Хөгжмийн Лабель",
        url : "/services/label",
        icon :  <LabelIcon />,
         color :  "bg-emerald-500/10"
      },
      {
        title : 'Хөгжмийн Засвар',
        url : "/services/maintenance",
        icon : <MaintenanceIcon />,
         color :  "bg-sky-700/10"
      },
      {
        title: "Хөгжмийн Түрээс",
        url : "/services/rental",
        icon : <RentIcon />,
         color :  "bg-teal-500/10"
        
      },
      {
        title: "Веб Хөгжүүлэлт",
        url : "/services/dev",
        icon : <DevIcon />,
        color :  "bg-indigo-500/10"
      },
    ],
  },
  {
    ozzo: "OZZO LLC",
    home: "Home",
    about : 'About Us',
    services: 'Services',
    contact : 'Contact',
    news : 'News',

    recent : "Recent news",
    more : "See all",
    learnmore: "Learn more",
    
    service : [
      {
        title: 'Music Academy',
      },
      {
        title : 'Music Store ', 
      },
      {
        title : "Music Label", 
      },
      {
        title : 'Instrument Maintenance',
      },
      {
        title: "Instrument Rental",
      },
      {
        title: "Web Development",
      },
    ]
  },
  {
    ozzo: "奥佐公司",
    home: "首页",
    about : '关于我们', 
    services: '服务',
    contact : '接触',
    news : '消息',
    recent : "最近的新闻",
    more : "查看全部",
    learnmore: "了解更多",
    services : { 
      academy: "音乐学院",
      store : '音乐店 ',
      label :"音乐标签",
      maintenance : '音乐服务',
      rent: "仪器租赁",
      dev: "网站开发",
    }
  },
]


module.exports = {
  NavbarLocale,
}


function AcademyIcon(props){
  return (
    <svg  className="h-5 w-5 m-1 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  )
}

function StoreIcon(props){
  return (
    <svg  className="h-5 w-5 m-1 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
}

function MaintenanceIcon(props){
  return (
    <svg  className="h-5 w-5 m-1 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}
function RentIcon(props){
  return (
   <svg className="h-5 w-5 m-1 text-teal-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function LabelIcon(props){
  return (
    <svg className="h-5 w-5 m-1 text-emerald-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  )
}


function DevIcon(props){
  return (
  <svg className="h-5 w-5 m-1 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
  )
}