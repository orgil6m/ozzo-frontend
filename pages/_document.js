import Document, {Html,Head,Main, NextScript} from 'next/document'

class MyDocument extends Document
{
    render(){
        return (
            <Html lang="en">
                <Head>
                    <meta name="OZZO LLC" content="ozzo" />
                    <link rel="shortcut icon" href="/ozzo.ico" />
                </Head>
                <body >
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