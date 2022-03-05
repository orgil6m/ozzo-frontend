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
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;