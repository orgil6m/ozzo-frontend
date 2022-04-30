
const WebIcon = () => {
    return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
    )
}
const MobileIcon = () => {
    return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
    )
}
const ErpIcon = () => {
    return (
       <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
    )
}
const DesignIcon = () => {
    return (
     <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
    )
}
const AcademyIcon = () => {
    return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
    )
}
const ConsultingIcon = () => {
    return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
    )
}

const DevLocale = [
    {
        title : "ОЗЗО TEK", 
        service : "Манай үйлчилгээ",
        portfolio : "Хийж гүйцэтгэсэн ажлууд",
        about : "ОЗЗО TEK нь программ хангамж үйлдвэрлэгч компани бөгөөд тэр дундаа мэдээллийн технологийн тусламжтайгаар урлаг уран сайхан, хөгжмийн салбар дээрх жижиг мэт боловч өдөр тутамд тулгардаг асуудлуудыг хамгийн оновчтой зөв шийдлээр шийдэж монголын хөгжмийн, урлагийн салбарт шинэ салхийг оруулж байна.",
        services : [
            {
                title : "Веб хөгжүүлэлт",
                icon : <WebIcon />,
                color : "bg-indigo-100 text-indigo-500",
                text : "Бид цор ганц, дахин давтагдашгүй Веб аппликейшн болоод Веб сайтыг хамгийн сүүлийн үеийн технологи болон загвар дизайнаар зөвхөн танд болон таны бизнест зориулан урлах болно."
            },
            {
                title : "Мобайл хөгжүүлэлт",
                icon : <MobileIcon />,
                color : "bg-sky-100 text-sky-500",
                text : "Бид IOS, Андройд болон Windows үйлдлийн систем бүхий ухаалаг гар утасны аплликейшныг хамгийн сүүлийн үеийн технологиор хамгийн чанартай хийж гүйцэтгэнэ."
            },
            {
                title : "ERP  Систем",
                icon : <ErpIcon />,
                color : "bg-orange-100 text-orange-500",
                text : "Бид жижиг дундаас эхлээд том хэмжээний байгууллага болон бизнес эрхлэгчдэд зориулсан ERP+CMS шийдлийг санал болгож байна"
            },
            {
                title : "График Дизайн",
                icon : <DesignIcon />,
                color : "bg-rose-100 text-rose-500",
                text : "Бид хувиараа бизнес эрхлэгчид болон байгууллагуудад орчин үеийн өнгө төрх бүхий Веб болон Mобайл аплликейшны дизайны шийдэл, брендингийг хийж үйлчилж байна."
            },
            {
                title : "Кодинг Сургалт",
                icon : <AcademyIcon />,
                color : "bg-green-100 text-green-500",
                text : "Бид ахлах ангийн сурагчид болон анхлан код болон програмчлал сонирхогчдын хүслийг өдөөх, ирээдүйн мэдээлэл технологийн мэргэжилтнүүдийн шавыг тавих кодингийн сургалтыг явуулж байна."
            },
            {
                title : "Консалтинг үйлчилгээ",
                icon : <ConsultingIcon />,
                color : "bg-amber-100 text-amber-500",
                text : "Танд мэдээллийн технологийн мэргэжлийн зөвлөгөө хэрэгтэй байна уу? Бид олон жилийн турш хуримтлуулсан арвин туршлага дээр тулгуурлан чанартай зөвлөгөө, шийдлийг танд санал болгоход бэлэн байна."
            }
        ]
    },
    {
        title : "OZZO TECH",
        about: "OZZO TECH is a software manufacturer, and with the help of information technology, it is bringing a new wind to the Mongolian Music Industry by solving the small but daily problems in the arts and music sector with the most appropriate solutions.",
        service : "Our Services",
        portfolio : "Portfolio",
        services : [
            {
                title : "Web Development",
                icon : <WebIcon />,
                color : "bg-indigo-100 text-indigo-500",
                text : "We will craft unique websites especially tailored for your business with the latest technology and graphic design along with reliable operation and perfect security assurance."
            },
            {
                title : "Mobile Development",
                icon : <MobileIcon />,
                color : "bg-sky-100 text-sky-500",
                text : "High quality and modern mobile applications for smart devices with iOS, Android and Windows Phone operating systems."
            },
            {
                title : "ERP  System",
                icon : <ErpIcon />,
                color : "bg-orange-100 text-orange-500",
                text : "We offer a complete ERP plus CMS (Content Management) solution for small, medium and large enterprises."
            },
            {
                title : "Graphic Design",
                icon : <DesignIcon />,
                color : "bg-rose-100 text-rose-500",
                text  : "Unique graphic design for web site, branding and social interactions for individuals and businesses.",
            },
            {
                title : "Coding Academy",
                icon : <AcademyIcon />,
                color : "bg-green-100 text-green-500",
                text : "We offer coding academy for high school students and beginners in code and programming, as well as for future IT professionals."
            },
            {
                title : "Consulting Service",
                icon : <ConsultingIcon />,
                color : "bg-amber-100 text-amber-500",
                text : "Do you need professional IT consulting? We are ready to offer you quality consulting and solutions based on our vast experience accumulated for years."
            },
        ]
    },
    {
        title : "OZZO TECH",
        about : "OZZO TECH 是一家软件制造商，借助信息技术，它为蒙古音乐产业带来了一股新风，通过最合适的解决方案解决了艺术和音乐领域的小而日常的问题。",
        service : "我们的服务",
        portfolio : "文件夹",
        services : [
            {
                title : "Web开发",
                icon : <WebIcon />,
                color : "bg-indigo-100 text-indigo-500",
                text : "我们将采用最新的技术和图形设计以及可靠的操作和完善的安全保证，为您的业务量身定制独特的网站。"
            },
            {
                title : "移动开发",
                icon : <MobileIcon />,
                color : "bg-sky-100 text-sky-500",
                text : "适用于 iOS、Android 和 Windows Phone 操作系统的智能设备的高质量和现代移动应用程序。"
            },
            {
                title : "企业资源规划系统",
                icon : <ErpIcon />,
                color : "bg-orange-100 text-orange-500",
                text : "我们为中小型企业提供完整的 ERP 和 CMS（内容管理）解决方案。"
            },
            {
                title : "平面设计",
                icon : <DesignIcon />,
                color : "bg-rose-100 text-rose-500",
                text : "针对个人和企业的网站、品牌和社交互动的独特图形设计。"
            },
            {
                title : "编码学院",
                icon : <AcademyIcon />,
                color : "bg-green-100 text-green-500",
                text : "我们为高中生和代码和编程初学者以及未来的 IT 专业人士提供编码学院。"
            },
            {
                title : "咨询服务",
                icon : <ConsultingIcon />,
                color : "bg-amber-100 text-amber-500",
                text : "您需要专业的 IT 咨询吗？基于我们多年积累的丰富经验，我们随时准备为您提供优质的咨询和解决方案。"
            },
        ]
    }
]


module.exports = {
  DevLocale
}
 