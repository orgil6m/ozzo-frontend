const ActivitesLocale = [
    {
        title : "ҮЙЛ АЖИЛЛАГАА",
        text: "ОЗЗО ХХК нь 2010 оноос үйл ажиллагаагаа эрхэлсэн бөгөөд Монголын хамгийн анхны тусгай зөвшөөрөлтэй ХНХЯ болон БШУЯ-ны батламж бүхий хөгжмийн мэдлэгийн чадамжийн гэрчилгээ олгох цорын ганц Хөгжмийн Академийг байгуулан бизнесийн үйл ажиллагаа эрхлэн, нийгэм, эдийн засгийн хөгжилд хувь нэмрээ оруулсаар ирсэн бөгөөд өдгөө татвар шимтгэл, хөрөнгө оруулалт, ажлын байр зэрэг үзүүлэлтээр Хөгжмийн Сургалтын чиглэлээр тэргүүлэгч үндэсний томоохон Хөгжмийн Академи болоод байна.",
        services :[
            {
                title: 'Хөгжмийн академи',
                icon: <AcademyIcon />,
                icon1: <StudyIcon1 />,
                url: "academy",
                color : "bg-red-500/10",
            },
            {
                title: 'Хөгжмийн дэлгүүр',
                icon: <StoreIcon />,
                icon1: <StoreIcon1 />,
                url : "store",
                color : "bg-sky-500/10",
            },
             {
                title: "Хөгжмийн Лабель",
                icon : <LabelIcon />,
                icon1: <MicIcon1 />,
                url : "label",
                color : "bg-emerald-500/10",
            },
            {
                title: 'Хөгжмийн засвар',
                icon: <MaintenanceIcon />,
                icon1: <SettingsIcon1 />,
                url : "maintenance",
                color : "bg-sky-700/10",
            },
            {
                title: 'Хөгжмийн түрээс',
                icon : <RentIcon/>,
                icon1 : <RentIcon1 />,
                url : "rent",
                color : "bg-teal-500/10",
            },
            {
                title: 'Веб Хөгжүүлэлт',
                icon : <DevIcon />,
                icon1 : <DevIcon1 />,
                url : "dev",
                color : "bg-indigo-500/10"
            },
           
        ]
    },
    {
        title : "АCTIVITIES",
        text : "OZZO LLC has been operating since 2010 and is the only licensed music academy in Mongolia to be licensed by the Ministry of Labor and Social Welfare and the Ministry of Education, Culture and Science. It has become a leading national music academy in terms of investment and employment.",
        services :[
            {
                title: 'Music academy',
                icon: <AcademyIcon />,
                icon1: <StudyIcon1 />,
                url: "/academy",
                color : "bg-red-500/10",
            },
            {
                title: 'Music Store',
                icon: <StoreIcon />,
                icon1: <StoreIcon1 />,
                url : "/store",
                color : "bg-sky-500/10",
            },
            {
                title: "Music Label",
                icon : <LabelIcon />,
                icon1: <LabelIcon />,
                url : "/label",
                color : "bg-emerald-500/10",
            },
            {
                title: 'Instrument maintenance',
                icon: <MaintenanceIcon />,
                icon1: <SettingsIcon1 />,
                url : "/maintenance",
                color : "bg-sky-700/10",
            },
            {
                title: 'Instrument Rental',
                icon : <RentIcon/>,
                icon1 : <RentIcon1/>,
                url : "/rent",
                 color : "bg-teal-500/10",
            },
            {
                title: 'Web development',
                icon : <DevIcon />,
                icon1 : <DevIcon1 />,
                url : "/dev",
                 color : "bg-indigo-500/10"
            },
        ],
    },
    {
        title : "活动",  
        text: "OZZO LLC 自 2010 年开始运营，是蒙古唯一一家获得劳动和社会福利部和教育、文化和科学部许可的音乐学院。 在投资和就业方面，它已成为国内领先的音乐学院。",
        services :[
            {
                title: '音乐学院',
                icon: <AcademyIcon />,
                icon1: <StudyIcon1 />,
                url: "/academy",
                color : "bg-red-500/10",
            },
            {
                title: '音乐店',
                icon: <StoreIcon />,
                icon1: <StoreIcon1 />,
                url : "/store",
                color : "bg-sky-500/10",
            },
            {
                title: "音乐标签",
                icon : <LabelIcon />,
                icon1: <LabelIcon />,
                url : "/label",
                color : "bg-emerald-500/10",
            },
            {
                title: '音乐服务',
                icon: <MaintenanceIcon />,
                icon1: <SettingsIcon1 />,
                url : "/maintenance",
                color : "bg-sky-700/10",
            },
            {
                title: '仪器租赁',
                icon : <RentIcon/>,
                icon1 : <RentIcon1/>,
                url : "/rent",
                 color : "bg-teal-500/10",
            },
            {
                title: '网站开发',
                icon : <DevIcon />,
                icon1 : <DevIcon1 />,
                url : "/dev",
                color : "bg-indigo-500/10"
            },
        ]
    }
]

function AcademyIcon(props){
  return (
    <svg  className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  )
}

function StoreIcon(props){
  return (
    <svg  className="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
}

function MaintenanceIcon(props){
  return (
    <svg  className="h-6 w-6 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}
function RentIcon(props){
  return (
   <svg className="h-6 w-6 text-teal-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function LabelIcon(props){
  return (
    <svg className="h-6 w-6 text-emerald-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  )
}


function DevIcon(props){
  return (
  <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
  )
}


export function StudyIcon1(props){
  return (
    <svg  className="h-40 w-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  )
}

function StoreIcon1(props){
  return (
    <svg  className="h-40 w-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
}

function SettingsIcon1(props){
  return (
    <svg  className="h-40 w-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}
function RentIcon1(props){
  return (
    <svg className="h-40 w-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function ComputerIcon1(props){
  return (

  <svg className="h-40 w-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
  )
}

function DevIcon1(props){
  return (
  <svg className="h-40 w-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
  )
}

function MicIcon1(props){
  return (
  <svg className="h-40 w-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
  )
}


module.exports = {
  ActivitesLocale
}
 


 
 