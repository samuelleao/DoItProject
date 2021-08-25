import Head from 'next/head';

export default function HeadCustom(props){
    return(
        <Head>
            <title>{props.title} - Do it</title>
            <meta name="description" content="Do it - O jeito fácil, grátis
            flexível e atrativo de gerenciar seus projetos em uma única plataforma" />
        </Head>
    )
}
