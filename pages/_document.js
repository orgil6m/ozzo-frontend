import Document, {Html,Head,Main, NextScript} from 'next/document'

class MyDocument extends Document
{
    render(){
        return (
            <Html lang="en">
                <Head>

                    <meta name="OZZO LLC" content="ozzo" />
                    <link rel="shortcut icon" href="/ozzo.ico" />
                    <meta name="description" content="OZZO LLC" />
                    <meta name="keywords" content="Ozzo,ozzo music,daavkatunes, daavka, guitar, ukulele, piano" />
                    <meta charSet="utf-8"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                    <meta name="twitter:description" content="OZZO LLC Official Website" />
                    <meta name="application-name" content="OZZO LLC"/>

                    <meta name="twitter:card" content="OZZO LLC" />
                    <meta name="twitter:url" content="https://ozzo.mn"/>
                    <meta name="twitter:title" content="OZZO LLC" />
                    <meta name="twitter:description" content="OZZO LLC Official Website" />
                    <meta name="twitter:image" content="/Assets/preview.jpg" />

                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="OZZO LLC" />
                    <meta property="og:description" content="OZZO LLC Official Website" />
                    <meta property="og:url" content="https://ozzo.mn" />
                    <meta property="og:image"content="/Assets/preview.jpg" />

                </Head>
                <body className='select-none'>
                    <Main />
                    <NextScript />
                    <div className='
                        from-red-400 to-red-500
                        from-sky-400 to-sky-500 
                        from-sky-600 to-sky-700
                        from-teal-400 to-teal-500 
                        from-emerald-400 to-emerald-500 
                        from-violet-400 to-violet-500 
                        bg-red-500 
                        bg-sky-500
                        bg-sky-700
                        bg-teal-500 
                        bg-emerald-500 
                        bg-violet-500 
                        bg-indigo-500 
                        border-red-500 
                        border-teal-500 
                        border-sky-500
                        border-sky-700 
                        text-red-500 
                        text-sky-500 
                        text-teal-500 
                        text-emerald-500 
                        text-indigo-500 
                        text-sky-700
                        bg-indigo-100 text-indigo-500
                        bg-orange-100 text-orange-500
                        bg-rose-100 text-rose-500
                        bg-green-100 text-green-500
                        bg-amber-100 text-amber-500
                        bg-red-500/10 
                        bg-sky-500/10
                        bg-sky-700/10
                        bg-teal-500/10 
                        bg-emerald-500/10 
                        bg-violet-500/10 
                        bg-indigo-500/10'>
                    </div>
                </body>
            </Html>
        )
    }
}

export default MyDocument;